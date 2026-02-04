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
          className="portfolio-card overflow-hidden relative"
          whileHover={{ y: -12, scale: 1.02 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Glow effect on hover */}
          <motion.div 
            className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
          />

          {/* Image Container with Scroll Effect */}
          <div className="relative overflow-hidden bg-secondary/50">
            {/* Loading skeleton with shimmer */}
            {!imageLoaded && !imageError && (
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-secondary"
                animate={{ 
                  backgroundPosition: ["200% 0", "-200% 0"]
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{ backgroundSize: "200% 100%" }}
              />
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
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </div>

            {/* Hover overlay with gradient */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            
            {/* Floating action button */}
            {url && (
              <motion.div 
                className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100"
                initial={{ scale: 0, rotate: -45 }}
                whileHover={{ scale: 1.2, rotate: 0 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-lg"
                  whileHover={{ boxShadow: "0 10px 30px hsl(var(--accent) / 0.4)" }}
                >
                  <ArrowUpRight className="h-5 w-5 text-accent-foreground" />
                </motion.div>
              </motion.div>
            )}

            {/* Shine effect on hover */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
            />
          </div>
          
          {/* Content */}
          <motion.div 
            className="p-5"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-start justify-between gap-3">
              <motion.h3 
                className="text-base font-medium text-foreground group-hover:text-accent transition-colors duration-300"
              >
                {title}
              </motion.h3>
              {url && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 0 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="group-hover:opacity-100 transition-all duration-300"
                >
                  <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                </motion.div>
              )}
            </div>
            
            <motion.p 
              className="text-muted-foreground text-sm mt-2 leading-relaxed line-clamp-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {description}
            </motion.p>
            
            {note && (
              <motion.span 
                className="inline-block mt-3 px-2 py-1 text-xs text-accent/80 bg-accent/10 rounded-full border border-accent/20"
                whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--accent) / 0.2)" }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                {note}
              </motion.span>
            )}
          </motion.div>
        </motion.div>
      </CardWrapper>
    </motion.div>
  );
};

export default PortfolioCard;
