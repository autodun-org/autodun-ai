import { cn } from "@/lib/utils";
import autodunLogo from "@/assets/autodun-logo.png";

interface LogoMarkProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function LogoMark({ className, size = "md" }: LogoMarkProps) {
  const sizes = {
    sm: "h-20",
    md: "h-36",
    lg: "h-40",
    xl: "h-52",
  };

  return <img src={autodunLogo} alt="AUTODUN" className={cn(sizes[size], "w-auto", className)} />;
}
