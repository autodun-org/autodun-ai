import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function LogoMark({ className, size = "md" }: LogoMarkProps) {
  const sizes = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-12 w-12",
    xl: "h-16 w-16",
  };

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(sizes[size], className)}
      aria-label="A"
    >
      {/* Outer ring - badge/authority feel */}
      <circle
        cx="24"
        cy="24"
        r="22"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />
      
      {/* Inner ring - precision, inspection grade */}
      <circle
        cx="24"
        cy="24"
        r="16"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      
      {/* Geometric "A" form */}
      {/* Left leg of A */}
      <line
        x1="14"
        y1="34"
        x2="24"
        y2="14"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      {/* Right leg of A */}
      <line
        x1="34"
        y1="34"
        x2="24"
        y2="14"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      {/* Crossbar of A */}
      <line
        x1="17"
        y1="28"
        x2="31"
        y2="28"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
