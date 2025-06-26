import React from 'react'
import { whatWeDo } from '../utils/helper'
import { motion } from 'framer-motion'
import Heading from './common/Heading'

function WhatWeDo() {
    const container = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };
    const item = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
    };
    return (
        <div className='mb-[140px] '>
            <div className='max-w-[1140px] mx-auto px-3 '>
                <Heading
                    headingText={'What We Do?'}
                    className='text-center'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }} />

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={container}
                    className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                    {whatWeDo.map((items, index) => (
                        <motion.div
                            variants={item}
                            transition={{ duration: 0.5, ease: "easeOut" }} key={index} className='p-6 border border-[#E0E0E0] rounded-[24px] hover:shadow hover:border-0 transition-all duration-150 '>
                            <img src={items.image} alt="image" className='w-full mb-6' />

                            <h3 className='font-jakarta font-semibold text-2xl mb-3 max-[940px]:text-xl break-words'>
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