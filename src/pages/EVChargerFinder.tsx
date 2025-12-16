import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle, Zap, MapPin, BarChart3, Database, Play, Search, Navigation, Star, MessageSquare, Brain, TrendingUp, Users } from "lucide-react";

const capabilities = [
  { icon: MapPin, label: "Charging Location Discovery", description: "Find and explore EV charging points across regions" },
  { icon: BarChart3, label: "Infrastructure Analytics", description: "Analyse coverage, availability, and network distribution" },
  { icon: Database, label: "Public Dataset Analysis", description: "Research-grade tools using publicly available charging data" },
  { icon: Zap, label: "EV Adoption Research", description: "Support infrastructure planning and adoption trend analysis" },
];

const videoSteps = [
  { icon: Search, label: "Search Location", description: "User enters a location or postcode" },
  { icon: MapPin, label: "View Chargers", description: "Map displays nearby charging stations" },
  { icon: Navigation, label: "Select Station", description: "User selects a charging point" },
  { icon: Zap, label: "View Details", description: "Connector types and availability shown" },
  { icon: MessageSquare, label: "Submit Feedback", description: "User rates charging experience" },
  { icon: Star, label: "AI Updates Score", description: "Station score reflects reliability" },
];

const aiScoringSteps = [
  { 
    icon: MessageSquare, 
    title: "Feedback Collection", 
    description: "Users submit ratings and comments after charging sessions" 
  },
  { 
    icon: Users, 
    title: "Aggregation", 
    description: "Feedback is aggregated across multiple users over time" 
  },
  { 
    icon: Brain, 
    title: "Pattern Analysis", 
    description: "AI model analyses reliability patterns and identifies trends" 
  },
  { 
    icon: TrendingUp, 
    title: "Score Update", 
    description: "Stations receive updated scores to support better decisions" 
  },
];

export default function EVChargerFinder() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding border-b border-border hero-gradient">
        <div className="container-main">
          <div className="max-w-2xl">
            <div className="animate-fade-in-up">
              <span className="badge-active mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Active Tool
              </span>
              
              <h1 className="mb-6 text-3xl sm:text-4xl lg:text-5xl">
                EV Charger Finder & Infrastructure Analytics
              </h1>
              
              <p className="text-lg prose-body mb-10 max-w-xl">
                Explore EV charging locations and infrastructure coverage using public datasets 
                and analytics. This tool supports research into charger availability, infrastructure 
                planning, and EV adoption trends.
              </p>
            </div>

            <Button asChild size="lg" className="gap-2 font-medium animate-fade-in-up w-full sm:w-auto" style={{ animationDelay: "100ms" }}>
              <a href="https://ev.autodun.com" target="_blank" rel="noopener noreferrer">
                Open EV Charger Finder
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Animated Explainer Video Section */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">
              Platform Demo
            </p>
            <h2 className="mb-4 text-2xl sm:text-3xl">
              How the EV Charger Finder Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how users discover charging stations and contribute to AI-powered reliability scoring.
            </p>
          </div>
          
          {/* Video Placeholder */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="video-placeholder">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                  <Play className="h-7 w-7 text-primary ml-1" />
                </div>
                <p className="text-sm font-medium text-foreground mb-1">Platform Overview</p>
                <p className="text-xs text-muted-foreground text-center max-w-sm">
                  Search locations • View charging stations • Submit feedback • AI scoring
                </p>
              </div>
              
              {/* Window controls */}
              <div className="absolute top-4 left-4 right-4">
                <div className="flex gap-2">
                  <div className="h-2 w-2 rounded-full bg-destructive/60" />
                  <div className="h-2 w-2 rounded-full bg-amber-500/60" />
                  <div className="h-2 w-2 rounded-full bg-green-500/60" />
                </div>
              </div>
              
              {/* Progress bar */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="h-1 bg-border rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-primary/40 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Step-by-step flow */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {videoSteps.map((step, index) => (
              <div 
                key={step.label}
                className="text-center p-4 rounded-xl bg-secondary/30 border border-border/50"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-xs font-medium text-foreground mb-1">{step.label}</p>
                <p className="text-xs text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Powered Station Scoring */}
      <section className="section-padding bg-secondary/30 border-y border-border">
        <div className="container-main">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">
              AI Features
            </p>
            <h2 className="mb-4 text-2xl sm:text-3xl">
              AI-Powered Station Scoring
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              User feedback drives continuous improvement in charging station reliability scores.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {aiScoringSteps.map((step, index) => (
              <div 
                key={step.title}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 border border-primary/20">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="step-number mx-auto mb-4 text-xs">{index + 1}</div>
                <h3 className="text-base font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-card border border-border">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-xs font-medium">Good</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="text-xs font-medium">Average</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-destructive" />
                <span className="text-xs font-medium">Poor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding">
        <div className="container-main">
          <div className="mb-12">
            <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">
              Features
            </p>
            <h2 className="mb-4 text-2xl sm:text-3xl">Tool Capabilities</h2>
            <p className="prose-body max-w-xl">
              Core features for EV infrastructure research and analysis.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {capabilities.map((item, index) => (
              <div 
                key={item.label}
                className="flex gap-4 p-6 card-elevated animate-fade-in-up"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{item.label}</h3>
                  <p className="text-sm prose-body">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-secondary/30 border-y border-border">
        <div className="container-main">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">
              Applications
            </p>
            <h2 className="mb-6 text-2xl sm:text-3xl">Research & Decision-Support Use</h2>
            <p className="prose-body mb-8">
              The EV Charger Finder is designed for researchers, analysts, and planners who require 
              data-driven insights into EV charging infrastructure. Applications include:
            </p>
            <ul className="space-y-4 text-sm prose-body">
              <li className="flex gap-4 items-start">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                </span>
                Infrastructure coverage analysis and gap identification
              </li>
              <li className="flex gap-4 items-start">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                </span>
                Public charging network distribution research
              </li>
              <li className="flex gap-4 items-start">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                </span>
                EV adoption trend analysis and forecasting support
              </li>
              <li className="flex gap-4 items-start">
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                </span>
                Regional infrastructure planning and assessment
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section-padding">
        <div className="container-main">
          <div className="flex gap-5 items-start p-6 lg:p-8 card-elevated border-amber-200 bg-amber-50/50 max-w-3xl">
            <div className="h-12 w-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
              <AlertTriangle className="h-6 w-6 text-amber-700" />
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground text-lg">Important Information</h3>
              <ul className="space-y-3 text-sm prose-body">
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
