import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import PortfolioCard from "./PortfolioCard";

// Import local images for projects without URLs
import erpMercadopago from "@/assets/portfolio/erp-mercadopago.jpg";
import erpClover from "@/assets/portfolio/erp-clover.jpg";

// For projects with real URLs, use screenshot API
const getScreenshotUrl = (url: string) => {
  // Using a free screenshot service for real website previews
  return `https://image.thum.io/get/width/800/crop/500/noanimate/${url}`;
};

const portfolioData = [
  {
    title: "Corporate Healthcare",
    description: "Trust-focused websites for healthcare and regulated businesses.",
    url: "https://yasufuku-clinic.com/",
  },
  {
    title: "Device Rental Platform",
    description: "Professional service website with booking and rental management.",
    url: "https://mobile-rental.jp/",
  },
  {
    title: "Recruitment Landing",
    description: "High-conversion landing page for industrial recruitment.",
    url: "https://aisin-kikan-saiyo.com/lp/",
  },
  {
    title: "Fitness Brand",
    description: "Dynamic membership platform with strong visual identity.",
    url: "https://port-fitness.jp/",
  },
  {
    title: "Hotel Booking",
    description: "Luxury hotel website with integrated reservation system.",
    url: "https://www.seawoodhotel.com/",
  },
  {
    title: "Resort Platform",
    description: "Beach club booking system with multilingual support.",
    url: "https://beachclub.hotel-sandalwood.com/",
  },
  {
    title: "QR Payment Integration",
    description: "MercadoPago QR payment system for ERP and POS environments.",
    image: erpMercadopago,
  },
  {
    title: "Terminal Integration",
    description: "Clover Flex terminal integration for point of sale systems.",
    image: erpClover,
  },
  {
    title: "Fintech Platform",
    description: "Modern SaaS platform for financial services.",
    url: "https://www.truefi.ai/",
  },
  {
    title: "Real Estate AI",
    description: "AI-powered real estate platform with intelligent search.",
    url: "https://flatty.ai/",
  },
  {
    title: "AI Transcription",
    description: "Meeting transcription platform with AI-powered insights.",
    url: "https://fireflies.ai/",
  },
  {
    title: "Industrial AI",
    description: "Computer vision platform for quality inspection.",
    url: "https://inspecti.ai/",
  },
  {
    title: "Property Analytics",
    description: "Complex dashboard for property management and analytics.",
    url: "https://www.appfolio.com/im/lp/sem/software",
    note: "Benchmark reference",
  },
  {
    title: "User Analytics",
    description: "Session analytics platform with behavioral insights.",
    url: "https://www.fullstory.com/ps/data-analytics-portfolio",
    note: "Benchmark reference",
  },
  {
    title: "AI Search",
    description: "Intelligent search platform with subscription model.",
    url: "https://searchplus.ai/",
  },
  {
    title: "Invoice Automation",
    description: "Streamlined invoicing system with payment integration.",
    url: "https://noneedinvoice.com/",
  },
  {
    title: "Virtual Spaces",
    description: "Immersive virtual room platform with refined interactions.",
    url: "https://yroom.jp/",
  },
  {
    title: "Fashion Editorial",
    description: "Luxury fashion website with elegant motion design.",
    url: "https://maygelcoronel.com/",
  },
  {
    title: "Financial Ratings",
    description: "Enterprise platform for credit ratings and market data.",
    url: "https://www.fitchratings.com/",
    note: "Benchmark reference",
  },
  {
    title: "Telecom Portal",
    description: "Large-scale consumer service platform.",
    url: "https://www.au.com/",
    note: "Benchmark reference",
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-32 border-t border-border" ref={ref}>
      <div className="section-container">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label"
        >
          Selected Work
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-medium text-foreground mb-16 max-w-xl"
        >
          Production systems across industries
        </motion.h2>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioData.map((project, index) => (
            <PortfolioCard
              key={index}
              index={index % 6}
              title={project.title}
              description={project.description}
              image={project.image || getScreenshotUrl(project.url!)}
              url={project.url}
              note={project.note}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
