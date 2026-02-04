import PortfolioCard from "./PortfolioCard";

// Import all portfolio images
import yasufukuClinic from "@/assets/portfolio/yasufuku-clinic.jpg";
import mobileRental from "@/assets/portfolio/mobile-rental.jpg";
import aisinRecruitment from "@/assets/portfolio/aisin-recruitment.jpg";
import portFitness from "@/assets/portfolio/port-fitness.jpg";
import seawoodHotel from "@/assets/portfolio/seawood-hotel.jpg";
import beachClub from "@/assets/portfolio/beach-club.jpg";
import erpMercadopago from "@/assets/portfolio/erp-mercadopago.jpg";
import erpClover from "@/assets/portfolio/erp-clover.jpg";
import truefi from "@/assets/portfolio/truefi.jpg";
import flatty from "@/assets/portfolio/flatty.jpg";
import fireflies from "@/assets/portfolio/fireflies.jpg";
import inspecti from "@/assets/portfolio/inspecti.jpg";
import appfolio from "@/assets/portfolio/appfolio.jpg";
import fullstory from "@/assets/portfolio/fullstory.jpg";
import searchplus from "@/assets/portfolio/searchplus.jpg";
import noneedinvoice from "@/assets/portfolio/noneedinvoice.jpg";
import yroom from "@/assets/portfolio/yroom.jpg";
import maygel from "@/assets/portfolio/maygel.jpg";
import fitch from "@/assets/portfolio/fitch.jpg";
import au from "@/assets/portfolio/au.jpg";

const portfolioData = [
  {
    title: "Corporate Healthcare",
    description: "Trust-focused websites for healthcare and regulated businesses.",
    image: yasufukuClinic,
    url: "https://yasufuku-clinic.com/",
  },
  {
    title: "Device Rental Platform",
    description: "Professional service website with booking and rental management.",
    image: mobileRental,
    url: "https://mobile-rental.jp/",
  },
  {
    title: "Recruitment Landing",
    description: "High-conversion landing page for industrial recruitment.",
    image: aisinRecruitment,
    url: "https://aisin-kikan-saiyo.com/lp/",
  },
  {
    title: "Fitness Brand",
    description: "Dynamic membership platform with strong visual identity.",
    image: portFitness,
    url: "https://port-fitness.jp/",
  },
  {
    title: "Hotel Booking",
    description: "Luxury hotel website with integrated reservation system.",
    image: seawoodHotel,
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
    title: "Fintech Platform",
    description: "Modern SaaS platform for financial services.",
    image: truefi,
    url: "https://www.truefi.ai/",
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
    image: fireflies,
    url: "https://fireflies.ai/",
  },
  {
    title: "Industrial AI",
    description: "Computer vision platform for quality inspection.",
    image: inspecti,
    url: "https://inspecti.ai/",
  },
  {
    title: "Property Analytics",
    description: "Complex dashboard for property management and analytics.",
    image: appfolio,
    url: "https://www.appfolio.com/im/lp/sem/software",
    note: "Benchmark reference",
  },
  {
    title: "User Analytics",
    description: "Session analytics platform with behavioral insights.",
    image: fullstory,
    url: "https://www.fullstory.com/ps/data-analytics-portfolio",
    note: "Benchmark reference",
  },
  {
    title: "AI Search",
    description: "Intelligent search platform with subscription model.",
    image: searchplus,
    url: "https://searchplus.ai/",
  },
  {
    title: "Invoice Automation",
    description: "Streamlined invoicing system with payment integration.",
    image: noneedinvoice,
    url: "https://noneedinvoice.com/",
  },
  {
    title: "Virtual Spaces",
    description: "Immersive virtual room platform with refined interactions.",
    image: yroom,
    url: "https://yroom.jp/",
  },
  {
    title: "Fashion Editorial",
    description: "Luxury fashion website with elegant motion design.",
    image: maygel,
    url: "https://maygelcoronel.com/",
  },
  {
    title: "Financial Ratings",
    description: "Enterprise platform for credit ratings and market data.",
    image: fitch,
    url: "https://www.fitchratings.com/",
    note: "Benchmark reference",
  },
  {
    title: "Telecom Portal",
    description: "Large-scale consumer service platform.",
    image: au,
    url: "https://www.au.com/",
    note: "Benchmark reference",
  },
];

const Portfolio = () => {
  return (
    <section id="work" className="py-32 border-t border-border">
      <div className="section-container">
        <p className="section-label">Selected Work</p>
        
        <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-16 max-w-xl">
          Production systems across industries
        </h2>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioData.map((project, index) => (
            <PortfolioCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
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
