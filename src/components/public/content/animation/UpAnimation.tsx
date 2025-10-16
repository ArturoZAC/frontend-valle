import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface UpAnimationProps {
  duration: number;
  delay: number;
  children: React.ReactNode;
}

const UpAnimation: React.FC<UpAnimationProps> = ({
  duration,
  delay,
  children,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50 }}
      className="h-full"
      animate={isInView ? { y: 0 } : { y: 50 }}
      transition={{ duration, delay, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default UpAnimation;
