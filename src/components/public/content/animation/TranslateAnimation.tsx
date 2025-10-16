import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TranslateAnimationProps {
  duration: number;
  delay: number;
  direction: "left" | "right";
  children: React.ReactNode;
}

const TranslateAnimation: React.FC<TranslateAnimationProps> = ({
  duration,
  delay,
  direction,
  children,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const initialX = direction === "left" ? -300 : 300;

  return (
    <motion.div
      ref={ref}
      className="w-full h-fit"
      initial={{ x: initialX, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : { x: initialX, opacity: 0 }}
      transition={{ duration, delay, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default TranslateAnimation;
