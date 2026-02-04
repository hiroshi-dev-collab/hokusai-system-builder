import { ExternalLink } from "lucide-react";

interface PortfolioItem {
  type: "link" | "case-study";
  title: string;
  url?: string;
}

interface PortfolioSectionProps {
  title: string;
  description: string;
  items: PortfolioItem[];
  note?: string;
}

const PortfolioSection = ({ title, description, items, note }: PortfolioSectionProps) => {
  return (
    <div className="portfolio-card">
      <h3 className="text-lg font-semibold text-foreground mb-3">
        {title}
      </h3>
      
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>
      
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index}>
            {item.type === "link" && item.url ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-link inline-flex items-center gap-1.5 text-sm"
              >
                {item.title}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ) : (
              <div className="text-sm text-foreground">
                {item.title}
              </div>
            )}
          </div>
        ))}
      </div>
      
      {note && (
        <p className="mt-4 pt-4 border-t border-border text-xs text-muted-foreground italic">
          {note}
        </p>
      )}
    </div>
  );
};

export default PortfolioSection;
