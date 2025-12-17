import { Layout } from "@/components/layout/Layout";

export default function Cookies() {
  return (
    <Layout>
      <section className="section-hero">
        <div className="container-narrow text-center">
          <h1 className="text-3xl sm:text-4xl mb-4">Cookie Policy</h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
          </p>
        </div>
      </section>

      <section className="section-major">
        <div className="container-narrow">
          <div className="prose-body space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-3">What Are Cookies?</h2>
              <p className="leading-relaxed">
                Cookies are small text files placed on your device when you visit a website. They 
                help websites function properly, provide analytics, and remember your preferences.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">How We Use Cookies</h2>
              <p className="leading-relaxed mb-3">
                Autodun uses a minimal set of cookies to ensure our website functions correctly 
                and to understand how visitors use our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Types of Cookies We Use</h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h3 className="font-medium mb-2">Essential Cookies</h3>
                  <p className="text-sm text-muted-foreground">
                    Required for the website to function. These cannot be disabled as they are 
                    necessary for basic features like navigation and secure access.
                  </p>
                </div>

                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h3 className="font-medium mb-2">Analytics Cookies</h3>
                  <p className="text-sm text-muted-foreground">
                    Help us understand how visitors interact with our website by collecting 
                    anonymous information. We use privacy-focused analytics that do not track 
                    individual users across websites.
                  </p>
                </div>

                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h3 className="font-medium mb-2">Functional Cookies</h3>
                  <p className="text-sm text-muted-foreground">
                    Remember your preferences and settings to enhance your experience, such as 
                    language preferences or form data.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Third-Party Cookies</h2>
              <p className="leading-relaxed">
                Our external tools at ev.autodun.com and mot.autodun.com may use additional 
                cookies. These are subject to the specific cookie policies of those applications.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Managing Cookies</h2>
              <p className="leading-relaxed mb-3">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>View what cookies are stored on your device</li>
                <li>Delete individual or all cookies</li>
                <li>Block cookies from specific or all websites</li>
                <li>Set preferences for first-party and third-party cookies</li>
              </ul>
              <p className="leading-relaxed mt-3">
                Note that disabling cookies may affect the functionality of some features on our 
                website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Cookie Retention</h2>
              <p className="leading-relaxed">
                Session cookies are deleted when you close your browser. Persistent cookies remain 
                on your device for a set period or until you delete them manually.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Updates to This Policy</h2>
              <p className="leading-relaxed">
                We may update this Cookie Policy from time to time. Any changes will be posted on 
                this page with an updated revision date.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Contact</h2>
              <p className="leading-relaxed">
                For questions about our cookie practices, please email{" "}
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
