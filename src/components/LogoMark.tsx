import { cn } from "@/lib/utils";
import autodunLogo from "@/assets/autodun-logo.png";

interface LogoMarkProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function LogoMark({ className, size = "md" }: LogoMarkProps) {
  const sizes = {
    sm: "h-10",
    md: "h-14",
    lg: "h-20",
    xl: "h-32",
  };

  return (
    <img
      src={autodunLogo}
      alt="AUTODUN"
      className={cn(sizes[size], "w-auto", className)}
    />
  );
}
