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
  const textColor = isDark ? "hsl(210, 40%, 98%)" : "hsl(220, 30%, 18%)";
  const lineColor = "hsl(200, 50%, 65%)";
  const nodeColor = "hsl(200, 60%, 55%)";

  return (
    <svg
      viewBox="0 0 340 70"
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
                0%, 100% { opacity: 0.9; }
                50% { opacity: 0.5; }
              }
              .node-animate { animation: nodePulse 2.5s ease-in-out infinite; }
            `}
          </style>
        )}
      </defs>

      {/* Single flowing neural line through the text */}
      <path 
        d="M12 38 Q80 34, 140 40 Q170 36, 200 38 Q260 42, 328 36" 
        stroke={lineColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      
      {/* Node near the O with vertical connector */}
      <circle 
        cx="178" 
        cy="37" 
        r="3.5" 
        fill={nodeColor} 
        className={animated ? "node-animate" : ""} 
        opacity="0.8" 
      />
      <path 
        d="M178 37 L178 26" 
        stroke={lineColor}
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      <circle cx="178" cy="26" r="2" fill={nodeColor} opacity="0.5" />

      {/* AUTODUN text */}
      <text
        x="170"
        y="48"
        textAnchor="middle"
        fill={textColor}
        fontSize="38"
        fontWeight="700"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="8"
      >
        AUTODUN
      </text>
    </svg>
  );
}
