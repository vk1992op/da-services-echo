import { Link } from "react-router-dom";
import { Logo } from "./Logo";

const services = [
  { name: "AI Agents", href: "/services/ai-agents" },
  { name: "Process Automation", href: "/services/process-automation" },
  { name: "Business Analytics", href: "/services/business-analytics" },
  { name: "Department as a Service", href: "/services/department-as-service" },
  { name: "MVP Development", href: "/services/mvp-development" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Logo className="mb-4" />
            <p className="text-muted-foreground max-w-sm">
              Transform your business with proven AI solutions and dedicated expert teams. We guarantee faster growth, reduced costs, and effortless scaling—from MVP to market leader.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} DA Services. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
