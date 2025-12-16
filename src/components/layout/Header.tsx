import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/Logo";

const navigation = [
  { name: "Home", href: "/" },
  { name: "EV Charger Finder", href: "/ev-charger-finder" },
  { name: "MOT Predictor", href: "/mot-predictor" },
  { name: "Data Usage", href: "/data-usage" },
  { name: "About", href: "/about" },
];

export function Header() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container-narrow">
        <div className="flex h-14 items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <Logo size="md" className="text-foreground transition-colors group-hover:text-primary" />
            <span className="font-semibold text-base tracking-tight">Autodun</span>
          </Link>

          <nav className="flex items-center gap-0.5">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-3 py-1.5 text-sm font-medium rounded transition-colors",
                  location.pathname === item.href
                    ? "text-foreground bg-secondary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
