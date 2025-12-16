import { cn } from "@/lib/utils";
import autodunLogo from "@/assets/autodun-logo.png";

interface LogoMarkProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function LogoMark({ className, size = "md" }: LogoMarkProps) {
  const sizes = {
    sm: "h-12",
    md: "h-16",
    lg: "h-28",
    xl: "h-40",
  };

  return <img src={autodunLogo} alt="AUTODUN" className={cn(sizes[size], "w-auto", className)} />;
}
