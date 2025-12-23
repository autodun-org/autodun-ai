import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MOTDemo } from "@/components/demos/MOTDemo";
import { ArrowRight, AlertTriangle, Gauge, Calendar, Fuel, History, Car, Brain, BarChart3, FileText, Shield } from "lucide-react";

const inputs = [
  { icon: Calendar, label: "Vehicle Age", description: "Years since first registration" },
  { icon: Gauge, label: "Mileage", description: "Current odometer reading" },
  { icon: Fuel, label: "Fuel Type", description: "Petrol, diesel, electric, or hybrid" },
  { icon: History, label: "Previous MOT Failures", description: "Historical test failure count" },
];

const videoSteps = [
  { icon: Car, label: "Enter Vehicle Details", description: "Input age, mileage, and fuel type" },
  { icon: Brain, label: "AI Processing", description: "Model analyses historical MOT data" },
  { icon: BarChart3, label: "Risk Calculation", description: "Failure probability computed" },
  { icon: FileText, label: "View Results", description: "Risk score and guidance displayed" },
];

export default function MOTPredictor() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-hero border-b border-border hero-gradient">
        <div className="container-narrow text-center">
          <div className="animate-fade-in-up">
            <span className="badge-active mb-5 inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Live Data
            </span>
            
            <h1 className="mb-5 text-3xl sm:text-4xl lg:text-5xl">
              MOT Failure Risk Predictor
            </h1>
            
            <p className="text-lg prose-body mb-8 mx-auto">
              Powered by live DVSA MOT History data with independent risk analytics. 
              Input your vehicle details to receive a risk assessment based on real MOT records 
              and predictive modelling.
            </p>
          </div>

          <Button asChild size="lg" className="gap-2 font-medium animate-fade-in-up w-full sm:w-auto" style={{ animationDelay: "100ms" }}>
            <a href="https://mot.autodun.com" target="_blank" rel="noopener noreferrer">
              Launch MOT Predictor Tool
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* Animated Explainer Video Section */}
      <section className="section-major">
        <div className="container-main">
          <div className="text-center mb-8">
            <p className="text-sm font-medium text-primary mb-2 tracking-wide uppercase">
              Platform Demo
            </p>
            <h2 className="mb-4 text-2xl sm:text-3xl">
              How MOT Failure Risk Is Predicted
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Understand how our AI model processes vehicle data to estimate MOT failure probability.
            </p>
          </div>
          
          {/* Animated Demo */}
          <div className="max-w-4xl mx-auto mb-8 aspect-[16/10]">
            <MOTDemo />
          </div>

          {/* Step-by-step flow */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {videoSteps.map((step, index) => (
              <div 
                key={step.label}
                className="text-center p-4 rounded-xl bg-secondary/30 border border-border/50"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="step-number mx-auto mb-2 text-xs">{index + 1}</div>
                <p className="text-sm font-medium text-foreground mb-1">{step.label}</p>
                <p className="text-xs text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Source Banner */}
      <section className="section-compact bg-primary/5 border-y border-primary/10">
        <div className="container-main">
          <div className="flex items-center justify-center gap-4 text-center">
            <Shield className="h-5 w-5 text-primary shrink-0" />
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Live DVSA Integration</span> — MOT history sourced from live DVSA records. Risk predictions are independent analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Model Inputs */}
      <section className="section-major">
        <div className="container-narrow">
          <div className="mb-8 text-center">
            <p className="text-sm font-medium text-primary mb-2 tracking-wide uppercase">
              Input Parameters
            </p>
            <h2 className="mb-4 text-2xl sm:text-3xl">Model Inputs</h2>
            <p className="prose-body mx-auto">
              The prediction model uses the following vehicle characteristics.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-5">
            {inputs.map((input, index) => (
              <div 
                key={input.label}
                className="flex gap-4 p-5 card-elevated animate-fade-in-up text-left"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <input.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{input.label}</h3>
                  <p className="text-sm prose-body">{input.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How the Model Works */}
      <section className="section-major bg-secondary/30 border-y border-border">
        <div className="container-narrow text-center">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">
            Methodology
          </p>
          <h2 className="mb-5 text-2xl sm:text-3xl">How the Model Works</h2>
          <div className="space-y-5 prose-body mx-auto">
            <p>
              The MOT Failure Risk Predictor uses machine learning models trained on live DVSA 
              MOT History data. The model identifies statistical patterns that correlate with 
              test outcomes using real vehicle records.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              <div className="p-4 rounded-xl bg-card border border-border">
                <h4 className="font-medium text-foreground mb-2 text-sm">Data Source</h4>
                <p className="text-sm">Live DVSA MOT History records for accurate analysis</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <h4 className="font-medium text-foreground mb-2 text-sm">Output</h4>
                <p className="text-sm">Probability estimate of MOT failure risk</p>
              </div>
            </div>
            <p>
              Results are presented as risk bands (Low, Medium, High) with explanatory notes. 
              PDF reports can be generated for record-keeping purposes.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="flex gap-4 items-start p-5 lg:p-6 card-elevated border-amber-200 bg-amber-50/50">
            <div className="h-10 w-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
              <AlertTriangle className="h-5 w-5 text-amber-700" />
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-foreground">Important Information</h3>
              <ul className="space-y-2 text-sm prose-body">
                <li className="flex gap-2">
                  <span className="text-amber-700 font-medium">•</span>
                  MOT history is sourced from live DVSA records
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-700 font-medium">•</span>
                  Risk predictions are independent analytics and do not constitute DVSA advice
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-700 font-medium">•</span>
                  Predictions are not an official MOT result or guarantee of test outcome
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-700 font-medium">•</span>
                  Always rely on official DVSA MOT testing for vehicle roadworthiness certification
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
