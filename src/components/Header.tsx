 import { useState, useEffect } from "react";
 import { motion, AnimatePresence } from "framer-motion";
 import { Menu, X } from "lucide-react";
 
 const navItems = [
   { id: "about", label: "About" },
   { id: "work", label: "Work" },
   { id: "contact", label: "Contact" },
 ];
 
 const Header = () => {
   const [activeSection, setActiveSection] = useState<string>("");
   const [isScrolled, setIsScrolled] = useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
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
 
   const scrollToSection = (id: string) => {
     const element = document.getElementById(id);
     if (element) {
       element.scrollIntoView({ behavior: "smooth" });
     }
     setIsMobileMenuOpen(false);
   };
 
   const scrollToTop = () => {
     window.scrollTo({ top: 0, behavior: "smooth" });
     setIsMobileMenuOpen(false);
   };
 
   return (
     <motion.header
       initial={{ y: -100 }}
       animate={{ y: 0 }}
       transition={{ duration: 0.6, ease: "easeOut" }}
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
             className="text-xl md:text-2xl font-medium text-foreground hover:text-accent transition-colors"
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
           >
             <span className="bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
               Hiroshi
             </span>
           </motion.button>
 
           {/* Desktop Navigation */}
           <div className="hidden md:flex items-center gap-1">
             {navItems.map((item, index) => (
               <motion.button
                 key={item.id}
                 onClick={() => scrollToSection(item.id)}
                 initial={{ opacity: 0, y: -20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.4, delay: index * 0.1 }}
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
                     className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full"
                     transition={{ type: "spring", stiffness: 300, damping: 30 }}
                   />
                 )}
               </motion.button>
             ))}
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
             </div>
           </motion.div>
         )}
       </AnimatePresence>
     </motion.header>
   );
 };
 
 export default Header;