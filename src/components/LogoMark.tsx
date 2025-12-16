import { cn } from "@/lib/utils";
import autodunLogo from "@/assets/autodun-logo.png";

interface LogoMarkProps {
  className?: string;
  size?: "sm" | "header" | "md" | "lg" | "xl" | "hero";
}

export function LogoMark({ className, size = "md" }: LogoMarkProps) {
  const sizes: Record<string, string> = {
    sm: "h-6",
    header: "h-[30px]",
    md: "h-8",
    lg: "h-10",
    xl: "h-12",
    hero: "",
  };

  if (size === "hero") {
    return (
      <img 
        src={autodunLogo} 
        alt="AUTODUN" 
        className={cn("w-auto block", className)}
        style={{ height: 'clamp(48px, 6vw, 72px)' }}
      />
    );
  }

  return <img src={autodunLogo} alt="AUTODUN" className={cn(sizes[size], "w-auto", className)} />;
}
