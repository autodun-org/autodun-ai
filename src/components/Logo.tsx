import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, size = "md" }: LogoProps) {
  const sizes = {
    sm: "h-6 w-6",
    md: "h-7 w-7",
    lg: "h-9 w-9",
  };

  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(sizes[size], className)}
      aria-label="Autodun logo"
    >
      {/* Solid hexagonal intelligence core with internal processing layers */}
      
      {/* Outer hexagon - system boundary */}
      <path
        d="M16 2L28 9V23L16 30L4 23V9L16 2Z"
        fill="currentColor"
        opacity="0.12"
      />
      
      {/* Middle layer - processing ring */}
      <path
        d="M16 6L24 10.5V21.5L16 26L8 21.5V10.5L16 6Z"
        fill="currentColor"
        opacity="0.25"
      />
      
      {/* Inner core - intelligence hub */}
      <path
        d="M16 10L20 12.5V19.5L16 22L12 19.5V12.5L16 10Z"
        fill="currentColor"
      />
      
      {/* Central node - primary signal point */}
      <circle cx="16" cy="16" r="2.5" fill="currentColor" />
      
      {/* Connection nodes - data I/O points */}
      <circle cx="16" cy="6" r="1.5" fill="currentColor" />
      <circle cx="24" cy="10.5" r="1.5" fill="currentColor" />
      <circle cx="24" cy="21.5" r="1.5" fill="currentColor" />
      <circle cx="16" cy="26" r="1.5" fill="currentColor" />
      <circle cx="8" cy="21.5" r="1.5" fill="currentColor" />
      <circle cx="8" cy="10.5" r="1.5" fill="currentColor" />
    </svg>
  );
}
