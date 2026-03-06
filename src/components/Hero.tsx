 import { ArrowDown, Mail } from "lucide-react";
 import { motion, useScroll, useTransform } from "framer-motion";
 import { useRef } from "react";
import hiroshiPhoto from "@/assets/hiroshi-photo.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
   const { t } = useLanguage();
   const ref = useRef(null);
   const { scrollYProgress } = useScroll({
     target: ref,
     offset: ["start start", "end start"]
   });
 
   // Parallax transforms for different layers
   const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
   const y2 = useTransform(scrollYProgress, [0, 1], [0, -250]);
   const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
   const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
   const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
   const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
 
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  const glowPulse = {
    scale: [1, 1.1, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

   return (
     <section ref={ref} className="min-h-screen flex flex-col justify-center section-container py-24 relative overflow-x-clip overflow-y-visible">
       {/* Parallax background elements */}
       <motion.div 
         className="absolute top-1/4 -left-32 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
         style={{ y: y2, scale }}
         animate={glowPulse}
       />
       <motion.div 
         className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
         style={{ y: y1, rotate }}
         animate={{
           scale: [1, 1.2, 1],
           opacity: [0.2, 0.4, 0.2],
         }}
         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" as const, delay: 1 }}
       />
       
       {/* Large parallax gradient orb */}
       <motion.div 
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/5 via-transparent to-transparent rounded-full pointer-events-none"
         style={{ y: y3, scale, opacity }}
       />
       
       {/* Floating particles with parallax */}
       {[...Array(8)].map((_, i) => {
         const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -50 - i * 30]);
         return (
           <motion.div
             key={i}
             className="absolute w-1.5 h-1.5 bg-accent/30 rounded-full"
             style={{
               top: `${15 + i * 10}%`,
               left: `${5 + i * 12}%`,
               y: parallaxY,
             }}
             animate={{
               y: [0, -20, 0],
               opacity: [0.2, 0.6, 0.2],
               scale: [1, 1.2, 1],
             }}
             transition={{
               duration: 4 + i * 0.5,
               repeat: Infinity,
               ease: "easeInOut" as const,
               delay: i * 0.3
             }}
           />
         );
       })}
       
       {/* Right side floating particles */}
       {[...Array(5)].map((_, i) => {
         const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -80 - i * 20]);
         return (
           <motion.div
             key={`right-${i}`}
             className="absolute w-1 h-1 bg-accent/20 rounded-full"
             style={{
               top: `${25 + i * 15}%`,
               right: `${8 + i * 10}%`,
               y: parallaxY,
             }}
             animate={{
               opacity: [0.1, 0.5, 0.1],
             }}
             transition={{
               duration: 3 + i,
               repeat: Infinity,
               ease: "easeInOut" as const,
               delay: i * 0.4
             }}
           />
         );
       })}

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        <div className="order-2 lg:order-1">
          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-accent text-[11px] tracking-[0.2em] uppercase mb-6 font-medium"
          >
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block w-1.5 h-1.5 bg-accent rounded-full mr-3"
            />
            {t.hero.subtitle}
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-foreground leading-[1.05] mb-4 tracking-[-0.02em]"
          >
            <motion.span
              className="inline-block"
              whileHover={{
                scale: 1.02,
                textShadow: "0 0 40px hsl(var(--accent) / 0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              HokusaiLabs
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="text-sm text-accent/80 tracking-wide mb-8"
          >
            {t.hero.founder}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-xl font-light"
          >
            {t.hero.description}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button 
              onClick={scrollToWork}
              className="btn-primary group"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px hsl(var(--accent) / 0.3)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              {t.hero.viewWork}
              <motion.span
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown className="ml-2 h-4 w-4" />
              </motion.span>
            </motion.button>
            
            <motion.button 
              onClick={scrollToContact}
              className="btn-outline group"
              whileHover={{ scale: 1.05, borderColor: "hsl(var(--accent))" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Mail className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
              {t.hero.contact}
            </motion.button>
          </motion.div>
        </div>
        
         <motion.div 
           initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
           animate={{ opacity: 1, scale: 1, rotate: 0 }}
           transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
           className="order-1 lg:order-2 flex justify-center lg:justify-center"
           style={{ y: y3 }}
         >
          <motion.div
            className="relative m-16"
            animate={floatingAnimation}
          >
            {/* Animated glow rings */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-br from-accent/30 via-accent/10 to-transparent rounded-full blur-2xl"
              animate={glowPulse}
            />
            <motion.div
              className="absolute -inset-8 border border-accent/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -inset-12 border border-accent/10 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />

            <motion.img
              src={hiroshiPhoto}
              alt="Hiroshi Funaoka - Founder of HokusaiLabs"
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border border-accent/20 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)]"
              whileHover={{ scale: 1.05, borderColor: "hsl(var(--accent))" }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2"
        >
          <motion.div 
            className="w-1 h-2 bg-accent rounded-full"
            animate={{ opacity: [0.5, 1, 0.5], y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
