import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.03 }
    })
  };

  const titleText = "About";

  return (
    <section id="about" className="py-32 border-t border-border relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <motion.div 
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-accent/5 to-transparent rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.5 }}
      />
      
      <div className="section-container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Animated title */}
          <motion.p className="section-label flex">
            {titleText.split("").map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </motion.p>
          
          <div className="grid md:grid-cols-2 gap-16 mt-8">
            <motion.div variants={itemVariants}>
              <motion.p 
                className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed"
                initial={{ backgroundPosition: "200%" }}
                whileInView={{ backgroundPosition: "0%" }}
                transition={{ duration: 1.5 }}
                style={{
                  backgroundImage: "linear-gradient(90deg, hsl(var(--foreground)) 50%, hsl(var(--muted-foreground)) 50%)",
                  backgroundSize: "200%",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                }}
              >
                Software developer with hands-on experience delivering production systems across SaaS, AI, ERP, and enterprise domains.
              </motion.p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="space-y-6 text-muted-foreground leading-relaxed"
            >
              <motion.p
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                Based in Japan, building and maintaining complex integrations including payment terminals, QR payments, and accounting systems. Developing modern platforms with scalable architecture and AI-powered workflows.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                Experienced in both web and mobile development, creating responsive applications that work seamlessly across all devices. Focused on production reliability, clear architecture, and business impact.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50, scaleX: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 pt-12 border-t border-border"
        >
          <motion.p 
            className="section-label"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Focus Areas
          </motion.p>
          
          <div className="flex flex-wrap gap-3 mt-6">
            {[
              "SaaS Platforms",
              "AI Applications",
              "Mobile Development",
              "ERP Integrations",
              "Payment Systems",
              "Data Dashboards",
              "Enterprise Solutions"
            ].map((area, index) => (
              <motion.span 
                key={area} 
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.1 + index * 0.08,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "hsl(var(--accent) / 0.25)",
                  y: -3,
                  boxShadow: "0 10px 30px -10px hsl(var(--accent) / 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="skill-tag cursor-default"
              >
                {area}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Decorative line */}
        <motion.div 
          className="absolute bottom-0 left-1/2 w-px h-32 bg-gradient-to-b from-accent/50 to-transparent"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ originY: 0 }}
        />
      </div>
    </section>
  );
};

export default About;
