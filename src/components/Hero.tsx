import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToWork = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[90vh] flex flex-col justify-center section-container py-20">
      <div className="max-w-3xl">
        <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase mb-4 opacity-0 animate-fade-in-up">
          Product Engineer · Japan
        </p>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6 opacity-0 animate-fade-in-up animation-delay-100">
          Hiroshi — Product Engineer building SaaS, AI platforms, and ERP integrations
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 opacity-0 animate-fade-in-up animation-delay-200">
          I design and build production-grade systems including SaaS platforms, AI-powered applications, dashboards, and ERP integrations, with a strong focus on payments, data workflows, and long-term maintainability.
        </p>
        
        <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up animation-delay-300">
          <Button 
            onClick={scrollToWork}
            className="px-6 py-3 h-auto text-base"
          >
            View Work
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
          
          <Button 
            variant="outline" 
            onClick={scrollToContact}
            className="px-6 py-3 h-auto text-base"
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
