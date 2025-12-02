import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Calendar, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm tracking-widest text-primary mb-4 block">VIDEO CALL</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground max-w-4xl mx-auto mb-6">
              Let us show you how you can start earning more with automation
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We'll walk through your current business processes, spot the biggest time-wasters,
              and show you exactly how smart workflows and AI can help you scale faster with less
              stress.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-8">
                Prefer to start with a message?
              </h2>
              <ContactForm />
            </div>

            <div className="lg:pl-8">
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                  Or reach out directly
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Schedule a Call</h4>
                      <p className="text-muted-foreground text-sm">
                        Book a 30-minute strategy session to discuss your automation needs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Email Us</h4>
                      <p className="text-muted-foreground text-sm">hello@daservices.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Call Us</h4>
                      <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-medium text-foreground mb-4">What to expect:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Response within 24 hours</li>
                    <li>• Free initial consultation</li>
                    <li>• Custom automation roadmap</li>
                    <li>• Clear pricing estimate</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
