import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle, Zap, MapPin, BarChart3, Database } from "lucide-react";

const capabilities = [
  { icon: MapPin, label: "Charging Location Discovery", description: "Find and explore EV charging points across regions" },
  { icon: BarChart3, label: "Infrastructure Analytics", description: "Analyse coverage, availability, and network distribution" },
  { icon: Database, label: "Public Dataset Analysis", description: "Research-grade tools using publicly available charging data" },
  { icon: Zap, label: "EV Adoption Research", description: "Support infrastructure planning and adoption trend analysis" },
];

export default function EVChargerFinder() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding border-b border-border">
        <div className="container-narrow">
          <div className="max-w-2xl animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Active Tool
            </div>
            
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              EV Charger Finder & Infrastructure Analytics
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Explore EV charging locations and infrastructure coverage using public datasets 
              and analytics. This tool supports research into charger availability, infrastructure 
              planning, and EV adoption trends.
            </p>

            <Button asChild size="lg" className="gap-2">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Open EV Charger Finder
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-xl font-semibold mb-8">Tool Capabilities</h2>
          
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {capabilities.map((item, index) => (
              <div 
                key={item.label}
                className="flex gap-4 p-4 rounded-lg border border-border bg-card animate-fade-in"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <item.icon className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-secondary/30 border-y border-border">
        <div className="container-narrow">
          <h2 className="font-semibold mb-4">Research & Decision-Support Use</h2>
          <div className="space-y-4 text-sm text-muted-foreground max-w-2xl">
            <p className="leading-relaxed">
              The EV Charger Finder is designed for researchers, analysts, and planners who require 
              data-driven insights into EV charging infrastructure. Applications include:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-2">
                <span className="text-foreground">•</span>
                Infrastructure coverage analysis and gap identification
              </li>
              <li className="flex gap-2">
                <span className="text-foreground">•</span>
                Public charging network distribution research
              </li>
              <li className="flex gap-2">
                <span className="text-foreground">•</span>
                EV adoption trend analysis and forecasting support
              </li>
              <li className="flex gap-2">
                <span className="text-foreground">•</span>
                Regional infrastructure planning and assessment
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="flex gap-4 items-start">
            <div className="h-10 w-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <h2 className="font-semibold mb-3">Important Information</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-foreground">•</span>
                  This is a research and decision-support tool, not an official government service
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground">•</span>
                  Data is sourced from public datasets and may not reflect real-time availability
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground">•</span>
                  Always verify charging point status before travel planning
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground">•</span>
                  Autodun is not affiliated with any charging network operator
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
