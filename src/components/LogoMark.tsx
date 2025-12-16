import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function LogoMark({ className, size = "md" }: LogoMarkProps) {
  const sizes = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-16 w-16",
    xl: "h-24 w-24",
  };

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(sizes[size], className)}
      aria-label="AUTODUN"
    >
      {/* Dark navy background circle */}
      <circle cx="50" cy="50" r="48" fill="hsl(222, 47%, 11%)" />
      
      {/* Outer white ring */}
      <circle
        cx="50"
        cy="50"
        r="46"
        stroke="white"
        strokeWidth="1.5"
        fill="none"
      />
      
      {/* Inner white ring */}
      <circle
        cx="50"
        cy="50"
        r="42"
        stroke="white"
        strokeWidth="0.75"
        fill="none"
      />
      
      {/* Abstract road/apex - forward motion symbol */}
      {/* Left lane line */}
      <line
        x1="30"
        y1="45"
        x2="50"
        y2="22"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Right lane line */}
      <line
        x1="70"
        y1="45"
        x2="50"
        y2="22"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Center dashed road line */}
      <line
        x1="50"
        y1="28"
        x2="50"
        y2="35"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="50"
        y1="39"
        x2="50"
        y2="46"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      
      {/* Minimal data nodes - subtle intelligence indicator */}
      <circle cx="35" cy="38" r="1.5" fill="white" />
      <circle cx="65" cy="38" r="1.5" fill="white" />
      <circle cx="50" cy="22" r="2" fill="white" />
      
      {/* Subtle connection lines from apex */}
      <line
        x1="52"
        y1="23"
        x2="58"
        y2="28"
        stroke="white"
        strokeWidth="0.75"
        strokeLinecap="round"
      />
      <line
        x1="48"
        y1="23"
        x2="42"
        y2="28"
        stroke="white"
        strokeWidth="0.75"
        strokeLinecap="round"
      />
      
      {/* AUTODUN text */}
      <text
        x="50"
        y="62"
        textAnchor="middle"
        fill="white"
        fontSize="10"
        fontWeight="700"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="0.5"
      >
        AUTODUN
      </text>
      
      {/* Subtle underline accent */}
      <line
        x1="28"
        y1="67"
        x2="72"
        y2="67"
        stroke="white"
        strokeWidth="0.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
