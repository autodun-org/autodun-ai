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
      {/* Neural organic border - TOP */}
      {/* Floating curved strokes with nodes */}
      <path d="M8 3 Q12 1, 18 2" stroke="hsl(222, 47%, 20%)" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <circle cx="18" cy="2" r="1.5" fill="hsl(217, 91%, 60%)" />
      
      <path d="M28 1 Q38 0, 48 2" stroke="hsl(222, 47%, 20%)" strokeWidth="1" strokeLinecap="round" fill="none" />
      
      <path d="M58 1.5 Q68 0.5, 78 1" stroke="hsl(222, 47%, 20%)" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <circle cx="78" cy="1" r="1.2" fill="hsl(217, 91%, 60%)" />
      
      <path d="M92 2 Q102 0, 112 1.5" stroke="hsl(222, 47%, 20%)" strokeWidth="1" strokeLinecap="round" fill="none" />
      
      <path d="M124 1 Q134 0, 144 2" stroke="hsl(222, 47%, 20%)" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <circle cx="144" cy="2" r="1.5" fill="hsl(217, 91%, 60%)" />
      
      <path d="M156 2 Q166 0.5, 174 3" stroke="hsl(222, 47%, 20%)" strokeWidth="1" strokeLinecap="round" fill="none" />
      
      {/* Neural organic border - RIGHT */}
      <path d="M177 6 Q179 10, 178 16" stroke="hsl(222, 47%, 20%)" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <circle cx="178" cy="16" r="1.2" fill="hsl(217, 91%, 60%)" />
      
      <path d="M179 22 Q180 28, 178 34" stroke="hsl(222, 47%, 20%)" strokeWidth="1" strokeLinecap="round" fill="none" />
      
      <path d="M177 38 Q176 41, 173 43" stroke="hsl(222, 47%, 20%)" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      
      {/* Neural organic border - BOTTOM */}
      <path d="M168 43 Q158 44, 148 42" stroke="hsl(222, 47%, 20%)" strokeWidth="1" strokeLinecap="round" fill="none" />
      <circle cx="148" cy="42" r="1.5" fill="hsl(217, 91%, 60%)" />
      
      <path d="M136 43 Q126 44, 116 42.5" stroke="hsl(222, 47%, 20%)" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      
      <path d="M104 43 Q94 44, 84 42" stroke="hsl(222, 47%, 20%)" strokeWidth="1" strokeLinecap="round" fill="none" />
      <circle cx="84" cy="42" r="1.2" fill="hsl(217, 91%, 60%)" />
      
      <path d="M72 43.5 Q62 44, 52 42" stroke="hsl(222, 47%, 20%)" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      
      <path d="M40 43 Q30 44, 20 42" stroke="hsl(222, 47%, 20%)" strokeWidth="1" strokeLinecap="round" fill="none" />
      <circle cx="20" cy="42" r="1.5" fill="hsl(217, 91%, 60%)" />
      
      <path d="M12 42 Q8 43, 5 41" stroke="hsl(222, 47%, 20%)" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      
      {/* Neural organic border - LEFT */}
      <path d="M3 38 Q1 34, 2 28" stroke="hsl(222, 47%, 20%)" strokeWidth="1" strokeLinecap="round" fill="none" />
      <circle cx="2" cy="28" r="1.2" fill="hsl(217, 91%, 60%)" />
      
      <path d="M1 22 Q0 16, 2 10" stroke="hsl(222, 47%, 20%)" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      
      <path d="M3 6 Q5 3, 8 3" stroke="hsl(222, 47%, 20%)" strokeWidth="1" strokeLinecap="round" fill="none" />
      
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
