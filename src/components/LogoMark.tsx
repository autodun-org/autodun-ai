import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "light" | "dark";
}

export function LogoMark({ className, size = "md", variant = "dark" }: LogoMarkProps) {
  const sizes = {
    sm: "h-6",
    md: "h-8",
    lg: "h-12",
    xl: "h-16",
  };

  const isDark = variant === "dark";
  const textColor = isDark ? "hsl(210, 40%, 98%)" : "hsl(222, 47%, 11%)";
  const bgColor = isDark ? "hsl(222, 47%, 11%)" : "transparent";
  const lineColor1 = "hsl(199, 89%, 48%)"; // Electric cyan
  const lineColor2 = "hsl(217, 91%, 60%)"; // Electric blue
  const lineColor3 = "hsl(262, 83%, 58%)"; // Subtle purple
  const nodeColor = "hsl(199, 89%, 58%)"; // Bright cyan

  return (
    <svg
      viewBox="0 0 200 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(sizes[size], "w-auto", className)}
      aria-label="AUTODUN"
    >
      {/* Background for dark variant */}
      {isDark && (
        <rect x="0" y="0" width="200" height="50" rx="6" fill={bgColor} />
      )}
      
      {/* Neural flowing lines - horizontal through text */}
      {/* Line 1 - Top flowing line */}
      <path 
        d="M8 16 Q30 12, 55 18 Q80 22, 105 15 Q130 10, 155 17 Q175 22, 192 14" 
        stroke={lineColor1}
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      <circle cx="8" cy="16" r="2" fill={nodeColor} opacity="0.9" />
      <circle cx="55" cy="18" r="1.5" fill={nodeColor} opacity="0.7" />
      <circle cx="130" cy="12" r="1.8" fill={nodeColor} opacity="0.8" />
      <circle cx="192" cy="14" r="2" fill={nodeColor} opacity="0.9" />
      
      {/* Line 2 - Middle flowing line (main neural path) */}
      <path 
        d="M5 25 Q25 28, 48 24 Q75 20, 100 26 Q125 32, 150 24 Q170 18, 195 26" 
        stroke={lineColor2}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />
      <circle cx="5" cy="25" r="2.2" fill={nodeColor} />
      <circle cx="75" cy="22" r="1.8" fill={nodeColor} opacity="0.8" />
      <circle cx="125" cy="30" r="1.5" fill={nodeColor} opacity="0.7" />
      <circle cx="195" cy="26" r="2.2" fill={nodeColor} />
      
      {/* Line 3 - Bottom flowing line */}
      <path 
        d="M10 35 Q35 40, 60 33 Q90 28, 115 36 Q145 42, 170 34 Q185 30, 190 36" 
        stroke={lineColor3}
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      <circle cx="10" cy="35" r="1.5" fill={lineColor3} opacity="0.7" />
      <circle cx="90" cy="30" r="1.3" fill={lineColor3} opacity="0.6" />
      <circle cx="170" cy="34" r="1.5" fill={lineColor3} opacity="0.7" />
      
      {/* Additional subtle connector fragments */}
      <path 
        d="M45 20 Q50 25, 48 30" 
        stroke={lineColor1}
        strokeWidth="0.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
      <path 
        d="M110 18 Q115 24, 112 32" 
        stroke={lineColor2}
        strokeWidth="0.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
      <path 
        d="M160 16 Q165 24, 162 33" 
        stroke={lineColor1}
        strokeWidth="0.8"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
      
      {/* AUTODUN text - centered, bold */}
      <text
        x="100"
        y="32"
        textAnchor="middle"
        fill={textColor}
        fontSize="20"
        fontWeight="800"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="4"
      >
        AUTODUN
      </text>
    </svg>
  );
}
