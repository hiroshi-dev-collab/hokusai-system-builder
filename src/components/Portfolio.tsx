import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import PortfolioCard from "./PortfolioCard";

// Import local images for projects without URLs
import erpMercadopago from "@/assets/portfolio/erp-mercadopago.jpg";
import erpClover from "@/assets/portfolio/erp-clover.jpg";

// For projects with real URLs, use screenshot API - full page view
const getScreenshotUrl = (url: string) => {
  return `https://image.thum.io/get/width/1200/viewportWidth/1200/png/${url}`;
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
    title: "Outreach Automation",
    description: "B2B SaaS platform for lead generation and multichannel outreach.",
    url: "https://www.lemlist.com/",
  },
  {
    title: "Data Analytics",
    description: "SaaS platform for data visualization and metrics-driven decisions.",
    url: "https://www.getcrosstab.com/",
  },
  {
    title: "AI Workflow",
    description: "AI-powered automation platform for productivity and operations.",
    url: "https://letti.ai/",
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-32 border-t border-border relative overflow-hidden" ref={ref}>
      {/* Background accent */}
      <motion.div 
        className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="section-container relative">
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
          className="text-3xl md:text-5xl font-medium text-foreground mb-6 max-w-2xl"
        >
          Production systems across industries
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-lg mb-16 max-w-xl"
        >
          From healthcare to fintech, building reliable systems that scale.
        </motion.p>
        
        <motion.div 
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {portfolioData.map((project, index) => (
            <PortfolioCard
              key={index}
              index={index % 9}
              title={project.title}
              description={project.description}
              image={project.image || getScreenshotUrl(project.url!)}
              url={project.url}
              note={project.note}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
