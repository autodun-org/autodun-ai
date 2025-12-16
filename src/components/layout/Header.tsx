import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ExternalLink } from "lucide-react";
import { LogoMark } from "@/components/LogoMark";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "EV Charger Finder", href: "/ev-charger-finder" },
  { name: "MOT Predictor", href: "/mot-predictor" },
  {
    name: "Council Dashboard",
    href: "https://ev.autodun.com/ev-charging-council-dashboard",
    external: true,
  },
  { name: "Data Usage", href: "/data-usage" },
  { name: "About", href: "/about" },
];

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container-main">
        <nav className="flex h-16 items-center justify-between">
          {/* Logo ONLY */}
          <Link
            to="/"
            aria-label="Autodun Home"
            className="flex items-center shrink-0"
          >
            {/* Force consistent logo size + perfect vertical centering */}
            <div className="h-8 w-8 flex items-center justify-center">
              <LogoMark size="header" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) =>
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 text-sm font-medium rounded-md transition-colors text-muted-foreground hover:text-foreground hover:bg-secondary/50 inline-flex items-center gap-1"
                >
                  {item.name}
                  <ExternalLink className="h-3 w-3" />
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(item.href)
                      ? "text-foreground bg-secondary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button asChild size="sm" className="gap-2">
              <a
                href="https://ev.autodun.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Launch Tools
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 -mr-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-4 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navigation.map((item) =>
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2.5 text-sm font-medium rounded-md transition-colors text-muted-foreground hover:text-foreground hover:bg-secondary/50 inline-flex items-center gap-1"
                  >
                    {item.name}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                      isActive(item.href)
                        ? "text-foreground bg-secondary"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}

              <div className="pt-3 mt-2 border-t border-border">
                <Button asChild className="w-full gap-2">
                  <a
                    href="https://ev.autodun.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Launch Tools
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
