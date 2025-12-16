import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle, Gauge, Calendar, Fuel, History } from "lucide-react";

const inputs = [
  { icon: Calendar, label: "Vehicle Age", description: "Years since first registration" },
  { icon: Gauge, label: "Mileage", description: "Current odometer reading" },
  { icon: Fuel, label: "Fuel Type", description: "Petrol, diesel, electric, or hybrid" },
  { icon: History, label: "Previous MOT Failures", description: "Historical test failure count" },
];

export default function MOTPredictor() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding border-b border-border">
        <div className="container-narrow">
          <div className="max-w-2xl animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Beta
            </div>
            
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              MOT Failure Risk Predictor
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              This tool estimates MOT failure risk using AI models trained on UK-style MOT data. 
              Input your vehicle details to receive a risk assessment based on statistical patterns 
              observed in historical test results.
            </p>

            <Button asChild size="lg" className="gap-2">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Launch MOT Predictor Tool
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Model Inputs */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-xl font-semibold mb-8">Model Inputs</h2>
          
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {inputs.map((input, index) => (
              <div 
                key={input.label}
                className="flex gap-4 p-4 rounded-lg border border-border bg-card animate-fade-in"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <input.icon className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">{input.label}</h3>
                  <p className="text-sm text-muted-foreground">{input.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section-padding bg-secondary/30 border-y border-border">
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
                  This is an experimental AI model and results should be interpreted accordingly
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground">•</span>
                  Predictions are not an official MOT result or guarantee of test outcome
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground">•</span>
                  The model provides statistical risk estimates based on historical patterns
                </li>
                <li className="flex gap-2">
                  <span className="text-foreground">•</span>
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
