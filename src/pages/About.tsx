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
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="mb-6">
              About Autodun
            </h1>
            
            <div className="space-y-4 text-lg prose-body max-w-xl">
              <p>
                Autodun is an independent AI/ML research project focused on vehicle data analysis 
                and predictive modelling. Our work centres on developing practical tools for 
                understanding vehicle populations and associated risks.
              </p>
              <p>
                The platform is designed to serve researchers, analysts, and decision-makers who 
                require data-driven insights into vehicle-related questions. Our approach emphasises 
                transparency, reproducibility, and practical utility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Goals */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="mb-10">
            <h2 className="mb-3">Research Goals</h2>
            <p className="prose-body max-w-xl">
              Core objectives guiding our research and development work.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-5">
            {goals.map((goal, index) => (
              <div 
                key={goal.title}
                className="p-6 card-elevated animate-fade-in-up"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <div className="h-10 w-10 rounded-md bg-secondary flex items-center justify-center mb-4">
                  <goal.icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="font-medium mb-2">{goal.title}</h3>
                <p className="text-sm prose-body">
                  {goal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Approach */}
      <section className="section-padding bg-secondary/40 border-y border-border">
        <div className="container-narrow">
          <div className="max-w-2xl">
            <h2 className="mb-4">Technical Approach</h2>
            <div className="space-y-4 prose-body">
              <p>
                Our models are built using established machine learning techniques, trained on 
                UK-style vehicle and MOT data. We prioritise model interpretability and provide 
                clear documentation of our methodologies.
              </p>
              <p>
                Autodun operates independently and is not affiliated with or endorsed by DVSA 
                or any government agency. Our tools are intended for research and educational 
                purposes, providing supplementary analysis rather than official determinations.
              </p>
              <p>
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
