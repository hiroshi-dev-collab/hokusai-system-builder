import { ArrowDown, Mail } from "lucide-react";

const Hero = () => {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center section-container py-24">
      <div className="max-w-4xl">
        <p className="text-muted-foreground text-sm tracking-widest uppercase mb-6 opacity-0 animate-fade-up">
          Software Developer · Japan
        </p>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-foreground leading-[1.1] mb-8 opacity-0 animate-fade-up delay-100">
          Hiroshi
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-2xl opacity-0 animate-fade-up delay-200">
          Building production-grade systems — SaaS platforms, AI-powered applications, dashboards, and enterprise integrations.
        </p>
        
        <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up delay-300">
          <button 
            onClick={scrollToWork}
            className="btn-primary"
          >
            View Work
            <ArrowDown className="ml-2 h-4 w-4" />
          </button>
          
          <button 
            onClick={scrollToContact}
            className="btn-outline"
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
