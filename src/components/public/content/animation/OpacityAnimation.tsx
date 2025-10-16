import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TranslateAnimationProps {
  duration: number;
  delay: number;
  children: React.ReactNode;
}

const OpacityAnimation: React.FC<TranslateAnimationProps> = ({
  duration,
  delay,
  children,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration, delay, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default OpacityAnimation;
