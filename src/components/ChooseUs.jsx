import React from 'react'
import section2img from '../assets/png/section2.png'
import { whyUs } from '../utils/helper'
import Button from './common/Button'
import { motion } from 'framer-motion'
import Heading from './common/Heading'
import Subheading from './common/Subheading'

function ChooseUs() {
    return (
        <div className='bg-[#FFEBEB] mb-[140px] py-[100px] '>
            <div className="max-w-[1140px] mx-auto px-3">
                <div className="flex flex-wrap items-center max-md:flex-col-reverse max-md:gap-10 ">
                    <div className="w-1/2 max-md:w-full ">
                        <Heading headingText={'Why Choose Us?'} className='!mb-5' initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}/>

                        <Subheading className='mb-8' initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }} />

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                visible: {
                                    transition: { staggerChildren: 0.2 }
                                }
                            }} className='flex flex-col gap-6 mb-9'>
                            {whyUs.map((items, index) => (
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    transition={{ duration: 0.5 }} key={index} className='flex gap-5 '>
                                    <div className='size-[62px] bg-[#F8D4D4] rounded-[10px] flex items-center justify-center '>
                                        <items.icon />
                                    </div>

                                    <div className='min-md:max-w-[370px]'>
                                        <h3 className='font-jakarta font-semibold text-[20px] leading-[160%] mb-3 '>
                                            {items.heading}
                                        </h3>

                                        <p className='font-jakarta font-normal text-base '>
                                            {items.content}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}>
                            <Button className={`py-5 px-8 bg-[#FF0000] `}>
                                Get A Quote
                            </Button>
                        </motion.div>
                    </div>

                    <div className="w-1/2 max-md:w-full ">
                        <motion.img
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }} src={section2img} alt="image" className='mx-auto' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseUs