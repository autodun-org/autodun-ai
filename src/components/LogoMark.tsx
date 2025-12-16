import { cn } from "@/lib/utils";
import autodunLogo from "@/assets/autodun-logo.png";

interface LogoMarkProps {
  className?: string;
  size?: "sm" | "header" | "md" | "lg" | "xl" | "hero";
}

export function LogoMark({ className, size = "md" }: LogoMarkProps) {
  const sizes: Record<string, string> = {
    sm: "h-6",
    header: "h-12",     // ✅ make default header bigger
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
        className={cn("w-auto block object-contain max-w-none", className)}
        style={{ height: "clamp(48px, 6vw, 72px)" }}
      />
    );
  }

  // ✅ IMPORTANT: allow className to override size reliably
  // Put size first, className last.
  return (
    <img
      src={autodunLogo}
      alt="AUTODUN"
      className={cn("w-auto block object-contain max-w-none", sizes[size], className)}
    />
  );
}
