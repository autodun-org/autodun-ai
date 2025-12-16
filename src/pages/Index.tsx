import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, MapPin, BarChart3, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: MapPin,
    title: "EV Charger Discovery",
    description: "Explore EV charging locations and infrastructure coverage using public datasets and analytics.",
  },
  {
    icon: Zap,
    title: "Infrastructure Analytics",
    description: "Analyse charger availability, coverage gaps, and infrastructure planning data for research purposes.",
  },
  {
    icon: BarChart3,
    title: "Public Charging Analysis",
    description: "Tools for understanding EV adoption trends and public charging network distribution.",
  },
  {
    icon: Globe,
    title: "MOT Risk Modelling",
    description: "AI-driven analysis to estimate vehicle MOT failure probability based on historical patterns.",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding border-b border-border">
        <div className="container-narrow">
          <div className="max-w-2xl animate-fade-in">
            <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
              Vehicle AI & Data Platform
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-balance">
              Autodun
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Autodun builds AI-driven tools using vehicle data for research and decision-support. 
              Our platform focuses on EV charging infrastructure analytics, MOT risk prediction, 
              and research-grade machine learning models.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild size="lg" className="gap-2">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Open EV Charger Finder
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Open MOT Predictor
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <p className="text-xs text-muted-foreground border-l-2 border-border pl-4">
              Not official DVSA or government advice. Research and educational use only.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-semibold mb-12">Platform Capabilities</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center mb-4">
                  <feature.icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="font-medium mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Tools Section */}
      <section className="section-padding bg-secondary/30 border-y border-border">
        <div className="container-narrow">
          <p className="text-xs font-medium text-primary mb-6 tracking-wide uppercase">
            Available Tools
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg border border-border bg-card">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">EV Charger Finder & Infrastructure Analytics</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Explore EV charging locations, infrastructure coverage, and public charging data analysis.
              </p>
              <Button asChild size="sm" className="gap-2">
                <Link to="/ev-charger-finder">
                  View Details
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card">
              <div className="flex items-center gap-2 mb-3">
                <BarChart3 className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">MOT Failure Risk Predictor</h3>
                <span className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary font-medium">Beta</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                AI-generated risk assessment based on vehicle characteristics and historical patterns.
              </p>
              <Button asChild size="sm" className="gap-2">
                <Link to="/mot-predictor">
                  View Details
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
