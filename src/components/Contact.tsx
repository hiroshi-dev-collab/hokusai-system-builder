import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <h2 className="text-sm font-medium tracking-wide uppercase text-muted-foreground mb-4">
          Contact
        </h2>
        
        <div className="max-w-2xl">
          <p className="text-2xl md:text-3xl font-medium text-foreground mb-6">
            Let's work together.
          </p>
          
          <p className="text-muted-foreground leading-relaxed mb-8">
            Open to collaboration on SaaS platforms, AI-powered products, ERP/Odoo integrations, and data-driven dashboards. If you're building something that requires production-grade engineering and system-level thinking, let's connect.
          </p>
          
          <Button 
            asChild
            className="px-6 py-3 h-auto text-base"
          >
            <a href="mailto:hello@hiroshi.dev">
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
