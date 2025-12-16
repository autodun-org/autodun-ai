import { Layout } from "@/components/layout/Layout";
import { Shield, Database, Lock, FileCheck } from "lucide-react";

const principles = [
  {
    icon: Shield,
    title: "No Personal Data Collection",
    description: "We do not collect, store, or process any personal data. Our analysis focuses exclusively on vehicle-level information.",
  },
  {
    icon: Database,
    title: "Vehicle Registration Usage",
    description: "Vehicle registration numbers are used solely for vehicle-level analysis and identification. This data is processed in accordance with UK data protection principles.",
  },
  {
    icon: Lock,
    title: "No Data Redistribution",
    description: "Vehicle data processed through our platform is not resold, redistributed, or shared with third parties for commercial purposes.",
  },
  {
    icon: FileCheck,
    title: "UK Data Protection Compliance",
    description: "All data handling practices comply with UK data protection principles and relevant regulatory requirements.",
  },
];

export default function DataUsage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding border-b border-border">
        <div className="container-narrow">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              Data Usage & Responsibility
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Autodun is committed to responsible and transparent use of vehicle data. 
              This page outlines our data handling practices and the principles that 
              guide our approach to data processing.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-xl font-semibold mb-8">Our Data Principles</h2>
          
          <div className="space-y-6">
            {principles.map((principle, index) => (
              <div 
                key={principle.title}
                className="flex gap-4 p-6 rounded-lg border border-border bg-card animate-fade-in"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <principle.icon className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-medium mb-2">{principle.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="section-padding bg-secondary/30 border-y border-border">
        <div className="container-narrow">
          <div className="max-w-2xl">
            <h2 className="font-semibold mb-4">Summary</h2>
            <div className="prose prose-sm text-muted-foreground">
              <p className="leading-relaxed">
                Autodun processes vehicle data for research and analytical purposes. We maintain 
                strict data governance practices to ensure that vehicle information is handled 
                responsibly and in compliance with applicable regulations. Our platform is designed 
                to provide valuable insights while respecting data protection principles.
              </p>
              <p className="leading-relaxed mt-4">
                If you have questions about our data practices, please refer to our technical 
                documentation or contact us through the appropriate channels.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
