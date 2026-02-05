 import { motion, useInView, Variants } from "framer-motion";
 import { useRef, ReactNode } from "react";
 
 type TransitionType = "fade" | "slideUp" | "slideLeft" | "slideRight" | "scale" | "reveal";
 
 interface AnimatedSectionProps {
   children: ReactNode;
   className?: string;
   transition?: TransitionType;
   delay?: number;
   duration?: number;
   once?: boolean;
 }
 
 const transitionVariants: Record<TransitionType, Variants> = {
   fade: {
     hidden: { opacity: 0 },
     visible: { opacity: 1 },
   },
   slideUp: {
     hidden: { opacity: 0, y: 80 },
     visible: { opacity: 1, y: 0 },
   },
   slideLeft: {
     hidden: { opacity: 0, x: -80 },
     visible: { opacity: 1, x: 0 },
   },
   slideRight: {
     hidden: { opacity: 0, x: 80 },
     visible: { opacity: 1, x: 0 },
   },
   scale: {
     hidden: { opacity: 0, scale: 0.9 },
     visible: { opacity: 1, scale: 1 },
   },
   reveal: {
     hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
     visible: { opacity: 1, y: 0, filter: "blur(0px)" },
   },
 };
 
 const AnimatedSection = ({
   children,
   className = "",
   transition = "slideUp",
   delay = 0,
   duration = 0.7,
   once = true,
 }: AnimatedSectionProps) => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once, margin: "-100px" });
 
   return (
     <motion.div
       ref={ref}
       initial="hidden"
       animate={isInView ? "visible" : "hidden"}
       variants={transitionVariants[transition]}
       transition={{
         duration,
         delay,
         ease: [0.25, 0.1, 0.25, 1],
       }}
       className={className}
     >
       {children}
     </motion.div>
   );
 };
 
 export default AnimatedSection;