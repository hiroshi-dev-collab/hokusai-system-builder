import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: i * 0.1 }
    })
  };

  const links = [
    { href: "#work", label: t.nav.work },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact }
  ];

  return (
    <motion.footer 
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="py-16 relative overflow-hidden"
    >
      {/* Subtle gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      />

      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.p 
              className="text-foreground font-serif font-medium text-lg"
              whileHover={{ scale: 1.02 }}
            >
              HokusaiLabs
            </motion.p>
            <p className="text-sm text-muted-foreground">{t.footer.role}</p>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-8"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {links.map((link, i) => (
              <motion.a 
                key={link.label}
                href={link.href} 
                className="text-muted-foreground hover:text-accent text-sm transition-colors duration-300 relative group"
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ y: -2 }}
              >
                {link.label}
                <motion.span 
                  className="absolute -bottom-1 left-0 w-full h-px bg-accent origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-6"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-sm text-muted-foreground">
              © 2025
            </p>
            
            {/* Back to top button */}
            <motion.button
              onClick={scrollToTop}
              className="p-2 rounded-full border border-border bg-card hover:bg-accent/10 hover:border-accent/50 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="h-4 w-4 text-muted-foreground" />
            </motion.button>
          </motion.div>
        </div>

        {/* Animated line decoration */}
        <motion.div 
          className="mt-12 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        />

        {/* Large decorative text */}
        <motion.div 
          className="mt-8 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.03 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.p 
            className="text-6xl md:text-8xl font-bold text-foreground text-center select-none"
            animate={{ x: [0, -50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {t.footer.decorative}
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
