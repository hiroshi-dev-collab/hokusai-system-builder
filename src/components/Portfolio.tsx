import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import PortfolioCard from "./PortfolioCard";
import { useLanguage } from "@/contexts/LanguageContext";

// Import local images for projects without URLs
import erpMercadopago from "@/assets/portfolio/erp-mercadopago.jpg";
import erpClover from "@/assets/portfolio/erp-clover.jpg";
import beachClub from "@/assets/portfolio/beach-club.jpg";
import flatty from "@/assets/portfolio/flatty.jpg";

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
    image: beachClub,
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
    image: flatty,
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
      staggerChildren: 0.08,
      delayChildren: 0.3
    }
  }
};

const Portfolio = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-32 border-t border-border relative overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 30, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 -left-64 w-[400px] h-[400px] bg-accent/3 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Floating dots */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-accent/30 rounded-full"
          style={{
            top: `${15 + i * 10}%`,
            left: `${5 + i * 12}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3
          }}
        />
      ))}
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className="section-label inline-flex items-center gap-2"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-accent rounded-full"
            />
            {t.portfolio.label}
          </motion.p>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-3xl md:text-5xl font-medium text-foreground mb-6 max-w-2xl"
        >
          <motion.span className="inline-block">{t.portfolio.heading1}</motion.span>{" "}
          <motion.span 
            className="inline-block text-accent"
            animate={{ 
              textShadow: [
                "0 0 20px hsl(var(--accent) / 0)",
                "0 0 30px hsl(var(--accent) / 0.2)",
                "0 0 20px hsl(var(--accent) / 0)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {t.portfolio.heading2}
          </motion.span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-lg mb-16 max-w-xl"
        >
          {t.portfolio.subtitle}
        </motion.p>

        {/* Animated line */}
        <motion.div 
          className="h-px bg-gradient-to-r from-accent/50 via-accent/20 to-transparent mb-12"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ originX: 0 }}
        />
        
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

        {/* Bottom decoration */}
        <motion.div 
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div 
            className="flex gap-2"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-accent/40 rounded-full"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
