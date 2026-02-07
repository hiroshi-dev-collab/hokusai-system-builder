import { useEffect, useState, useCallback } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [label, setLabel] = useState("");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 500 };
  const trailConfig = { damping: 20, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const trailXSpring = useSpring(cursorX, trailConfig);
  const trailYSpring = useSpring(cursorY, trailConfig);

  const getLabel = useCallback((target: HTMLElement): string => {
    const el = target.closest("a") || target.closest("button") || target.closest(".cursor-pointer");
    if (!el) return "";
    if (el.tagName === "A") return "View";
    if (el.tagName === "BUTTON") return "Click";
    return "Select";
  }, []);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.tagName === 'A' || target.tagName === 'BUTTON' ||
        target.closest('a') || target.closest('button') ||
        target.classList.contains('cursor-pointer') || target.closest('.cursor-pointer');
      if (interactive) {
        setIsHovering(true);
        setLabel(getLabel(target));
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const related = e.relatedTarget as HTMLElement | null;
      if (!related || !(
        related.tagName === 'A' || related.tagName === 'BUTTON' ||
        related.closest?.('a') || related.closest?.('button') ||
        related.classList?.contains('cursor-pointer') || related.closest?.('.cursor-pointer')
      )) {
        setIsHovering(false);
        setLabel("");
      }
    };

    const handleWindowOut = () => setIsVisible(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseout', handleWindowOut);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseout', handleWindowOut);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [cursorX, cursorY, getLabel]);

  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <>
      {/* Main dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: cursorXSpring, y: cursorYSpring }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isClicking ? 0.5 : isHovering ? 0.6 : 1,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.12, ease: "easeOut" }}
        >
          <div className="w-2 h-2 bg-white rounded-full" />
        </motion.div>
      </motion.div>

      {/* Label ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ x: trailXSpring, y: trailYSpring }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
          animate={{
            width: isHovering ? 72 : 28,
            height: isHovering ? 72 : 28,
            opacity: isVisible ? 1 : 0,
            borderWidth: isHovering ? 1.5 : 1,
          }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            borderRadius: "9999px",
            borderStyle: "solid",
            borderColor: "hsl(var(--accent))",
          }}
        >
          <AnimatePresence>
            {isHovering && label && (
              <motion.span
                className="text-[10px] font-medium tracking-widest uppercase text-accent select-none"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
              >
                {label}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </>
  );
};

export default CustomCursor;
