import { ExternalLink, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  url?: string;
  note?: string;
  index: number;
}

const PortfolioCard = ({ title, description, image, url, note, index }: PortfolioCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const CardWrapper = url ? 'a' : 'div';
  const cardProps = url ? { 
    href: url, 
    target: "_blank", 
    rel: "noopener noreferrer" 
  } : {};

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: index * 0.08,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="group"
    >
      <CardWrapper {...cardProps} className="block">
        <motion.div 
          className="portfolio-card overflow-hidden"
          whileHover={{ y: -8 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Image Container with Scroll Effect */}
          <div className="relative overflow-hidden bg-secondary/50">
            {/* Loading skeleton */}
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 bg-secondary animate-pulse" />
            )}
            
            {/* Image with scroll-on-hover effect for full page preview */}
            <div className="relative h-[280px] overflow-hidden">
              <motion.img 
                src={image} 
                alt={title}
                className={`w-full object-cover object-top transition-all duration-[2s] ease-out group-hover:object-bottom ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ 
                  minHeight: '100%',
                  objectFit: 'cover'
                }}
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />
            </div>

            {/* Hover overlay with gradient */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            
            {/* Floating action button */}
            {url && (
              <motion.div 
                className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                initial={{ scale: 0.8, y: 10 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <ArrowUpRight className="h-5 w-5 text-accent-foreground" />
                </div>
              </motion.div>
            )}
          </div>
          
          {/* Content */}
          <div className="p-5">
            <div className="flex items-start justify-between gap-3">
              <motion.h3 
                className="text-base font-medium text-foreground group-hover:text-accent transition-colors duration-300"
              >
                {title}
              </motion.h3>
              {url && (
                <motion.div
                  initial={{ opacity: 0, x: -5 }}
                  whileHover={{ x: 2, y: -2 }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                </motion.div>
              )}
            </div>
            
            <p className="text-muted-foreground text-sm mt-2 leading-relaxed line-clamp-2">
              {description}
            </p>
            
            {note && (
              <motion.span 
                className="inline-block mt-3 px-2 py-1 text-xs text-accent/80 bg-accent/10 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                {note}
              </motion.span>
            )}
          </div>
        </motion.div>
      </CardWrapper>
    </motion.div>
  );
};

export default PortfolioCard;
