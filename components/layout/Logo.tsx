import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link href="/" aria-label="Tapro Gems — Home" className={`inline-flex items-center ${className}`}>
      <Image
        src="/logo.png"
        alt="Tapro Gems"
        width={1942}
        height={809}
        priority
        className="h-10 w-auto sm:h-12"
      />
    </Link>
  );
}
