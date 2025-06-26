import React from 'react'
import { motion } from 'framer-motion'

function Subheading({ className = '', ...animationProps }) {
    return (
        <motion.p className={`font-jakarta font-normal text-[18px] max-sm:text-base leading-[160%] ${className} `} {...animationProps} >
            Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade
        </motion.p>
    )
}

export default Subheading