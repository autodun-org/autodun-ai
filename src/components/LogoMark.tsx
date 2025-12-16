import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function LogoMark({ className, size = "md" }: LogoMarkProps) {
  const sizes = {
    sm: "h-5",
    md: "h-7",
    lg: "h-10",
    xl: "h-14",
  };

  return (
    <svg
      viewBox="0 0 180 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(sizes[size], "w-auto", className)}
      aria-label="AUTODUN"
    >
      {/* TOP - One organic neural curve */}
      <path 
        d="M12 4 Q45 0, 90 2 Q135 0, 168 4" 
        stroke="hsl(222, 47%, 20%)" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        fill="none" 
      />
      <circle cx="12" cy="4" r="2" fill="hsl(217, 91%, 60%)" />
      <circle cx="90" cy="2" r="2" fill="hsl(217, 91%, 60%)" />
      <circle cx="168" cy="4" r="2" fill="hsl(217, 91%, 60%)" />
      
      {/* RIGHT - One organic neural curve */}
      <path 
        d="M172 8 Q176 22, 172 36" 
        stroke="hsl(222, 47%, 20%)" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        fill="none" 
      />
      <circle cx="172" cy="8" r="2" fill="hsl(217, 91%, 60%)" />
      <circle cx="172" cy="36" r="2" fill="hsl(217, 91%, 60%)" />
      
      {/* BOTTOM - One organic neural curve */}
      <path 
        d="M168 40 Q135 44, 90 42 Q45 44, 12 40" 
        stroke="hsl(222, 47%, 20%)" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        fill="none" 
      />
      <circle cx="168" cy="40" r="2" fill="hsl(217, 91%, 60%)" />
      <circle cx="90" cy="42" r="2" fill="hsl(217, 91%, 60%)" />
      <circle cx="12" cy="40" r="2" fill="hsl(217, 91%, 60%)" />
      
      {/* LEFT - One organic neural curve */}
      <path 
        d="M8 36 Q4 22, 8 8" 
        stroke="hsl(222, 47%, 20%)" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        fill="none" 
      />
      <circle cx="8" cy="36" r="2" fill="hsl(217, 91%, 60%)" />
      <circle cx="8" cy="8" r="2" fill="hsl(217, 91%, 60%)" />
      
      {/* AUTODUN text */}
      <text
        x="90"
        y="28"
        textAnchor="middle"
        fill="hsl(222, 47%, 11%)"
        fontSize="18"
        fontWeight="800"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="3"
      >
        AUTODUN
      </text>
    </svg>
  );
}
