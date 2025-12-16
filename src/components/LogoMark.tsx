import { cn } from "@/lib/utils";
import autodunLogo from "@/assets/autodun-logo.png";

interface LogoMarkProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function LogoMark({ className, size = "md" }: LogoMarkProps) {
  const sizes = {
    sm: "h-16",
    md: "h-28",
    lg: "h-36",
    xl: "h-48",
  };

  return (
    <img
      src={autodunLogo}
      alt="AUTODUN"
      className={cn(sizes[size], "w-auto", className)}
    />
  );
}
