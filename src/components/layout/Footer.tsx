import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LogoMark } from "@/components/LogoMark";

export const Footer = () => {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/ev-charger-finder", label: "EV Charger Finder" },
    { path: "/mot-predictor", label: "MOT Predictor" },
    { path: "/data-usage", label: "Data Usage" },
    { path: "/about", label: "About" },
  ];

  return (
    <footer className="w-full border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Logo only */}
          <Link to="/" aria-label="Autodun Home" className="inline-flex items-center">
            <LogoMark className="h-8 md:h-9 lg:h-10 w-auto" />
          </Link>

          {/* Links */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3 md:grid-cols-2">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className={cn(
                  "text-sm text-muted-foreground hover:text-foreground transition-colors"
                )}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 flex flex-col gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>

          <p className="text-xs text-muted-foreground">
            Not official DVSA advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
