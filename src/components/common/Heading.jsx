import { h2 } from 'framer-motion/client'
import React from 'react'
import { motion } from 'framer-motion';

function Heading({ headingText, className = '', ...animationProps }) {
    return (
        <motion.h2
            className={`font-jakarta font-semibold text-[56px] mb-[56px] max-sm:text-[50px] ${className}`} {...animationProps}>
            {headingText}
        </motion.h2>
    );
  }

export default Heading