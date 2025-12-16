import { cn } from "@/lib/utils";
import autodunLogo from "@/assets/autodun-logo.png";

interface LogoMarkProps {
  className?: string;
  size?: "sm" | "header" | "md" | "lg" | "xl" | "hero";
}

export function LogoMark({ className, size = "md" }: LogoMarkProps) {
  const sizes: Record<string, string> = {
    sm: "h-7",
    // ✅ bigger header logo
    header: "h-12", // 48px
    md: "h-9",
    lg: "h-11",
    xl: "h-14",
    hero: "",
  };

  if (size === "hero") {
    return (
      <img
        src={autodunLogo}
        alt="AUTODUN"
        className={cn("w-auto block", className)}
        style={{ height: "clamp(48px, 6vw, 72px)" }}
      />
    );
  }

  return (
    <img
      src={autodunLogo}
      alt="AUTODUN"
      className={cn("w-auto block", sizes[size], className)}
    />
  );
}
