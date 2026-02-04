import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  url?: string;
  note?: string;
  index: number;
}

const PortfolioCard = ({ title, description, image, url, note, index }: PortfolioCardProps) => {
  const CardWrapper = url ? 'a' : 'div';
  const cardProps = url ? { 
    href: url, 
    target: "_blank", 
    rel: "noopener noreferrer" 
  } : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <CardWrapper {...cardProps} className="portfolio-card group block">
        <div className="overflow-hidden relative">
          <motion.img 
            src={image} 
            alt={title}
            className="portfolio-image"
            loading="lazy"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          {url && (
            <motion.div 
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent flex items-end justify-center pb-6"
            >
              <span className="text-sm text-foreground flex items-center gap-2">
                Visit Site <ExternalLink className="h-4 w-4" />
              </span>
            </motion.div>
          )}
        </div>
        
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors duration-300">
              {title}
            </h3>
            {url && (
              <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0 mt-1 group-hover:translate-x-1 group-hover:-translate-y-1" />
            )}
          </div>
          
          <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
            {description}
          </p>
          
          {note && (
            <p className="text-xs text-muted-foreground/60 mt-4 italic">
              {note}
            </p>
          )}
        </div>
      </CardWrapper>
    </motion.div>
  );
};

export default PortfolioCard;
