import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-12 border-t border-border"
    >
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-foreground font-medium">Hiroshi</p>
            <p className="text-sm text-muted-foreground">Software Developer · Japan</p>
          </div>
          
          <div className="flex items-center gap-6">
            <motion.a 
              href="#work" 
              className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              Work
            </motion.a>
            <motion.a 
              href="#about" 
              className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              About
            </motion.a>
            <motion.a 
              href="#contact" 
              className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              Contact
            </motion.a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
