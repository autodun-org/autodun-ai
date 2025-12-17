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
    { path: "/contact", label: "Contact" },
  ];

  const policyLinks = [
    { path: "/privacy", label: "Privacy Policy" },
    { path: "/terms", label: "Terms of Use" },
    { path: "/cookies", label: "Cookie Policy" },
  ];

  return (
    <footer className="w-full border-t bg-background">
      <div className="container-main py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Logo only */}
          <Link to="/" aria-label="Autodun Home" className="inline-flex items-center">
            <LogoMark className="h-8 md:h-9 lg:h-10 w-auto" />
          </Link>

          {/* Links */}
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">
            <div className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3">
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
        </div>

        {/* Bottom row */}
        <div className="mt-10 flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved.
            </p>
            <div className="flex gap-4">
              {policyLinks.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <p className="text-xs text-muted-foreground">
            Not official DVSA advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
