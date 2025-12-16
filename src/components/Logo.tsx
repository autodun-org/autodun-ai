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
      {/* AI-driven vehicle intelligence: forward trajectory with predictive branching */}
      
      {/* Primary motion path - forward trajectory */}
      <path
        d="M4 20C8 20 10 16 16 16C22 16 24 12 28 12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Upper prediction branch - alternative trajectory */}
      <path
        d="M16 16C20 16 22 8 28 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      
      {/* Lower prediction branch - alternative trajectory */}
      <path
        d="M16 16C20 16 22 20 28 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      
      {/* Origin point - current position/data source */}
      <circle cx="4" cy="20" r="3" fill="currentColor" />
      
      {/* Decision/inference node - AI prediction point */}
      <circle cx="16" cy="16" r="3.5" fill="currentColor" />
      
      {/* Destination nodes - predicted outcomes */}
      <circle cx="28" cy="8" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="28" cy="12" r="2.5" fill="currentColor" />
      <circle cx="28" cy="20" r="2" fill="currentColor" opacity="0.5" />
    </svg>
  );
}
