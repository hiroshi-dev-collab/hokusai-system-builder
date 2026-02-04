import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 border-t border-border" ref={ref}>
      <div className="section-container">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label"
        >
          About
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed">
              Software developer with hands-on experience delivering production systems across SaaS, AI, ERP, and enterprise domains.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-muted-foreground leading-relaxed"
          >
            <p>
              Based in Japan, building and maintaining complex integrations including payment terminals, QR payments, and accounting systems. Developing modern platforms with scalable architecture and AI-powered workflows.
            </p>
            
            <p>
              Experienced in both web and mobile development, creating responsive applications that work seamlessly across all devices. Focused on production reliability, clear architecture, and business impact.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 pt-12 border-t border-border"
        >
          <p className="section-label">Focus Areas</p>
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
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--accent) / 0.2)" }}
                className="skill-tag cursor-default"
              >
                {area}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
