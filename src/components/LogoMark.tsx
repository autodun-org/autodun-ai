import { cn } from "@/lib/utils";
import autodunLogo from "@/assets/autodun-logo.png";

interface LogoMarkProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function LogoMark({ className, size = "md" }: LogoMarkProps) {
  const sizes = {
    sm: "h-14",
    md: "h-20",
    lg: "h-32",
    xl: "h-48",
  };

  return <img src={autodunLogo} alt="AUTODUN" className={cn(sizes[size], "w-auto", className)} />;
}
