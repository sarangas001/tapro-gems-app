import Link from "next/link";

type LogoVariant = "horizontal" | "stacked" | "icon";
type LogoTheme = "light" | "dark";

interface LogoProps {
  variant?: LogoVariant;
  theme?: LogoTheme;
  className?: string;
}

function GemIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M6 12L16 4L26 12L16 28L6 12Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M6 12H26" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" />
      <path d="M11.5 12L16 4" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" />
      <path d="M20.5 12L16 4" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" />
      <path d="M11.5 12L16 28" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" />
      <path d="M20.5 12L16 28" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" />
    </svg>
  );
}

export default function Logo({
  variant = "horizontal",
  theme = "light",
  className = "",
}: LogoProps) {
  const iconColor = theme === "dark" ? "text-gold-400" : "text-sapphire-700";
  const primaryText = theme === "dark" ? "text-ivory" : "text-navy-900";
  const secondaryText = theme === "dark" ? "text-gold-300" : "text-gold-600";

  const icon = <GemIcon className={`h-7 w-7 shrink-0 ${iconColor}`} />;

  const wordmark = (
    <span className="flex flex-col leading-none">
      <span className={`font-display text-xl ${primaryText}`}>Tapro</span>
      <span className={`text-[10px] font-medium tracking-[0.4em] ${secondaryText}`}>
        GEMS
      </span>
    </span>
  );

  if (variant === "icon") {
    return (
      <Link href="/" aria-label="Tapro Gems — Home" className={`inline-flex ${className}`}>
        {icon}
      </Link>
    );
  }

  if (variant === "stacked") {
    return (
      <Link
        href="/"
        aria-label="Tapro Gems — Home"
        className={`inline-flex flex-col items-center gap-2 ${className}`}
      >
        {icon}
        {wordmark}
      </Link>
    );
  }

  return (
    <Link
      href="/"
      aria-label="Tapro Gems — Home"
      className={`inline-flex items-center gap-3 ${className}`}
    >
      {icon}
      {wordmark}
    </Link>
  );
}
