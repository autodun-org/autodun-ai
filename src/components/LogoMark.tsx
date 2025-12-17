import { cn } from "@/lib/utils";
import autodunLogo from "@/assets/autodun-logo.png";

interface LogoMarkProps {
  className?: string;
  size?: "sm" | "header" | "md" | "lg" | "xl" | "hero";
}

export function LogoMark({ className, size = "md" }: LogoMarkProps) {
  const sizes: Record<NonNullable<LogoMarkProps["size"]>, string> = {
    sm: "h-6",
    header: "h-9", // 36px: best match for most headers
    md: "h-8",
    lg: "h-10",
    xl: "h-12",
    hero: "h-14",
  };

  return (
    <img
      src={autodunLogo}
      alt="AUTODUN"
      className={cn("block w-auto object-contain shrink-0", sizes[size], className)}
      draggable={false}
    />
  );
}
