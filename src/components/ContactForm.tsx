import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Full Name
          </label>
          <Input
            id="name"
            name="name"
            required
            placeholder="John Doe"
            className="bg-card border-border"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email Address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="john@company.com"
            className="bg-card border-border"
          />
        </div>
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
          Company Name
        </label>
        <Input
          id="company"
          name="company"
          placeholder="Your Company"
          className="bg-card border-border"
        />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
          Service Interest
        </label>
        <select
          id="service"
          name="service"
          className="w-full h-10 px-3 rounded-md bg-card border border-border text-foreground"
        >
          <option value="">Select a service...</option>
          <option value="ai-agents">AI Agents & Automation</option>
          <option value="process-automation">Process Automation</option>
          <option value="business-analytics">Business Analytics</option>
          <option value="dashboards">Custom Dashboards</option>
          <option value="data-extraction">Data Extraction</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Tell us about your project
        </label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Describe your automation needs..."
          className="bg-card border-border"
        />
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
