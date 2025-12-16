import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "light" | "dark";
  animated?: boolean;
}

export function LogoMark({ className, size = "md", variant = "dark", animated = true }: LogoMarkProps) {
  const sizes = {
    sm: "h-8",
    md: "h-12",
    lg: "h-16",
    xl: "h-24",
  };

  const isDark = variant === "dark";
  const textColor = isDark ? "hsl(222, 47%, 11%)" : "hsl(210, 40%, 98%)";
  const lineColor = "hsl(199, 60%, 65%)"; // Soft cyan
  const nodeColor = "hsl(199, 70%, 55%)"; // Brighter cyan for node

  return (
    <svg
      viewBox="0 0 320 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(sizes[size], "w-auto", className)}
      aria-label="AUTODUN"
    >
      <defs>
        {animated && (
          <style>
            {`
              @keyframes nodePulse {
                0%, 100% { opacity: 1; r: 3; }
                50% { opacity: 0.6; r: 4; }
              }
              .node-animate { animation: nodePulse 2.5s ease-in-out infinite; }
            `}
          </style>
        )}
      </defs>

      {/* Single flowing neural line through the text */}
      <path 
        d="M8 32 Q60 28, 120 34 Q160 30, 180 32 Q220 28, 312 34" 
        stroke={lineColor}
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      
      {/* Single node near the O */}
      <circle 
        cx="180" 
        cy="32" 
        r="3" 
        fill={nodeColor} 
        className={animated ? "node-animate" : ""} 
        opacity="0.9" 
      />
      
      {/* Small connector line from node */}
      <path 
        d="M180 32 L180 24" 
        stroke={lineColor}
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      <circle cx="180" cy="24" r="1.5" fill={nodeColor} opacity="0.6" />

      {/* AUTODUN text - bold, modern */}
      <text
        x="160"
        y="40"
        textAnchor="middle"
        fill={textColor}
        fontSize="36"
        fontWeight="700"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="6"
      >
        AUTODUN
      </text>
    </svg>
  );
}