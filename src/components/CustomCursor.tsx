 import { useEffect, useState } from "react";
 import { motion, useSpring, useMotionValue } from "framer-motion";
 
 const CustomCursor = () => {
   const [isHovering, setIsHovering] = useState(false);
   const [isClicking, setIsClicking] = useState(false);
   const [isVisible, setIsVisible] = useState(false);
 
   const cursorX = useMotionValue(-100);
   const cursorY = useMotionValue(-100);
 
   const springConfig = { damping: 25, stiffness: 400 };
   const cursorXSpring = useSpring(cursorX, springConfig);
   const cursorYSpring = useSpring(cursorY, springConfig);
 
   useEffect(() => {
     // Hide on touch devices
     const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
     if (isTouchDevice) return;
 
     const moveCursor = (e: MouseEvent) => {
       cursorX.set(e.clientX);
       cursorY.set(e.clientY);
       setIsVisible(true);
     };
 
     const handleMouseDown = () => setIsClicking(true);
     const handleMouseUp = () => setIsClicking(false);
 
     const handleMouseEnter = (e: MouseEvent) => {
       const target = e.target as HTMLElement;
       if (
         target.tagName === 'A' ||
         target.tagName === 'BUTTON' ||
         target.closest('a') ||
         target.closest('button') ||
         target.classList.contains('cursor-pointer') ||
         target.closest('.cursor-pointer')
       ) {
         setIsHovering(true);
       }
     };
 
     const handleMouseLeave = () => {
       setIsHovering(false);
     };
 
     const handleMouseOut = () => {
       setIsVisible(false);
     };
 
     window.addEventListener('mousemove', moveCursor);
     window.addEventListener('mousedown', handleMouseDown);
     window.addEventListener('mouseup', handleMouseUp);
     window.addEventListener('mouseout', handleMouseOut);
     document.addEventListener('mouseover', handleMouseEnter);
     document.addEventListener('mouseout', handleMouseLeave);
 
     return () => {
       window.removeEventListener('mousemove', moveCursor);
       window.removeEventListener('mousedown', handleMouseDown);
       window.removeEventListener('mouseup', handleMouseUp);
       window.removeEventListener('mouseout', handleMouseOut);
       document.removeEventListener('mouseover', handleMouseEnter);
       document.removeEventListener('mouseout', handleMouseLeave);
     };
   }, [cursorX, cursorY]);
 
   // Hide on mobile/touch devices
   if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
     return null;
   }
 
   return (
     <>
       {/* Main cursor dot */}
       <motion.div
         className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
         style={{
           x: cursorXSpring,
           y: cursorYSpring,
         }}
       >
         <motion.div
           className="relative -translate-x-1/2 -translate-y-1/2"
           animate={{
             scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
             opacity: isVisible ? 1 : 0,
           }}
           transition={{ duration: 0.15 }}
         >
           <div className="w-3 h-3 bg-white rounded-full" />
         </motion.div>
       </motion.div>
 
       {/* Cursor ring */}
       <motion.div
         className="fixed top-0 left-0 pointer-events-none z-[9998]"
         style={{
           x: cursorXSpring,
           y: cursorYSpring,
         }}
       >
         <motion.div
           className="relative -translate-x-1/2 -translate-y-1/2"
           animate={{
             scale: isClicking ? 0.9 : isHovering ? 1.8 : 1,
             opacity: isVisible ? (isHovering ? 0.8 : 0.4) : 0,
           }}
           transition={{ duration: 0.2, ease: "easeOut" }}
         >
           <div className="w-8 h-8 border border-accent rounded-full" />
         </motion.div>
       </motion.div>
 
       {/* Trailing particles on hover */}
       {isHovering && (
         <motion.div
           className="fixed top-0 left-0 pointer-events-none z-[9997]"
           style={{
             x: cursorXSpring,
             y: cursorYSpring,
           }}
         >
           <motion.div
             className="relative -translate-x-1/2 -translate-y-1/2"
             initial={{ scale: 0, opacity: 0 }}
             animate={{ scale: 2.5, opacity: 0 }}
             transition={{ duration: 0.6, repeat: Infinity }}
           >
             <div className="w-8 h-8 border border-accent/50 rounded-full" />
           </motion.div>
         </motion.div>
       )}
     </>
   );
 };
 
 export default CustomCursor;