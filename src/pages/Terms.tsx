import { Layout } from "@/components/layout/Layout";

export default function Terms() {
  return (
    <Layout>
      <section className="section-hero">
        <div className="container-narrow text-center">
          <h1 className="text-3xl sm:text-4xl mb-4">Terms of Use</h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
          </p>
        </div>
      </section>

      <section className="section-major">
        <div className="container-narrow">
          <div className="prose-body space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-3">Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing and using Autodun's website and tools (including ev.autodun.com and 
                mot.autodun.com), you accept and agree to be bound by these Terms of Use. If you 
                do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Description of Services</h2>
              <p className="leading-relaxed">
                Autodun provides research-grade analytics tools for vehicle data, including EV 
                charging infrastructure analysis and MOT failure risk prediction. Our tools are 
                designed for informational and educational purposes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Important Disclaimers</h2>
              <p className="leading-relaxed mb-3">
                <strong>Not Official Advice:</strong> Autodun tools and data are not official DVSA 
                (Driver and Vehicle Standards Agency) services. Our predictions and analyses are 
                research-grade estimates and should not be treated as authoritative guidance.
              </p>
              <p className="leading-relaxed mb-3">
                <strong>No Warranty:</strong> Our services are provided "as is" without warranties 
                of any kind. We do not guarantee the accuracy, completeness, or reliability of any 
                data, predictions, or information provided.
              </p>
              <p className="leading-relaxed">
                <strong>Use at Your Own Risk:</strong> Decisions made based on information from 
                our tools are solely your responsibility. Always consult official sources and 
                qualified professionals for important vehicle-related decisions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Acceptable Use</h2>
              <p className="leading-relaxed mb-3">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Use our services for any unlawful purpose</li>
                <li>Attempt to gain unauthorised access to our systems</li>
                <li>Interfere with or disrupt the operation of our services</li>
                <li>Scrape or harvest data without permission</li>
                <li>Misrepresent the source or nature of data obtained from our tools</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Intellectual Property</h2>
              <p className="leading-relaxed">
                All content, features, and functionality of Autodun services are owned by Autodun 
                and are protected by copyright, trademark, and other intellectual property laws.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Limitation of Liability</h2>
              <p className="leading-relaxed">
                To the fullest extent permitted by law, Autodun shall not be liable for any 
                indirect, incidental, special, consequential, or punitive damages arising from 
                your use of our services or any decisions made based on our tools.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Changes to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these terms at any time. Continued use of our 
                services after changes constitutes acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Governing Law</h2>
              <p className="leading-relaxed">
                These terms are governed by the laws of England and Wales. Any disputes shall be 
                subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Contact</h2>
              <p className="leading-relaxed">
                For questions about these terms, please contact{" "}
                <a href="mailto:info@autodun.com" className="text-primary hover:underline">
                  info@autodun.com
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
