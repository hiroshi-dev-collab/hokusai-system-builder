import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";
 
 const Header = () => {
  const { t } = useLanguage();
  const navItems = [
    { id: "about", label: t.nav.about },
    { id: "work", label: t.nav.work },
    { id: "contact", label: t.nav.contact },
  ];
  const [activeSection, setActiveSection] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
 
   useEffect(() => {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 50);
 
       // Find active section
       const sections = navItems.map((item) => document.getElementById(item.id));
       const scrollPosition = window.scrollY + 100;
 
       for (let i = sections.length - 1; i >= 0; i--) {
         const section = sections[i];
         if (section && section.offsetTop <= scrollPosition) {
           setActiveSection(navItems[i].id);
           return;
         }
       }
       setActiveSection("");
     };
 
     window.addEventListener("scroll", handleScroll);
     handleScroll();
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);
 
   const { scrollYProgress } = useScroll();
   const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [0.95, 1]);
 
   const scrollToSection = useCallback((id: string) => {
     const element = document.getElementById(id);
     if (element) {
       element.scrollIntoView({ behavior: "smooth" });
     }
     setIsMobileMenuOpen(false);
   }, []);
 
   const scrollToTop = useCallback(() => {
     window.scrollTo({ top: 0, behavior: "smooth" });
     setIsMobileMenuOpen(false);
   }, []);
 
   return (
     <motion.header
       initial={{ y: -100, opacity: 0 }}
       animate={{ y: 0, opacity: 1 }}
       transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
       style={{ opacity: headerOpacity }}
       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
         isScrolled
           ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg"
           : "bg-transparent"
       }`}
     >
       <div className="section-container">
         <nav className="flex items-center justify-between h-16 md:h-20">
           {/* Logo */}
           <motion.button
             onClick={scrollToTop}
             className="text-xl md:text-2xl font-serif font-medium text-foreground hover:text-accent transition-colors"
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
           >
             <span className="bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
               Hiroshi Funaoka
             </span>
           </motion.button>
 
          {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  initial={{ opacity: 0, y: -20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.3 + index * 0.1,
                    ease: [0.25, 0.1, 0.25, 1] as const
                  }}
                  whileHover={{ y: -2 }}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-accent to-accent/50 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}

              {/* Language Selector */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.55 }}
              >
                <LanguageSelector />
              </motion.div>

              {/* Theme Toggle */}
              <motion.button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-secondary/50 hover:bg-secondary text-foreground transition-colors"
                aria-label="Toggle theme"
              >
                {mounted && (
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={theme}
                      initial={{ y: -20, opacity: 0, rotate: -90 }}
                      animate={{ y: 0, opacity: 1, rotate: 0 }}
                      exit={{ y: 20, opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                    </motion.div>
                  </AnimatePresence>
                )}
              </motion.button>
            </div>
 
           {/* Mobile Menu Button */}
           <motion.button
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             className="md:hidden p-2 text-foreground"
             whileTap={{ scale: 0.9 }}
           >
             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
           </motion.button>
         </nav>
       </div>
 
       {/* Mobile Menu */}
       <AnimatePresence>
         {isMobileMenuOpen && (
           <motion.div
             initial={{ opacity: 0, height: 0 }}
             animate={{ opacity: 1, height: "auto" }}
             exit={{ opacity: 0, height: 0 }}
             transition={{ duration: 0.3 }}
             className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border overflow-hidden"
           >
             <div className="section-container py-4 flex flex-col gap-2">
               {navItems.map((item, index) => (
                 <motion.button
                   key={item.id}
                   onClick={() => scrollToSection(item.id)}
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.3, delay: index * 0.1 }}
                   className={`px-4 py-3 text-left text-base font-medium rounded-lg transition-colors ${
                     activeSection === item.id
                       ? "text-accent bg-accent/10"
                       : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                   }`}
                 >
                   {item.label}
                  </motion.button>
                ))}

                {/* Mobile Theme Toggle */}
                <motion.button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="flex items-center gap-3 px-4 py-3 text-left text-base font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                >
                  {mounted && (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
                 <span>{theme === "dark" ? t.nav.lightMode : t.nav.darkMode}</span>
                 </motion.button>

                 {/* Mobile Language Selector */}
                 <LanguageSelector variant="mobile" />
               </div>
            </motion.div>
          )}
       </AnimatePresence>
     </motion.header>
   );
 };
 
 export default Header;