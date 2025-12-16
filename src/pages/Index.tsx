import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Database, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Activity,
    title: "MOT Risk Modelling",
    description: "AI-driven analysis to estimate vehicle MOT failure probability based on historical patterns and vehicle characteristics.",
  },
  {
    icon: Database,
    title: "Vehicle Analytics",
    description: "Large-scale data processing and analysis tools for understanding vehicle populations and trends.",
  },
  {
    icon: Shield,
    title: "Research-Grade Tools",
    description: "Transparent, reproducible machine learning models designed for research and decision-support applications.",
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
              Our platform focuses on MOT risk prediction, vehicle analytics, and research-grade 
              machine learning models.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild size="lg" className="gap-2">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Open MOT Predictor
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>

            <p className="text-xs text-muted-foreground border-l-2 border-border pl-4">
              Not official DVSA advice. Research and educational use only.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl font-semibold mb-12">Platform Capabilities</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
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
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-medium text-primary mb-2 tracking-wide uppercase">
                Active Tool
              </p>
              <h2 className="text-xl font-semibold mb-2">MOT Failure Risk Predictor</h2>
              <p className="text-sm text-muted-foreground max-w-md">
                Our MOT risk model is currently available for testing. Input vehicle details 
                to receive an AI-generated risk assessment.
              </p>
            </div>
            <Button asChild className="gap-2 shrink-0">
              <Link to="/mot-predictor">
                View Details
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
