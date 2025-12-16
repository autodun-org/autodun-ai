import { LogoMark } from "@/components/LogoMark";

export function Footer() {
  return (
    <footer className="border-t border-border py-6 md:py-8 mt-auto bg-secondary/30">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-bold text-sm tracking-wide text-muted-foreground uppercase inline-flex items-baseline">
            <LogoMark size="sm" className="text-muted-foreground" />
            <span className="ml-[0.05em]">utodun</span>
          </span>
          
          <p className="text-xs text-muted-foreground text-center md:text-right max-w-lg leading-relaxed">
            Independent AI/ML research platform. Not affiliated with or endorsed by DVSA or any government agency.
            For research and educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
