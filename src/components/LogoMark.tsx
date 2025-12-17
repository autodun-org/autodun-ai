import { cn } from "@/lib/utils";
import autodunLogo from "@/assets/autodun-logo.png";

interface LogoMarkProps {
  className?: string;
  size?: "sm" | "header" | "md" | "lg" | "xl" | "hero";
}

export function LogoMark({ className, size = "md" }: LogoMarkProps) {
  const sizes = {
    sm: "h-6",
    header: "h-9",   // now ACTUALLY looks big
    md: "h-10",
    lg: "h-12",
    xl: "h-12",
    hero: "h-16",
  };

  return (
    <img
      src={autodunLogo}
      alt="AUTODUN"
      className={cn("block w-auto object-contain", sizes[size], className)}
      draggable={false}
    />
  );
}
