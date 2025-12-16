import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function LogoMark({ className, size = "md" }: LogoMarkProps) {
  const sizes = {
    sm: "h-6",
    md: "h-8",
    lg: "h-12",
    xl: "h-16",
  };

  return (
    <svg
      viewBox="0 0 200 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(sizes[size], "w-auto", className)}
      aria-label="AUTODUN"
    >
      {/* Circuit-style square border */}
      {/* Top border with circuit nodes */}
      <line x1="0" y1="0" x2="60" y2="0" stroke="hsl(222, 47%, 20%)" strokeWidth="1.5" />
      <circle cx="60" cy="0" r="2" fill="hsl(217, 91%, 60%)" />
      <line x1="64" y1="0" x2="140" y2="0" stroke="hsl(222, 47%, 20%)" strokeWidth="1.5" />
      <circle cx="140" cy="0" r="2" fill="hsl(217, 91%, 60%)" />
      <line x1="144" y1="0" x2="200" y2="0" stroke="hsl(222, 47%, 20%)" strokeWidth="1.5" />
      
      {/* Right border with circuit nodes */}
      <line x1="200" y1="0" x2="200" y2="18" stroke="hsl(222, 47%, 20%)" strokeWidth="1.5" />
      <circle cx="200" cy="18" r="1.5" fill="hsl(217, 91%, 60%)" />
      <line x1="200" y1="21" x2="200" y2="32" stroke="hsl(222, 47%, 20%)" strokeWidth="1.5" />
      <circle cx="200" cy="32" r="1.5" fill="hsl(217, 91%, 60%)" />
      <line x1="200" y1="35" x2="200" y2="50" stroke="hsl(222, 47%, 20%)" strokeWidth="1.5" />
      
      {/* Bottom border with circuit nodes */}
      <line x1="200" y1="50" x2="150" y2="50" stroke="hsl(222, 47%, 20%)" strokeWidth="1.5" />
      <circle cx="150" cy="50" r="2" fill="hsl(217, 91%, 60%)" />
      <line x1="146" y1="50" x2="54" y2="50" stroke="hsl(222, 47%, 20%)" strokeWidth="1.5" />
      <circle cx="54" cy="50" r="2" fill="hsl(217, 91%, 60%)" />
      <line x1="50" y1="50" x2="0" y2="50" stroke="hsl(222, 47%, 20%)" strokeWidth="1.5" />
      
      {/* Left border with circuit nodes */}
      <line x1="0" y1="50" x2="0" y2="35" stroke="hsl(222, 47%, 20%)" strokeWidth="1.5" />
      <circle cx="0" cy="35" r="1.5" fill="hsl(217, 91%, 60%)" />
      <line x1="0" y1="32" x2="0" y2="18" stroke="hsl(222, 47%, 20%)" strokeWidth="1.5" />
      <circle cx="0" cy="18" r="1.5" fill="hsl(217, 91%, 60%)" />
      <line x1="0" y1="15" x2="0" y2="0" stroke="hsl(222, 47%, 20%)" strokeWidth="1.5" />
      
      {/* Corner circuit details */}
      {/* Top-left corner */}
      <line x1="0" y1="8" x2="8" y2="8" stroke="hsl(222, 47%, 25%)" strokeWidth="0.75" />
      <line x1="8" y1="0" x2="8" y2="8" stroke="hsl(222, 47%, 25%)" strokeWidth="0.75" />
      
      {/* Top-right corner */}
      <line x1="192" y1="8" x2="200" y2="8" stroke="hsl(222, 47%, 25%)" strokeWidth="0.75" />
      <line x1="192" y1="0" x2="192" y2="8" stroke="hsl(222, 47%, 25%)" strokeWidth="0.75" />
      
      {/* Bottom-right corner */}
      <line x1="192" y1="42" x2="200" y2="42" stroke="hsl(222, 47%, 25%)" strokeWidth="0.75" />
      <line x1="192" y1="42" x2="192" y2="50" stroke="hsl(222, 47%, 25%)" strokeWidth="0.75" />
      
      {/* Bottom-left corner */}
      <line x1="0" y1="42" x2="8" y2="42" stroke="hsl(222, 47%, 25%)" strokeWidth="0.75" />
      <line x1="8" y1="42" x2="8" y2="50" stroke="hsl(222, 47%, 25%)" strokeWidth="0.75" />
      
      {/* AUTODUN text */}
      <text
        x="100"
        y="32"
        textAnchor="middle"
        fill="hsl(222, 47%, 11%)"
        fontSize="22"
        fontWeight="800"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="4"
      >
        AUTODUN
      </text>
    </svg>
  );
}
