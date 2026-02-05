 import { motion, AnimatePresence } from "framer-motion";
 import Header from "@/components/Header";
 import Hero from "@/components/Hero";
 import About from "@/components/About";
 import Portfolio from "@/components/Portfolio";
 import Contact from "@/components/Contact";
 import Footer from "@/components/Footer";
 
 const pageTransition = {
   initial: { opacity: 0 },
   animate: { 
     opacity: 1,
     transition: {
       duration: 0.5,
       ease: [0.25, 0.1, 0.25, 1] as const,
       staggerChildren: 0.15,
     }
   },
   exit: { 
     opacity: 0,
     transition: { duration: 0.3 }
   }
 };
 
 const sectionTransition = {
   initial: { opacity: 0, y: 40 },
   animate: { 
     opacity: 1, 
     y: 0,
     transition: {
       duration: 0.8,
       ease: [0.25, 0.1, 0.25, 1] as const
     }
   }
 };

const Index = () => {
  return (
     <AnimatePresence mode="wait">
       <motion.main 
         className="min-h-screen bg-background pt-16 md:pt-20"
         variants={pageTransition}
         initial="initial"
         animate="animate"
         exit="exit"
       >
         <Header />
         <motion.div variants={sectionTransition}>
           <Hero />
         </motion.div>
         <motion.div variants={sectionTransition}>
           <About />
         </motion.div>
         <motion.div variants={sectionTransition}>
           <Portfolio />
         </motion.div>
         <motion.div variants={sectionTransition}>
           <Contact />
         </motion.div>
         <motion.div variants={sectionTransition}>
           <Footer />
         </motion.div>
       </motion.main>
     </AnimatePresence>
  );
};

export default Index;
