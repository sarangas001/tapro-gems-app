"use client";

import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { hasFinePointer } from "@/lib/motion";
import SapphireModel from "./SapphireModel";

interface SapphireSceneProps {
  /** Path to a real sapphire GLB. Omit to use the placeholder gem. */
  modelUrl?: string;
  quality?: "high" | "low";
}

/**
 * Owns the WebGL canvas, camera and lighting rig. Pointer-follow is only
 * enabled on fine-pointer (mouse/trackpad) devices, and the render loop
 * pauses ("demand" frameloop) whenever the scene scrolls out of view.
 */
export default function SapphireScene({ modelUrl, quality = "high" }: SapphireSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);
  // Safe as a lazy initializer (not an effect): this component is always
  // dynamically imported with `ssr: false`, so it only ever mounts in the
  // browser — there's no server render for the value to mismatch against.
  const [interactive] = useState(hasFinePointer);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.05,
    });
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="h-full w-full">
      <Canvas
        dpr={quality === "high" ? [1, 2] : 1}
        frameloop={inView ? "always" : "demand"}
        camera={{ position: [0, 0, 5], fov: 35 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.45} />
        <directionalLight position={[3, 4, 5]} intensity={1.5} color="#fff3da" />
        <directionalLight position={[-4, -2, -3]} intensity={0.55} color="#4a7fe0" />
        <Suspense fallback={null}>
          <SapphireModel
            modelUrl={modelUrl}
            interactive={interactive}
            active={inView}
            quality={quality}
          />
          {quality === "high" && <Environment preset="studio" />}
        </Suspense>
      </Canvas>
    </div>
  );
}
