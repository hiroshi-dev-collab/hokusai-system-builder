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
     <section ref={ref} className="min-h-screen flex flex-col justify-center section-container pt-0 pb-24 -mt-16 md:-mt-20 relative overflow-x-clip overflow-y-visible">
       {/* Enhanced bokeh orbs with parallax - depth layer 1 (far) */}
       <motion.div
         className="absolute top-1/4 -left-20 w-80 h-80 rounded-full blur-[80px]"
         style={{ y: y2, scale, background: "radial-gradient(circle, hsl(var(--accent) / 0.12) 0%, transparent 70%)" }}
         animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" as const }}
       />
       <motion.div
         className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full blur-[100px]"
         style={{ y: y1, rotate, background: "radial-gradient(circle, hsl(225 40% 30% / 0.08) 0%, transparent 70%)" }}
         animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" as const, delay: 1 }}
       />

       {/* Large parallax gradient orb */}
       <motion.div
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none blur-[60px]"
         style={{ y: y3, scale, opacity, background: "radial-gradient(circle, hsl(var(--accent) / 0.06) 0%, transparent 60%)" }}
       />

       {/* Bokeh particles - depth layer 2 (mid, large soft) */}
       {[
         { top: "10%", left: "8%", size: 120, color: "accent", opacity: [0.08, 0.18, 0.08], duration: 9, delay: 0 },
         { top: "30%", left: "75%", size: 160, color: "accent", opacity: [0.05, 0.12, 0.05], duration: 12, delay: 2 },
         { top: "60%", left: "15%", size: 100, color: "200 40% 50%", opacity: [0.04, 0.1, 0.04], duration: 10, delay: 4 },
         { top: "80%", left: "60%", size: 140, color: "accent", opacity: [0.06, 0.15, 0.06], duration: 11, delay: 1 },
         { top: "45%", left: "85%", size: 90, color: "260 30% 50%", opacity: [0.04, 0.08, 0.04], duration: 8, delay: 3 },
       ].map((orb, i) => {
         const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -40 - i * 25]);
         return (
           <motion.div
             key={`bokeh-${i}`}
             className="absolute rounded-full"
             style={{
               top: orb.top,
               left: orb.left,
               width: orb.size,
               height: orb.size,
               y: parallaxY,
               background: `radial-gradient(circle, hsl(var(--${orb.color}) / 0.3) 0%, transparent 70%)`,
               filter: `blur(${orb.size / 3}px)`,
             }}
             animate={{
               opacity: orb.opacity,
               scale: [1, 1.3, 1],
               y: [0, -15, 0],
             }}
             transition={{
               duration: orb.duration,
               repeat: Infinity,
               ease: "easeInOut" as const,
               delay: orb.delay,
             }}
           />
         );
       })}

       {/* Bokeh particles - depth layer 3 (near, small crisp) */}
       {[
         { top: "20%", left: "12%", size: 6, speed: -60 },
         { top: "35%", left: "30%", size: 4, speed: -80 },
         { top: "50%", left: "55%", size: 5, speed: -50 },
         { top: "15%", left: "70%", size: 3, speed: -90 },
         { top: "65%", left: "20%", size: 4, speed: -70 },
         { top: "75%", left: "80%", size: 5, speed: -55 },
         { top: "40%", left: "90%", size: 3, speed: -85 },
       ].map((dot, i) => {
         const parallaxY = useTransform(scrollYProgress, [0, 1], [0, dot.speed]);
         return (
           <motion.div
             key={`dot-${i}`}
             className="absolute rounded-full bg-accent/25"
             style={{
               top: dot.top,
               left: dot.left,
               width: dot.size,
               height: dot.size,
               y: parallaxY,
             }}
             animate={{
               opacity: [0.15, 0.5, 0.15],
               scale: [1, 1.4, 1],
             }}
             transition={{
               duration: 4 + i * 0.7,
               repeat: Infinity,
               ease: "easeInOut" as const,
               delay: i * 0.5,
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
