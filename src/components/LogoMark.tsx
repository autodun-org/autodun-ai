import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "light" | "dark";
}

export function LogoMark({ className, size = "md", variant = "dark" }: LogoMarkProps) {
  const sizes = {
    sm: "h-8",
    md: "h-10",
    lg: "h-14",
    xl: "h-20",
  };

  const isDark = variant === "dark";
  const textColor = isDark ? "hsl(210, 40%, 98%)" : "hsl(222, 47%, 11%)";
  const lineColor1 = "hsl(199, 89%, 48%)"; // Electric cyan
  const lineColor2 = "hsl(217, 91%, 60%)"; // Electric blue
  const lineColor3 = "hsl(262, 83%, 58%)"; // Subtle purple
  const nodeColor = "hsl(199, 89%, 58%)"; // Bright cyan

  return (
    <svg
      viewBox="0 0 180 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(sizes[size], "w-auto", className)}
      aria-label="AUTODUN"
    >
      {/* Neural flowing lines - contained within text bounds (x: 18 to 162) */}
      {/* Line 1 - Top flowing line */}
      <path 
        d="M20 14 Q50 10, 90 16 Q130 10, 160 14" 
        stroke={lineColor1}
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      <circle cx="20" cy="14" r="2" fill={nodeColor} opacity="0.9" />
      <circle cx="90" cy="15" r="1.5" fill={nodeColor} opacity="0.7" />
      <circle cx="160" cy="14" r="2" fill={nodeColor} opacity="0.9" />
      
      {/* Line 2 - Middle flowing line (main neural path) */}
      <path 
        d="M22 22 Q55 26, 90 21 Q125 26, 158 22" 
        stroke={lineColor2}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />
      <circle cx="22" cy="22" r="2.2" fill={nodeColor} />
      <circle cx="90" cy="21" r="1.8" fill={nodeColor} opacity="0.8" />
      <circle cx="158" cy="22" r="2.2" fill={nodeColor} />
      
      {/* Line 3 - Bottom flowing line */}
      <path 
        d="M24 32 Q60 36, 90 30 Q120 36, 156 32" 
        stroke={lineColor3}
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      <circle cx="24" cy="32" r="1.5" fill={lineColor3} opacity="0.7" />
      <circle cx="156" cy="32" r="1.5" fill={lineColor3} opacity="0.7" />
      
      {/* Subtle vertical connector fragments */}
      <path 
        d="M55 16 Q58 22, 55 28" 
        stroke={lineColor1}
        strokeWidth="0.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
      <path 
        d="M125 15 Q128 22, 125 30" 
        stroke={lineColor2}
        strokeWidth="0.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
      
      {/* AUTODUN text - centered, bold */}
      <text
        x="90"
        y="28"
        textAnchor="middle"
        fill={textColor}
        fontSize="18"
        fontWeight="800"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="4"
      >
        AUTODUN
      </text>
    </svg>
  );
}
