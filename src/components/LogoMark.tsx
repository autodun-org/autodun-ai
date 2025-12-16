import { cn } from "@/lib/utils";
import autodunLogo from "@/assets/autodun-logo.png";

interface LogoMarkProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "hero";
}

export function LogoMark({ className, size = "md" }: LogoMarkProps) {
  const sizes = {
    sm: "h-6",
    md: "h-[30px]",
    lg: "h-10",
    xl: "h-12",
    hero: "", // Custom styling via style prop
  };

  if (size === "hero") {
    return (
      <img 
        src={autodunLogo} 
        alt="AUTODUN" 
        className={cn("w-auto block mx-auto", className)}
        style={{ height: 'clamp(60px, 8vw, 120px)' }}
      />
    );
  }

  return <img src={autodunLogo} alt="AUTODUN" className={cn(sizes[size], "w-auto", className)} />;
}
