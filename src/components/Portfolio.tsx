import PortfolioSection from "./PortfolioSection";

const portfolioData = [
  {
    title: "WordPress (Corporate & Regulated)",
    description: "Trust-focused WordPress websites for regulated and operational businesses, including healthcare and service providers.",
    items: [
      { type: "link" as const, title: "yasufuku-clinic.com", url: "https://yasufuku-clinic.com/" },
      { type: "link" as const, title: "mobile-rental.jp", url: "https://mobile-rental.jp/" },
    ],
  },
  {
    title: "WordPress Landing Pages (Conversion)",
    description: "High-conversion landing pages designed for recruitment, fitness, and marketing funnels, optimized for mobile and clarity.",
    items: [
      { type: "link" as const, title: "aisin-kikan-saiyo.com/lp", url: "https://aisin-kikan-saiyo.com/lp/" },
      { type: "link" as const, title: "port-fitness.jp", url: "https://port-fitness.jp/" },
    ],
  },
  {
    title: "WordPress + Commerce / Reservation",
    description: "Booking and commerce systems built on WordPress, handling real reservation flows, payments, and multilingual UX.",
    items: [
      { type: "link" as const, title: "seawoodhotel.com", url: "https://www.seawoodhotel.com/" },
      { type: "link" as const, title: "beachclub.hotel-sandalwood.com", url: "https://beachclub.hotel-sandalwood.com/" },
    ],
  },
  {
    title: "ERP / Odoo Integrations",
    description: "Custom Odoo ERP and POS integrations focused on payments, accounting correctness, and hardware integration in live environments.",
    items: [
      { type: "case-study" as const, title: "MercadoPago QR Payment Integration for Odoo Portal & POS" },
      { type: "case-study" as const, title: "Clover Flex 4 Terminal Integration for Odoo POS" },
    ],
  },
  {
    title: "SaaS Web Applications (React / Next.js)",
    description: "Modern SaaS applications with authentication, scalable UI systems, and production-ready architecture.",
    items: [
      { type: "link" as const, title: "truefi.ai", url: "https://www.truefi.ai/" },
      { type: "link" as const, title: "flatty.ai", url: "https://flatty.ai/" },
    ],
  },
  {
    title: "AI-Powered SaaS Platforms",
    description: "AI-first products where machine learning and LLMs are embedded into real workflows, dashboards, and decision-support systems.",
    items: [
      { type: "link" as const, title: "fireflies.ai", url: "https://fireflies.ai/" },
      { type: "link" as const, title: "inspecti.ai", url: "https://inspecti.ai/" },
    ],
  },
  {
    title: "Dashboards & Data-Heavy Applications",
    description: "Analytics and management dashboards designed for long-session use, complex data visualization, and decision-making.",
    items: [
      { type: "link" as const, title: "appfolio.com", url: "https://www.appfolio.com/im/lp/sem/software" },
      { type: "link" as const, title: "fullstory.com", url: "https://www.fullstory.com/ps/data-analytics-portfolio" },
    ],
    note: "Shown as comparable systems demonstrating UX and data complexity standards.",
  },
  {
    title: "Payments, Subscriptions & Monetization",
    description: "Payment-driven platforms including subscriptions, invoicing, and monetization systems using Stripe and QR-based payments.",
    items: [
      { type: "link" as const, title: "searchplus.ai", url: "https://searchplus.ai/" },
      { type: "link" as const, title: "noneedinvoice.com", url: "https://noneedinvoice.com/" },
    ],
  },
  {
    title: "Brand & Motion-Aware UX",
    description: "Brand-driven websites using subtle animation and refined interaction to support storytelling without harming usability.",
    items: [
      { type: "link" as const, title: "yroom.jp", url: "https://yroom.jp/" },
      { type: "link" as const, title: "maygelcoronel.com", url: "https://maygelcoronel.com/" },
    ],
  },
  {
    title: "Enterprise-Grade Reference Platforms",
    description: "Enterprise-scale platforms used as UX and architectural benchmarks for information-heavy, trust-critical systems.",
    items: [
      { type: "link" as const, title: "fitchratings.com", url: "https://www.fitchratings.com/" },
      { type: "link" as const, title: "au.com", url: "https://www.au.com/" },
    ],
    note: "These platforms are included as quality and UX benchmarks, not as authored projects.",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24">
      <div className="section-container">
        <h2 className="text-sm font-medium tracking-wide uppercase text-muted-foreground mb-4">
          Portfolio
        </h2>
        
        <p className="text-2xl md:text-3xl font-medium text-foreground mb-12 max-w-2xl">
          Selected work across SaaS, AI, ERP, and enterprise systems.
        </p>
        
        <div className="grid gap-6 md:grid-cols-2">
          {portfolioData.map((section, index) => (
            <PortfolioSection
              key={index}
              title={section.title}
              description={section.description}
              items={section.items}
              note={section.note}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
