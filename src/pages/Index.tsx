import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/LogoMark";
import { EVChargerDemo } from "@/components/demos/EVChargerDemo";
import { ArrowRight, Zap, MapPin, BarChart3, Shield } from "lucide-react";

const tools = [
  {
    icon: Zap,
    title: "EV Charger Finder",
    description:
      "Explore UK charging locations with coverage maps and infrastructure analytics.",
    href: "https://ev.autodun.com",
    badge: "Active",
  },
  {
    icon: BarChart3,
    title: "MOT Failure Risk Predictor",
    description:
      "AI-driven risk estimation based on vehicle characteristics and MOT history.",
    href: "https://mot.autodun.com",
    badge: "Beta",
  },
  {
    icon: MapPin,
    title: "Council EV Analytics Dashboard",
    description:
      "Local authority insights for EV infrastructure planning and coverage analysis.",
    href: "https://ev.autodun.com/ev-charging-council-dashboard",
    badge: "New",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section - Two Column */}
      <section className="hero-gradient border-b border-border section-hero">
        <div className="container-main">
          {/* ✅ removed min-h-[70vh] lg:min-h-[75vh] to reduce empty background */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left">
              <div className="flex items-center gap-3 justify-center lg:justify-start mb-6">
                <LogoMark size="md" className="opacity-[0.10] max-w-[280px] md:max-w-[320px]" />
              </div>

              <h1 className="text-balance mb-5 text-3xl sm:text-4xl lg:text-5xl">
                AI-driven vehicle insights for EV charging and MOT risk
              </h1>

              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Independent research platform delivering analytics tools for UK
                vehicle data, EV infrastructure coverage, and MOT failure
                prediction.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 font-medium w-full sm:w-auto"
                >
                  <a
                    href="https://ev.autodun.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open EV Charger Finder
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="gap-2 font-medium w-full sm:w-auto"
                >
                  <a
                    href="https://mot.autodun.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open MOT Predictor
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>

              {/* Trust line */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 justify-center lg:justify-start text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Shield className="h-4 w-4" />
                  Research-grade models
                </span>
                <span className="hidden sm:inline">•</span>
                <span>UK-focused data</span>
                <span className="hidden sm:inline">•</span>
                <span>Not official DVSA advice</span>
              </div>
            </div>

            {/* Right - Animated Demo */}
            <div className="w-full aspect-[16/10]">
              <EVChargerDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Core Tools Section */}
      <section className="section-major">
        <div className="container-main">
          <div className="text-center mb-8">
            <p className="text-sm font-medium text-primary mb-2 tracking-wide uppercase">
              Core Tools
            </p>
            <h2 className="mb-4 text-2xl sm:text-3xl">
              Production-ready analytics platform
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Three purpose-built tools for EV infrastructure, MOT risk analysis,
              and local authority planning.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <div key={tool.title} className="card-elevated flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <tool.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span
                    className={
                      tool.badge === "Beta"
                        ? "badge-beta"
                        : tool.badge === "New"
                        ? "badge-status bg-green-500/10 text-green-600"
                        : "badge-active"
                    }
                  >
                    {tool.badge === "Active" && (
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    )}
                    {tool.badge}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{tool.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-grow">
                  {tool.description}
                </p>
                <Button asChild className="gap-2 w-full">
                  <a href={tool.href} target="_blank" rel="noopener noreferrer">
                    Open Tool
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-major bg-secondary/30 border-y border-border">
        <div className="container-main">
          <div className="text-center mb-8">
            <p className="text-sm font-medium text-primary mb-2 tracking-wide uppercase">
              How It Works
            </p>
            <h2 className="mb-4 text-2xl sm:text-3xl">
              Simple, transparent process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get insights in three straightforward steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="step-number mx-auto mb-5">1</div>
              <h3 className="text-lg font-semibold mb-2">Enter your inputs</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                Provide location for EV charging or vehicle details for MOT risk
                analysis.
              </p>
            </div>
            <div className="text-center">
              <div className="step-number mx-auto mb-5">2</div>
              <h3 className="text-lg font-semibold mb-2">Get AI insights</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                Our models process the data and generate coverage maps or risk
                estimates.
              </p>
            </div>
            <div className="text-center">
              <div className="step-number mx-auto mb-5">3</div>
              <h3 className="text-lg font-semibold mb-2">Take action</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                Find nearby chargers or prepare for your MOT with informed
                guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-major">
        <div className="container-main text-center">
          <h2 className="mb-4 text-2xl sm:text-3xl">Ready to explore?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Access our research tools for EV infrastructure insights and MOT risk
            analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="gap-2 w-full sm:w-auto">
              <a
                href="https://ev.autodun.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                EV Charger Finder
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 w-full sm:w-auto"
            >
              <a
                href="https://mot.autodun.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                MOT Predictor
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
