export function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-auto">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-semibold text-xs">A</span>
            </div>
            <span className="text-sm font-medium">Autodun</span>
          </div>
          
          <p className="text-xs text-muted-foreground text-center md:text-right max-w-md">
            Independent AI/ML research platform. Not affiliated with or endorsed by DVSA.
            For research and educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
