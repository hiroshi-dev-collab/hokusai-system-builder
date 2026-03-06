import { motion, useScroll, useTransform } from "framer-motion";

const AmbientBackground = () => {
  const { scrollYProgress } = useScroll();

  // Scroll-reactive glow position
  const glowY = useTransform(scrollYProgress, [0, 1], ["10%", "80%"]);
  const glowX = useTransform(scrollYProgress, [0, 0.5, 1], ["20%", "70%", "30%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.15, 0.25, 0.2, 0.1]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Gradient Mesh - Animated color blobs */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(circle, hsl(var(--accent) / 0.08) 0%, transparent 70%)",
          top: glowY,
          left: glowX,
          opacity: glowOpacity,
        }}
      />

      {/* Static mesh layers */}
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[100px]"
        style={{
          background: "radial-gradient(circle, hsl(225 40% 20% / 0.15) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full blur-[100px]"
        style={{
          background: "radial-gradient(circle, hsl(36 50% 50% / 0.04) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />

      <motion.div
        className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full blur-[80px]"
        style={{
          background: "radial-gradient(circle, hsl(260 30% 20% / 0.06) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 8 }}
      />

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 noise-overlay" />
    </div>
  );
};

export default AmbientBackground;
