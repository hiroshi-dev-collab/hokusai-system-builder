const skillsData = {
  "Frontend": ["React", "Next.js", "Tailwind CSS"],
  "Backend / ERP": ["Python", "Odoo ORM", "Business logic & integrations"],
  "AI & Data": ["LLM APIs", "Async processing", "Dashboards & reporting"],
  "Payments": ["Stripe", "QR payments", "POS integrations"],
  "Platforms": ["WordPress", "WooCommerce / Welcart", "Odoo ERP"],
  "Deployment": ["Vercel", "Cloudflare", "Modern CI/CD workflows"],
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-card">
      <div className="section-container">
        <h2 className="text-sm font-medium tracking-wide uppercase text-muted-foreground mb-4">
          Skills
        </h2>
        
        <p className="text-2xl md:text-3xl font-medium text-foreground mb-12 max-w-2xl">
          Technologies and systems I work with.
        </p>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-sm font-medium text-foreground mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
