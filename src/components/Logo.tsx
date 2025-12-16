import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, size = "md" }: LogoProps) {
  const sizes = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-10 w-10",
  };

  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(sizes[size], className)}
      aria-label="Autodun logo"
    >
      {/* Abstract "A" formed by connected nodes - represents AI/ML network intelligence */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      
      {/* Main triangular structure - stylised A */}
      <path
        d="M16 4L4 26h6l2-4h8l2 4h6L16 4z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      
      {/* Central horizontal connection - data flow */}
      <line
        x1="10"
        y1="18"
        x2="22"
        y2="18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      
      {/* Node points - representing data/intelligence nodes */}
      <circle cx="16" cy="8" r="2" fill="currentColor" />
      <circle cx="10" cy="18" r="1.5" fill="currentColor" />
      <circle cx="22" cy="18" r="1.5" fill="currentColor" />
      <circle cx="16" cy="18" r="1.5" fill="currentColor" />
      
      {/* Apex node - primary intelligence point */}
      <circle cx="16" cy="4" r="1" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-8 w-8", className)}
      aria-label="Autodun"
    >
      <path
        d="M16 4L4 26h6l2-4h8l2 4h6L16 4z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <line
        x1="10"
        y1="18"
        x2="22"
        y2="18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="16" cy="8" r="2" fill="currentColor" />
      <circle cx="10" cy="18" r="1.5" fill="currentColor" />
      <circle cx="22" cy="18" r="1.5" fill="currentColor" />
      <circle cx="16" cy="18" r="1.5" fill="currentColor" />
    </svg>
  );
}
