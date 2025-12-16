import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { LogoMark } from "@/components/LogoMark";

const footerLinks = [
  { name: "EV Charger Finder", href: "/ev-charger-finder" },
  { name: "MOT Predictor", href: "/mot-predictor" },
  { name: "Data Usage", href: "/data-usage" },
  { name: "About", href: "/about" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30 mt-auto">
      <div className="container-main section-md">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <LogoMark size="sm" />
              <span className="font-semibold text-foreground">AUTODUN</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Independent AI/ML research platform providing vehicle data analytics, 
              EV infrastructure insights, and MOT risk prediction tools for the UK market.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Tools</h4>
            <ul className="space-y-2.5">
              {footerLinks.slice(0, 2).map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.slice(2).map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Autodun. All rights reserved.</p>
            <p className="text-xs text-muted-foreground text-center sm:text-right max-w-md">
              Independent research tool. Not affiliated with or endorsed by DVSA or any government agency.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
