import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 border-t border-border">
      <div className="section-container">
        <p className="section-label">Contact</p>
        
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">
            Let's work together
          </h2>
          
          <p className="text-muted-foreground leading-relaxed mb-10">
            Open to collaboration on SaaS platforms, AI-powered products, ERP integrations, and data-driven dashboards.
          </p>
          
          <a 
            href="mailto:hello@hiroshi.dev"
            className="btn-primary"
          >
            <Mail className="mr-2 h-4 w-4" />
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
