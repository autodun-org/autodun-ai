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
          <div className="max-w-2xl">
            <div className="animate-fade-in-up">
              <span className="badge-beta mb-6">
                Beta
              </span>
              
              <h1 className="mb-6">
                MOT Failure Risk Predictor
              </h1>
              
              <p className="text-lg prose-body mb-10 max-w-xl">
                This tool estimates MOT failure risk using AI models trained on UK-style MOT data. 
                Input your vehicle details to receive a risk assessment based on statistical patterns 
                observed in historical test results.
              </p>
            </div>

            <Button asChild size="lg" className="gap-2 font-medium animate-fade-in-up" style={{ animationDelay: "100ms" }}>
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
          <div className="mb-10">
            <h2 className="mb-3">Model Inputs</h2>
            <p className="prose-body max-w-xl">
              The prediction model uses the following vehicle characteristics.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-5">
            {inputs.map((input, index) => (
              <div 
                key={input.label}
                className="flex gap-4 p-5 card-elevated animate-fade-in-up"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <div className="h-10 w-10 rounded-md bg-secondary flex items-center justify-center shrink-0">
                  <input.icon className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">{input.label}</h3>
                  <p className="text-sm prose-body">{input.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section-padding bg-secondary/40 border-y border-border">
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
                  This is an experimental AI model and results should be interpreted accordingly
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-700 font-medium">•</span>
                  Predictions are not an official MOT result or guarantee of test outcome
                </li>
                <li className="flex gap-3">
                  <span className="text-amber-700 font-medium">•</span>
                  The model provides statistical risk estimates based on historical patterns
                </li>
                <li className="flex gap-3">
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
