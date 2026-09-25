/**
 * Shown while the 3D scene's JS chunk (and, once a real GLB is wired up,
 * its model asset) is loading. Purely presentational — no motion of its
 * own beyond a CSS pulse, so it's safe under prefers-reduced-motion too.
 */
export default function HeroLoader() {
  return (
    <div className="flex h-full w-full items-center justify-center" aria-hidden="true">
      <div className="h-40 w-40 animate-pulse rounded-full bg-linear-to-br from-sapphire-400/40 via-sapphire-700/40 to-navy-950/40 blur-2xl sm:h-56 sm:w-56 lg:h-72 lg:w-72" />
    </div>
  );
}
