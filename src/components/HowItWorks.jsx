import React from 'react'
import section5img from '../assets/png/section5.png'
import { howItWorks } from '../utils/helper'
import Button from './common/Button'
import { motion } from 'framer-motion'
import Heading from './common/Heading'
import Subheading from './common/Subheading'

function HowItWorks() {
    return (
        <div className='mb-[140px] overflow-hidden '>
            <div className="max-w-[1140px] mx-auto px-3">
                <div className="flex flex-wrap justify-between items-center max-[940px]:flex-col max-[940px]:gap-10 ">
                    <div className="w-[44%] max-[940px]:w-full px-3">
                        <motion.img
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, amount: 0.3 }} src={section5img} alt="image" className='w-full max-[940px]:w-[60%] mx-auto max-sm:w-full ' />
                    </div>

                    <div className="min-[940px]:w-[56%] px-3">
                        <Heading headingText={'How it works?'} className='!mb-5' initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }} />
                        
                        <Subheading initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }} />

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={{
                                visible: {
                                    transition: { staggerChildren: 0.2 },
                                },
                            }} className='pt-8 pb-9 flex flex-col gap-4'>
                            {howItWorks.map((items, index) => (
                                <motion.div
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    transition={{ duration: 0.5 }} className='p-4 shadow-3 rounded-[24px] flex gap-5 '>
                                    <span className='size-8'><items.icon /></span>

                                    <div>
                                        <h3 className='font-jakarta font-semibold text-[20px] mb-3 '>
                                            {items.heading}
                                        </h3>

                                        <p className='font-jakarta font-normal text-base leading-[160%] '>
                                            {items.content}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true }} className='flex gap-6  max-[475px]:flex-col'>
                            <Button className={`bg-[#FF0000] py-4 px-8 `}>
                                get a quote
                            </Button>
                            <Button className={`border border-[#FF0000] py-4 px-8 !text-[#FF0000] `}>
                                view tile visualizer
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks