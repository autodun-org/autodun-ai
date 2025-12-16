import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/LogoMark";
import { ArrowRight, Zap, MapPin, BarChart3, Cpu, FileText, Shield, Search, Lightbulb, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const capabilities = [
  {
    icon: MapPin,
    title: "EV Infrastructure Analytics",
    description: "Explore UK charging locations, coverage gaps, and infrastructure planning insights using public datasets.",
  },
  {
    icon: BarChart3,
    title: "MOT Risk Estimation",
    description: "AI-driven analysis estimating MOT failure probability based on vehicle characteristics and historical data.",
  },
  {
    icon: Cpu,
    title: "Vehicle Data Research",
    description: "Tools for analysing vehicle populations, trends, and patterns across comprehensive UK datasets.",
  },
];

const steps = [
  {
    number: "1",
    title: "Enter your inputs",
    description: "Provide location for EV charging or vehicle details for MOT risk analysis.",
  },
  {
    number: "2",
    title: "Get AI insights",
    description: "Our models process the data and generate coverage maps or risk estimates.",
  },
  {
    number: "3",
    title: "Take action",
    description: "Find nearby chargers or prepare for your MOT with informed guidance.",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient border-b border-border">
        <div className="container-main section-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left">
              <div className="flex items-center gap-3 justify-center lg:justify-start mb-6">
                <LogoMark size="hero" />
              </div>
              
              <h1 className="text-balance mb-4">
                AI-driven vehicle insights for EV charging and MOT risk
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Independent research platform delivering analytics tools for UK vehicle data, 
                EV infrastructure coverage, and MOT failure prediction.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
                <Button asChild size="lg" className="gap-2 font-medium">
                  <a href="https://ev.autodun.com" target="_blank" rel="noopener noreferrer">
                    Open EV Charger Finder
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2 font-medium">
                  <a href="https://mot.autodun.com" target="_blank" rel="noopener noreferrer">
                    Open MOT Predictor
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>

              {/* Trust line */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 justify-center lg:justify-start text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Shield className="h-3.5 w-3.5" />
                  Research-grade models
                </span>
                <span>•</span>
                <span>UK-focused data</span>
                <span>•</span>
                <span>Not official DVSA advice</span>
              </div>
            </div>

            {/* Right visual */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square">
                {/* Abstract gradient panel */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl" />
                <div className="absolute inset-4 bg-gradient-to-tl from-primary/8 via-transparent to-primary/5 rounded-2xl border border-border/50" />
                <div className="absolute inset-8 bg-card rounded-xl border border-border shadow-soft flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-sm font-medium text-foreground">Vehicle Intelligence</p>
                    <p className="text-xs text-muted-foreground mt-1">AI-powered analytics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Autodun Does - Section A */}
      <section className="section-lg">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-primary mb-2 tracking-wide uppercase">
              What We Do
            </p>
            <h2 className="mb-4">Intelligent tools for vehicle data</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Purpose-built analytics for understanding EV infrastructure and vehicle health across the UK.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {capabilities.map((item) => (
              <div 
                key={item.title}
                className="card-elevated text-center"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Section B */}
      <section className="section-lg bg-secondary/40 border-y border-border">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-primary mb-2 tracking-wide uppercase">
              How It Works
            </p>
            <h2 className="mb-4">Simple, transparent process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get insights in three straightforward steps.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="text-center">
                <div className="step-number mx-auto mb-5">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tool Highlights - Section C */}
      <section className="section-lg">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-primary mb-2 tracking-wide uppercase">
              Our Tools
            </p>
            <h2 className="mb-4">Active platform tools</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Production-ready tools for EV infrastructure and MOT analysis.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {/* EV Charger Finder */}
            <div className="card-elevated">
              <div className="flex items-start justify-between mb-5">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <span className="badge-active">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Active
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3">EV Charger Finder</h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                Explore UK EV charging locations with coverage analysis, filtering by connector type, 
                network provider, and availability status.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Interactive coverage maps
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Filter by speed & connector
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  UK-wide infrastructure data
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="gap-2">
                  <a href="https://ev.autodun.com" target="_blank" rel="noopener noreferrer">
                    Open Tool
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="gap-2">
                  <Link to="/ev-charger-finder">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>

            {/* MOT Predictor */}
            <div className="card-elevated">
              <div className="flex items-start justify-between mb-5">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <span className="badge-beta">
                  Beta
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3">MOT Failure Risk Predictor</h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                AI-generated risk assessment based on vehicle characteristics, mileage patterns, 
                and historical MOT outcomes.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Risk band estimation
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  PDF report generation
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Guidance notes (not official advice)
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="gap-2">
                  <a href="https://mot.autodun.com" target="_blank" rel="noopener noreferrer">
                    Open Tool
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="gap-2">
                  <Link to="/mot-predictor">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-md bg-secondary/40 border-t border-border">
        <div className="container-main text-center">
          <h2 className="mb-4">Ready to explore?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Access our research tools for EV infrastructure insights and MOT risk analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="gap-2">
              <a href="https://ev.autodun.com" target="_blank" rel="noopener noreferrer">
                EV Charger Finder
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href="https://mot.autodun.com" target="_blank" rel="noopener noreferrer">
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
