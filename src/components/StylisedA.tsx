import { cn } from "@/lib/utils";

interface StylisedAProps {
  className?: string;
}

export function StylisedA({ className }: StylisedAProps) {
  return (
    <svg
      viewBox="0 0 24 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-[1.1em] w-auto inline-block align-baseline", className)}
      aria-hidden="true"
    >
      {/* Geometric, precision-engineered "A" with subtle forward trajectory */}
      
      {/* Left leg - slightly angled for forward motion feel */}
      <path
        d="M2 27L10.5 2"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      
      {/* Right leg */}
      <path
        d="M22 27L13.5 2"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      
      {/* Apex connection - precision point */}
      <path
        d="M10.5 2L13.5 2"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="square"
      />
      
      {/* Crossbar - engineered horizontal with slight forward position */}
      <path
        d="M6 18L18 18"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="square"
      />
    </svg>
  );
}
