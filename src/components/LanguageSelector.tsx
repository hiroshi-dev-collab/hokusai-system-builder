import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage, languages } from "@/contexts/LanguageContext";

interface LanguageSelectorProps {
  variant?: "desktop" | "mobile";
}

const LanguageSelector = ({ variant = "desktop" }: LanguageSelectorProps) => {
  const { language, setLanguage, currentMeta } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (variant === "mobile") {
    return (
      <div className="flex flex-col gap-1">
        <span className="px-4 py-2 text-xs font-medium uppercase tracking-wider text-muted-foreground/60">
          Language
        </span>
        {languages.map((lang) => {
          const Flag = lang.flag;
          return (
            <motion.button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={`flex items-center gap-3 px-4 py-3 text-left text-base font-medium rounded-lg transition-colors ${
                language === lang.code
                  ? "text-accent bg-accent/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
              whileTap={{ scale: 0.97 }}
            >
              <Flag />
              <span>{lang.label}</span>
            </motion.button>
          );
        })}
      </div>
    );
  }

  const CurrentFlag = currentMeta.flag;

  return (
    <div ref={ref} className="relative">
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-secondary/50 hover:bg-secondary text-sm font-medium text-foreground transition-colors"
      >
        <CurrentFlag />
        <span className="uppercase text-xs tracking-wide">{currentMeta.code}</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute right-0 mt-2 w-40 bg-background/95 backdrop-blur-xl border border-border rounded-xl shadow-xl overflow-hidden"
          >
            {languages.map((lang) => {
              const Flag = lang.flag;
              return (
                <motion.button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setOpen(false);
                  }}
                  whileHover={{ x: 4 }}
                  className={`flex items-center gap-3 w-full px-4 py-2.5 text-sm transition-colors ${
                    language === lang.code
                      ? "text-accent bg-accent/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                  }`}
                >
                  <Flag />
                  <span className="font-medium">{lang.label}</span>
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;
