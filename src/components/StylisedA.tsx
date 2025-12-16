import { cn } from "@/lib/utils";

interface StylisedAProps {
  className?: string;
}

export function StylisedA({ className }: StylisedAProps) {
  return (
    <span className={cn("inline-flex flex-col items-center", className)}>
      <svg
        viewBox="0 0 24 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[1.05em] w-auto"
        aria-hidden="true"
      >
        {/* Geometric, precision-engineered "A" - bolder weight */}
        
        {/* Left leg */}
        <path
          d="M2 27L10.5 2"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        
        {/* Right leg */}
        <path
          d="M22 27L13.5 2"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        
        {/* Apex connection */}
        <path
          d="M10.5 2L13.5 2"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="square"
        />
        
        {/* Crossbar */}
        <path
          d="M6 18L18 18"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="square"
        />
      </svg>
      {/* Subtle underline in primary accent color */}
      <span className="h-[2px] w-[0.7em] bg-primary mt-[1px] rounded-full" />
    </span>
  );
}
