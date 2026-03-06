import { Mail, ArrowUpRight, Github, Twitter, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/hiroshi-dev-collab" },
    { icon: Twitter, label: "Twitter", href: "#" },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden section-fade" ref={ref}>
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      />
      
      {/* Floating orbs */}
      <motion.div 
        className="absolute top-20 right-20 w-32 h-32 bg-accent/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 20, 0],
          y: [0, -10, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-48 h-48 bg-accent/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <motion.div 
        className="section-container relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.p 
          variants={itemVariants}
          className="section-label"
        >
          {t.contact.title}
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div variants={itemVariants}>
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground mb-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                className="inline-block"
                whileHover={{ scale: 1.02 }}
              >
                {t.contact.heading1}
              </motion.span>{" "}
              <motion.span 
                className="inline-block text-accent"
                whileHover={{ scale: 1.05 }}
                animate={{ 
                  textShadow: [
                    "0 0 20px hsl(var(--accent) / 0)",
                    "0 0 40px hsl(var(--accent) / 0.3)",
                    "0 0 20px hsl(var(--accent) / 0)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {t.contact.heading2}
              </motion.span>{" "}
              <motion.span className="inline-block">{t.contact.heading3}</motion.span>
            </motion.h2>
            <motion.p 
              className="text-muted-foreground leading-relaxed text-lg font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {t.contact.description}
            </motion.p>

            {/* Social links */}
            <motion.div 
              className="flex gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-3 rounded-full border border-border bg-card hover:bg-accent/10 hover:border-accent/50 transition-colors"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <social.icon className="h-5 w-5 text-muted-foreground" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="space-y-4"
          >
            <motion.a 
              href="mailto:hiroshi.seniordev@outlook.com" 
              className="group flex items-center justify-between p-6 glass-card hover:bg-accent/5 overflow-hidden relative"
              whileHover={{ scale: 1.02, x: 8 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Hover glow effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              <div className="flex items-center gap-4 relative z-10">
                <motion.div 
                  className="p-3 rounded-full bg-secondary group-hover:bg-accent/20 transition-colors duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Mail className="h-5 w-5 text-foreground" />
                </motion.div>
                <div>
                  <p className="text-sm text-muted-foreground">{t.contact.email}</p>
                  <p className="text-foreground font-medium">hiroshi.seniordev@outlook.com</p>
                </div>
              </div>
              <motion.div
                initial={{ x: 0, y: 0 }}
                whileHover={{ x: 5, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
              </motion.div>
            </motion.a>

            <motion.a
              href="https://wa.me/18578339756"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 glass-card hover:bg-accent/5 overflow-hidden relative"
              whileHover={{ scale: 1.02, x: 8 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              <div className="flex items-center gap-4 relative z-10">
                <motion.div
                  className="p-3 rounded-full bg-secondary group-hover:bg-accent/20 transition-colors duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <MessageCircle className="h-5 w-5 text-foreground" />
                </motion.div>
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <p className="text-foreground font-medium">+1 (857) 833-9756</p>
                </div>
              </div>
              <motion.div
                initial={{ x: 0, y: 0 }}
                whileHover={{ x: 5, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
              </motion.div>
            </motion.a>

            {/* Animated divider */}
            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

            {/* Availability indicator */}
            <motion.div 
              className="flex items-center gap-3 p-4 rounded-xl bg-accent/5 border border-accent/20 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.div 
                className="w-2 h-2 bg-accent rounded-full"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm text-muted-foreground">{t.contact.available}</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
