const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="section-container">
        <h2 className="text-sm font-medium tracking-wide uppercase text-muted-foreground mb-4">
          About
        </h2>
        
        <div className="max-w-3xl">
          <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-8">
            Hiroshi is a product engineer based in Japan with hands-on experience delivering real production systems across multiple domains.
          </p>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              His background includes building and maintaining Odoo ERP and POS integrations, including payment terminals, QR payments, accounting logic, and permission control. He has developed SaaS platforms and dashboards using modern stacks such as React, Next.js, and cloud-native infrastructure.
            </p>
            
            <p>
              Hiroshi has implemented AI-powered workflows that transform text, images, audio, or transactional data into structured insights and reports. He has also delivered WordPress systems for healthcare, hospitality, and operational businesses where stability and trust are critical.
            </p>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-sm font-medium tracking-wide uppercase text-muted-foreground mb-6">
              Priorities
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Production reliability",
                "Upgrade safety",
                "Clear architecture",
                "Business impact"
              ].map((priority) => (
                <div key={priority} className="text-foreground font-medium">
                  {priority}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
