import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function FadeAnimation({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true,  // Trigger animation only once
    threshold: 0.1,     // Trigger when 10% of the component is visible
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1.0 }} // Adjust the duration as needed
    >
      {children}
    </motion.div>
  );
}

export default FadeAnimation;
