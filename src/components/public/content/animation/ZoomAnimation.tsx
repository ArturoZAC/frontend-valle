import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ZoomAnimationProps {
  duration: number;
  delay: number;
  children: React.ReactNode;
}

const ZoomAnimation: React.FC<ZoomAnimationProps> = ({
  duration,
  delay,
  children,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0 }}
      animate={isInView ? { scale: 1 } : { scale: 0 }}
      transition={{ duration, delay, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default ZoomAnimation;
