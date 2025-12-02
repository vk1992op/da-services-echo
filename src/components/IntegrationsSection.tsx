import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const integrations = [
  "ClickUp",
  "QuickBooks",
  "Google Drive",
  "HubSpot",
  "OpenAI",
  "Dropbox",
  "Stripe",
  "Zapier",
  "Slack",
  "Salesforce",
  "Notion",
  "Airtable",
];

export function IntegrationsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm tracking-widest text-primary mb-4 block">
              EXPERIENCED IN 100+ INTEGRATIONS
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Automation that respects your stack
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Still managing half your work in Google Sheets? Keep it. We'll make it sync with
              QuickBooks, Teams, and everything else — so your data finally moves on its own.
            </p>
            <Button asChild variant="outline" className="border-border hover:bg-secondary">
              <Link to="/case-studies">SEE CASE STUDIES</Link>
            </Button>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary/50 transition-colors"
              >
                <span className="text-sm text-foreground">{integration}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
