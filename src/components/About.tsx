const About = () => {
  return (
    <section id="about" className="py-32 border-t border-border">
      <div className="section-container">
        <p className="section-label">About</p>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed">
              Software developer with hands-on experience delivering production systems across SaaS, AI, ERP, and enterprise domains.
            </p>
          </div>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Based in Japan, building and maintaining complex integrations including payment terminals, QR payments, and accounting systems. Developing modern platforms with scalable architecture and AI-powered workflows.
            </p>
            
            <p>
              Focused on production reliability, clear architecture, and business impact over visual gimmicks.
            </p>
          </div>
        </div>
        
        <div className="mt-20 pt-12 border-t border-border">
          <p className="section-label">Focus Areas</p>
          <div className="flex flex-wrap gap-3 mt-6">
            {[
              "SaaS Platforms",
              "AI Applications",
              "ERP Integrations",
              "Payment Systems",
              "Data Dashboards",
              "Enterprise Solutions"
            ].map((area) => (
              <span key={area} className="skill-tag">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
