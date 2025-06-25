import React from 'react'
import section5img from '../assets/png/section5.png'
import { howItWorks } from '../utils/helper'
import Button from './common/Button'
import { motion } from 'framer-motion'

function HowItWorks() {
    return (
        <div className='mb-[140px] overflow-hidden '>
            <div className="max-w-[1140px] mx-auto px-3">
                <div className="flex flex-wrap justify-between">
                    <div className="w-[44%] px-3">
                        <motion.img
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, amount: 0.3 }} src={section5img} alt="image" className='w-full' />
                    </div>

                    <div className="w-[56%] px-3">
                        <motion.h2
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }} className='font-jakarta font-semibold text-[56px] mb-5 '>
                            How It Works?
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }} className='font-jakarta font-normal text-[18px] '>
                            Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt.
                        </motion.p>

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
                            viewport={{ once: true }} className='flex gap-6 '>
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