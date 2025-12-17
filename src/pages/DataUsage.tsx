import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Shield, Database, Lock, FileCheck, ArrowRight, ExternalLink } from "lucide-react";

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
      <section className="section-hero border-b border-border hero-gradient">
        <div className="container-narrow text-center">
          <div className="animate-fade-in-up">
            <h1 className="mb-5 text-3xl sm:text-4xl lg:text-5xl">
              Data Usage & Responsibility
            </h1>
            
            <p className="text-lg prose-body mx-auto">
              Autodun is committed to responsible and transparent use of vehicle data. 
              This page outlines our data handling practices and the principles that 
              guide our approach to data processing.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-major">
        <div className="container-narrow">
          <div className="mb-8 text-center">
            <p className="text-sm font-medium text-primary mb-2 tracking-wide uppercase">
              Data Governance
            </p>
            <h2 className="mb-4 text-2xl sm:text-3xl">Our Data Principles</h2>
            <p className="prose-body mx-auto">
              Core commitments governing how we handle and process data.
            </p>
          </div>
          
          <div className="space-y-4">
            {principles.map((principle, index) => (
              <div 
                key={principle.title}
                className="flex gap-4 p-5 card-elevated animate-fade-in-up text-left"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <principle.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{principle.title}</h3>
                  <p className="text-sm prose-body">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="section-major bg-secondary/30 border-y border-border">
        <div className="container-narrow text-center">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">
            Overview
          </p>
          <h2 className="mb-5 text-2xl sm:text-3xl">Summary</h2>
          <div className="space-y-4 prose-body mx-auto">
            <p>
              Autodun processes vehicle data for research and analytical purposes. We maintain 
              strict data governance practices to ensure that vehicle information is handled 
              responsibly and in compliance with applicable regulations.
            </p>
            <p>
              Our platform is designed to provide valuable insights while respecting data 
              protection principles. If you have questions about our data practices, please 
              refer to our technical documentation or contact us through the appropriate channels.
            </p>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">
            Related Tools
          </p>
          <h2 className="mb-5 text-2xl sm:text-3xl">Explore Our Analytics</h2>
          <p className="prose-body mx-auto mb-6">
            Our analytics tools are built with the same commitment to responsible data use.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild className="gap-2">
              <a href="https://ev.autodun.com" target="_blank" rel="noopener noreferrer">
                EV Charger Finder
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <a href="https://ev.autodun.com/ev-charging-council-dashboard" target="_blank" rel="noopener noreferrer">
                Council Analytics Dashboard
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
