import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function LogoMark({ className, size = "md" }: LogoMarkProps) {
  const sizes = {
    sm: "h-[1.1em] w-[1.1em]",
    md: "h-[1.25em] w-[1.25em]",
    lg: "h-10 w-10",
    xl: "h-14 w-14",
  };

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(sizes[size], "inline-block align-baseline", className)}
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
