import { Layout } from "@/components/layout/Layout";

export default function Privacy() {
  return (
    <Layout>
      <section className="section-hero">
        <div className="container-narrow text-center">
          <h1 className="text-3xl sm:text-4xl mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
          </p>
        </div>
      </section>

      <section className="section-major">
        <div className="container-narrow">
          <div className="prose-body space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-3">Overview</h2>
              <p className="leading-relaxed">
                Autodun ("we", "our", or "us") operates the autodun.com website and related tools 
                including ev.autodun.com and mot.autodun.com. This Privacy Policy explains how we 
                collect, use, and protect information when you use our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
              <p className="leading-relaxed mb-3">
                <strong>Analytics Data:</strong> We use privacy-focused analytics to understand how 
                visitors use our website. This includes aggregated, non-personal data such as page 
                views, browser type, and general geographic location.
              </p>
              <p className="leading-relaxed mb-3">
                <strong>Contact Form Submissions:</strong> When you submit our contact form, we 
                collect your name, email address, and message content to respond to your enquiry.
              </p>
              <p className="leading-relaxed">
                <strong>Vehicle Registration Numbers:</strong> Our MOT Predictor tool may process 
                vehicle registration numbers (VRNs) for analysis. VRNs are used solely for 
                vehicle-level analysis and are not linked to personal identities.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">How We Use Information</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>To provide and improve our analytics tools</li>
                <li>To respond to contact form submissions</li>
                <li>To analyse usage patterns and improve user experience</li>
                <li>To maintain the security and integrity of our services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Data Sharing</h2>
              <p className="leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may 
                share data with trusted service providers who assist in operating our website, 
                subject to confidentiality obligations.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">External Links</h2>
              <p className="leading-relaxed">
                Our tools at ev.autodun.com and mot.autodun.com are external applications. While 
                operated by Autodun, they may have specific data handling practices detailed in 
                their respective documentation.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Data Retention</h2>
              <p className="leading-relaxed">
                Contact form submissions are retained only as long as necessary to respond to 
                enquiries. Analytics data is aggregated and does not identify individuals.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
              <p className="leading-relaxed">
                You have the right to access, correct, or delete any personal information we hold 
                about you. To exercise these rights, please contact us at{" "}
                <a href="mailto:info@autodun.com" className="text-primary hover:underline">
                  info@autodun.com
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Disclaimer</h2>
              <p className="leading-relaxed">
                Autodun provides research-grade tools for informational purposes. Our services are 
                not official DVSA advice and should not be relied upon as such.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Contact</h2>
              <p className="leading-relaxed">
                For privacy-related enquiries, please email{" "}
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
