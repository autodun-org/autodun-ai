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
          <div className="max-w-2xl">
            <div className="animate-fade-in-up">
              <span className="badge-active mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Active Tool
              </span>
              
              <h1 className="mb-6">
                EV Charger Finder & Infrastructure Analytics
              </h1>
              
              <p className="text-lg prose-body mb-10 max-w-xl">
                Explore EV charging locations and infrastructure coverage using public datasets 
                and analytics. This tool supports research into charger availability, infrastructure 
                planning, and EV adoption trends.
              </p>
            </div>

            <Button asChild size="lg" className="gap-2 font-medium animate-fade-in-up" style={{ animationDelay: "100ms" }}>
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
          <div className="mb-10">
            <h2 className="mb-3">Tool Capabilities</h2>
            <p className="prose-body max-w-xl">
              Core features for EV infrastructure research and analysis.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-5">
            {capabilities.map((item, index) => (
              <div 
                key={item.label}
                className="flex gap-4 p-5 card-elevated animate-fade-in-up"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <div className="h-10 w-10 rounded-md bg-secondary flex items-center justify-center shrink-0">
                  <item.icon className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">{item.label}</h3>
                  <p className="text-sm prose-body">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-secondary/40 border-y border-border">
        <div className="container-narrow">
          <div className="max-w-2xl">
            <h2 className="mb-4">Research & Decision-Support Use</h2>
            <p className="prose-body mb-6">
              The EV Charger Finder is designed for researchers, analysts, and planners who require 
              data-driven insights into EV charging infrastructure. Applications include:
            </p>
            <ul className="space-y-3 text-sm prose-body">
              <li className="flex gap-3">
                <span className="text-primary font-medium">—</span>
                Infrastructure coverage analysis and gap identification
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-medium">—</span>
                Public charging network distribution research
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-medium">—</span>
                EV adoption trend analysis and forecasting support
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-medium">—</span>
                Regional infrastructure planning and assessment
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="flex gap-5 items-start p-6 card-elevated border-amber-200 bg-amber-50/50">
            <div className="h-10 w-10 rounded-md bg-amber-100 flex items-center justify-center shrink-0">
              <AlertTriangle className="h-5 w-5 text-amber-700" />
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-foreground">Important Information</h3>
              <ul className="space-y-2 text-sm prose-body">
                <li className="flex gap-3">
                  <span className="text-amber-700 font-medium">•</span>
                  This is a research and decision-support tool, not an official government service
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-700 font-medium">•</span>
                  Data is sourced from public datasets and may not reflect real-time availability
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-700 font-medium">•</span>
                  Always verify charging point status before travel planning
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-700 font-medium">•</span>
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
