"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, type RefObject } from "react";
import type * as THREE from "three";

const ROTATION_SPEED = 0.045; // rad/s — a full turn takes roughly 2.5 minutes
const AMBIENT_TILT_SPEED = 0.3;
const AMBIENT_TILT_AMPLITUDE = 0.04; // radians, ~2 degrees
const FLOAT_SPEED = 0.45;
const FLOAT_AMPLITUDE = 0.06;
const POINTER_LERP = 0.04;
const POINTER_ROTATION_RANGE = 0.35; // radians, ~20 degrees at full pointer travel

/**
 * Slow rotation + gentle float + a bounded, lagged tilt toward the pointer.
 * Shared by both the placeholder gem and any real GLB, so swapping the
 * model later doesn't mean re-tuning the motion.
 */
function useSapphireMotion(
  groupRef: RefObject<THREE.Group | null>,
  interactive: boolean,
  active: boolean,
) {
  const motion = useRef({ baseRotationY: 0, pointerX: 0, pointerY: 0 });

  useFrame((state, delta) => {
    const group = groupRef.current;
    if (!group || !active) return;

    const m = motion.current;
    const elapsed = state.clock.elapsedTime;

    m.baseRotationY += ROTATION_SPEED * delta;

    if (interactive) {
      m.pointerX += (state.pointer.x - m.pointerX) * POINTER_LERP;
      m.pointerY += (state.pointer.y - m.pointerY) * POINTER_LERP;
    }

    group.rotation.y = m.baseRotationY + m.pointerX * POINTER_ROTATION_RANGE;
    group.rotation.x =
      Math.sin(elapsed * AMBIENT_TILT_SPEED) * AMBIENT_TILT_AMPLITUDE -
      m.pointerY * POINTER_ROTATION_RANGE * 0.6;
    group.position.y = Math.sin(elapsed * FLOAT_SPEED) * FLOAT_AMPLITUDE;
  });
}

interface GltfSapphireProps {
  modelUrl: string;
  interactive: boolean;
  active: boolean;
}

/** Renders a supplied GLB as-is, trusting its authored materials. */
function GltfSapphire({ modelUrl, interactive, active }: GltfSapphireProps) {
  const { scene } = useGLTF(modelUrl);
  const groupRef = useRef<THREE.Group>(null);
  useSapphireMotion(groupRef, interactive, active);

  return <primitive ref={groupRef} object={scene} />;
}

interface PlaceholderSapphireProps {
  interactive: boolean;
  active: boolean;
  quality: "high" | "low";
}

/**
 * Procedural faceted gem stand-in, used until a final sapphire GLB is
 * supplied via `SapphireModel`'s `modelUrl` prop.
 */
function PlaceholderSapphire({ interactive, active, quality }: PlaceholderSapphireProps) {
  const groupRef = useRef<THREE.Group>(null);
  useSapphireMotion(groupRef, interactive, active);

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[1.4, 0]} />
        {quality === "high" ? (
          <meshPhysicalMaterial
            color="#1b4fb0"
            transmission={0.85}
            thickness={1.6}
            roughness={0.06}
            ior={1.77}
            clearcoat={1}
            clearcoatRoughness={0.08}
            envMapIntensity={1.4}
          />
        ) : (
          <meshPhysicalMaterial
            color="#1b4fb0"
            roughness={0.18}
            metalness={0.15}
            clearcoat={0.5}
            clearcoatRoughness={0.25}
          />
        )}
      </mesh>
    </group>
  );
}

interface SapphireModelProps {
  /** Path to a real sapphire GLB (e.g. "/models/sapphire.glb"). Omit to use the placeholder gem. */
  modelUrl?: string;
  interactive?: boolean;
  /** Set false to freeze all motion — used to stop animating off-screen. */
  active?: boolean;
  quality?: "high" | "low";
}

export default function SapphireModel({
  modelUrl,
  interactive = true,
  active = true,
  quality = "high",
}: SapphireModelProps) {
  if (modelUrl) {
    return <GltfSapphire modelUrl={modelUrl} interactive={interactive} active={active} />;
  }

  return <PlaceholderSapphire interactive={interactive} active={active} quality={quality} />;
}
