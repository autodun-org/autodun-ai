import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="border-t border-border py-6 md:py-8 mt-auto bg-secondary/30">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Logo size="sm" className="text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Autodun</span>
          </div>
          
          <p className="text-xs text-muted-foreground text-center md:text-right max-w-lg leading-relaxed">
            Independent AI/ML research platform. Not affiliated with or endorsed by DVSA or any government agency.
            For research and educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
