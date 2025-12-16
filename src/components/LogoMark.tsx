import { cn } from "@/lib/utils";
import autodunLogo from "@/assets/autodun-logo.png";

interface LogoMarkProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function LogoMark({ className, size = "md" }: LogoMarkProps) {
  const sizes = {
    sm: "h-6",
    md: "h-[30px]",
    lg: "h-10",
    xl: "h-12",
  };

  return <img src={autodunLogo} alt="AUTODUN" className={cn(sizes[size], "w-auto", className)} />;
}
