import React from 'react'
import { whatWeDo } from '../utils/helper'
import { motion } from 'framer-motion'

function WhatWeDo() {
    return (
        <div className='mb-[140px] overflow-hidden '>
            <div className='max-w-[1140px] mx-auto px-3 '>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }} className='font-jakarta font-semibold text-[56px] text-center mb-[56px] '>
                    What We Do?
                </motion.h2>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        visible: {
                            transition: { staggerChildren: 0.2 },
                        },
                    }} className='grid grid-cols-3 gap-6'>
                    {whatWeDo.map((items, index) => (
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, scale: 0.9 },
                                visible: { opacity: 1, scale: 1 },
                            }}
                            transition={{ duration: 0.5, ease: "easeOut" }} key={index} className='p-6 border border-[#E0E0E0] rounded-[24px] hover:shadow hover:border-0 transition-all duration-150 '>
                            <img src={items.image} alt="image" className='w-full mb-6' />

                            <h3 className='font-jakarta font-semibold text-2xl mb-3 '>
                                {items.heading}
                            </h3>

                            <p className='font-jakarta font-normal text-base mb-6 '>
                                {items.content}
                            </p>

                            <a href="" className='font-jakarta font-semibold text-base text-[#FF0000] flex gap-[10px] items-center'>
                                {items.more}
                                <img src={items.redarrow} alt="img" />
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default WhatWeDo