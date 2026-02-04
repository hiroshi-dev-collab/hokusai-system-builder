import { ExternalLink } from "lucide-react";

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  url?: string;
  note?: string;
}

const PortfolioCard = ({ title, description, image, url, note }: PortfolioCardProps) => {
  const CardWrapper = url ? 'a' : 'div';
  const cardProps = url ? { 
    href: url, 
    target: "_blank", 
    rel: "noopener noreferrer" 
  } : {};

  return (
    <CardWrapper {...cardProps} className="portfolio-card group block">
      <div className="overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="portfolio-image"
          loading="lazy"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-medium text-foreground group-hover:text-foreground/80 transition-colors">
            {title}
          </h3>
          {url && (
            <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
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
  );
};

export default PortfolioCard;
