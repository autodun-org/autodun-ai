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
      {/* Neural network / AI node structure forming abstract "A" */}
      
      {/* Primary vertical axis - central intelligence line */}
      <line
        x1="16"
        y1="4"
        x2="16"
        y2="28"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      
      {/* Left branch - data pathway */}
      <line
        x1="16"
        y1="8"
        x2="6"
        y2="24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      
      {/* Right branch - data pathway */}
      <line
        x1="16"
        y1="8"
        x2="26"
        y2="24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      
      {/* Cross connection - neural layer */}
      <line
        x1="9"
        y1="18"
        x2="23"
        y2="18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      
      {/* Secondary connections - network pathways */}
      <line
        x1="11"
        y1="14"
        x2="21"
        y2="14"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.5"
      />
      
      {/* Primary nodes - intelligence points */}
      <circle cx="16" cy="4" r="2.5" fill="currentColor" />
      <circle cx="16" cy="18" r="2" fill="currentColor" />
      <circle cx="16" cy="28" r="2" fill="currentColor" />
      
      {/* Branch nodes */}
      <circle cx="6" cy="24" r="1.5" fill="currentColor" />
      <circle cx="26" cy="24" r="1.5" fill="currentColor" />
      
      {/* Mid-branch nodes - processing layer */}
      <circle cx="9" cy="18" r="1.5" fill="currentColor" />
      <circle cx="23" cy="18" r="1.5" fill="currentColor" />
      
      {/* Upper layer nodes */}
      <circle cx="11" cy="14" r="1" fill="currentColor" opacity="0.6" />
      <circle cx="21" cy="14" r="1" fill="currentColor" opacity="0.6" />
      <circle cx="16" cy="8" r="1.5" fill="currentColor" />
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
      <line x1="16" y1="4" x2="16" y2="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="8" x2="6" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="8" x2="26" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="9" y1="18" x2="23" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="11" y1="14" x2="21" y2="14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <circle cx="16" cy="4" r="2.5" fill="currentColor" />
      <circle cx="16" cy="18" r="2" fill="currentColor" />
      <circle cx="16" cy="28" r="2" fill="currentColor" />
      <circle cx="6" cy="24" r="1.5" fill="currentColor" />
      <circle cx="26" cy="24" r="1.5" fill="currentColor" />
      <circle cx="9" cy="18" r="1.5" fill="currentColor" />
      <circle cx="23" cy="18" r="1.5" fill="currentColor" />
      <circle cx="11" cy="14" r="1" fill="currentColor" opacity="0.6" />
      <circle cx="21" cy="14" r="1" fill="currentColor" opacity="0.6" />
      <circle cx="16" cy="8" r="1.5" fill="currentColor" />
    </svg>
  );
}
