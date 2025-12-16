import { Layout } from "@/components/layout/Layout";
import { Cpu, Target, BarChart3, Layers } from "lucide-react";

const goals = [
  {
    icon: Target,
    title: "Vehicle Risk Modelling",
    description: "Developing accurate predictive models for vehicle-related risks, including MOT failure probability and maintenance requirements.",
  },
  {
    icon: BarChart3,
    title: "Large-Scale Analytics",
    description: "Building tools for understanding vehicle populations, trends, and patterns across large datasets.",
  },
  {
    icon: Layers,
    title: "Reproducible Research",
    description: "Creating transparent, well-documented models that can be evaluated and validated by the research community.",
  },
  {
    icon: Cpu,
    title: "Applied Machine Learning",
    description: "Applying modern ML techniques to practical problems in the vehicle data domain.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding border-b border-border">
        <div className="container-narrow">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              About Autodun
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Autodun is an independent AI/ML research project focused on vehicle data analysis 
              and predictive modelling. Our work centres on developing practical tools for 
              understanding vehicle populations and associated risks.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              The platform is designed to serve researchers, analysts, and decision-makers who 
              require data-driven insights into vehicle-related questions. Our approach emphasises 
              transparency, reproducibility, and practical utility.
            </p>
          </div>
        </div>
      </section>

      {/* Research Goals */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-xl font-semibold mb-8">Research Goals</h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {goals.map((goal, index) => (
              <div 
                key={goal.title}
                className="p-6 rounded-lg border border-border bg-card animate-fade-in"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center mb-4">
                  <goal.icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="font-medium mb-2">{goal.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {goal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Approach */}
      <section className="section-padding bg-secondary/30 border-y border-border">
        <div className="container-narrow">
          <div className="max-w-2xl">
            <h2 className="font-semibold mb-4">Technical Approach</h2>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p className="leading-relaxed">
                Our models are built using established machine learning techniques, trained on 
                UK-style vehicle and MOT data. We prioritise model interpretability and provide 
                clear documentation of our methodologies.
              </p>
              <p className="leading-relaxed">
                Autodun operates independently and is not affiliated with or endorsed by DVSA 
                or any government agency. Our tools are intended for research and educational 
                purposes, providing supplementary analysis rather than official determinations.
              </p>
              <p className="leading-relaxed">
                The platform is continuously developed, with ongoing work to improve model 
                accuracy, expand analytical capabilities, and ensure responsible data use.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
