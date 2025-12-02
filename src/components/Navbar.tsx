import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const services = [
  { name: "AI Agents & Automation", href: "/services/ai-agents" },
  { name: "Process Automation", href: "/services/process-automation" },
  { name: "Business Analytics", href: "/services/business-analytics" },
  { name: "Custom Dashboards", href: "/services/dashboards" },
  { name: "Data Extraction", href: "/services/data-extraction" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">DA</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">DA Services</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                <span>SERVICES</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border-border">
                {services.map((service) => (
                  <DropdownMenuItem key={service.href} asChild>
                    <Link to={service.href} className="cursor-pointer">
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              to="/case-studies"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide"
            >
              CASE STUDIES
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide"
            >
              ABOUT US
            </Link>
          </div>

          <div className="hidden md:block">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/contact">CONTACT US</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <div className="space-y-2">
                <span className="text-sm font-medium text-muted-foreground">SERVICES</span>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    to={service.href}
                    className="block pl-4 py-2 text-sm text-foreground hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              <Link
                to="/case-studies"
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                CASE STUDIES
              </Link>
              <Link
                to="/about"
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT US
              </Link>
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  CONTACT US
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
