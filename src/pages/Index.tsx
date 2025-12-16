import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/LogoMark";
import { ArrowRight, Zap, MapPin, BarChart3, Cpu, Database, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const capabilities = [
  {
    icon: MapPin,
    title: "EV Infrastructure Analytics",
    description: "Explore charging locations, coverage analysis, and infrastructure planning data using public datasets.",
  },
  {
    icon: BarChart3,
    title: "Vehicle Risk Modelling",
    description: "AI-driven analysis to estimate MOT failure probability based on historical patterns and vehicle data.",
  },
  {
    icon: Database,
    title: "Large-Scale Data Processing",
    description: "Tools for analysing vehicle populations, trends, and patterns across comprehensive datasets.",
  },
  {
    icon: Shield,
    title: "Research-Grade Tools",
    description: "Transparent, reproducible machine learning models designed for research and decision-support.",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding border-b border-border">
        <div className="container-narrow">
          <div className="max-w-2xl">
            {/* Logo Badge */}
            <div className="mb-6">
              <LogoMark size="xl" variant="dark" className="mb-4" />
              <p className="text-sm font-medium text-primary tracking-wide uppercase">
                Vehicle AI & Data Platform
              </p>
            </div>
            
            <p className="text-base md:text-lg prose-body mb-8 md:mb-10 max-w-xl">
              An independent platform delivering AI-driven tools for vehicle data analysis, 
              EV infrastructure research, and MOT risk prediction. Built for research 
              and decision-support applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 mb-8 md:mb-10">
              <Button asChild size="lg" className="gap-2 font-medium w-full sm:w-auto">
                <a href="https://ev.autodun.com" target="_blank" rel="noopener noreferrer">
                  Open EV Charger Finder
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 font-medium w-full sm:w-auto">
                <a href="https://mot.autodun.com" target="_blank" rel="noopener noreferrer">
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

      {/* Capabilities Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="mb-10 md:mb-12">
            <h2 className="mb-3">Platform Capabilities</h2>
            <p className="prose-body max-w-xl">
              Core analytical tools for vehicle data research and infrastructure analysis.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {capabilities.map((item) => (
              <div 
                key={item.title}
                className="p-5 card-elevated"
              >
                <div className="h-9 w-9 rounded-md bg-secondary flex items-center justify-center mb-4">
                  <item.icon className="h-4.5 w-4.5 text-foreground" />
                </div>
                <h3 className="font-medium mb-2">{item.title}</h3>
                <p className="text-sm prose-body">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Tools Section */}
      <section className="section-padding bg-secondary/40 border-y border-border">
        <div className="container-narrow">
          <div className="mb-8 md:mb-10">
            <p className="text-xs font-medium text-primary mb-2 tracking-wide uppercase">
              Available Tools
            </p>
            <h2>Active Platform Tools</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
            <div className="p-5 md:p-6 card-elevated">
              <div className="flex items-start justify-between mb-4">
                <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <span className="badge-active">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Active
                </span>
              </div>
              <h3 className="font-semibold mb-2">EV Charger Finder & Infrastructure Analytics</h3>
              <p className="text-sm prose-body mb-5">
                Explore EV charging locations, infrastructure coverage, and public charging data analysis.
              </p>
              <Button asChild size="sm" variant="outline" className="gap-2 w-full sm:w-auto">
                <Link to="/ev-charger-finder">
                  View Details
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>

            <div className="p-5 md:p-6 card-elevated">
              <div className="flex items-start justify-between mb-4">
                <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <Cpu className="h-5 w-5 text-primary" />
                </div>
                <span className="badge-beta">
                  Beta
                </span>
              </div>
              <h3 className="font-semibold mb-2">MOT Failure Risk Predictor</h3>
              <p className="text-sm prose-body mb-5">
                AI-generated risk assessment based on vehicle characteristics and historical patterns.
              </p>
              <Button asChild size="sm" variant="outline" className="gap-2 w-full sm:w-auto">
                <Link to="/mot-predictor">
                  View Details
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
