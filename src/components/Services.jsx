import React from 'react'
import { repeatedServices } from '../utils/helper'
import { LOCATION } from '../utils/Icons'
import { motion } from 'framer-motion'

function Services() {
    return (
        <div className='mb-[140px] '>
            <div className="max-w-[1140px] mx-auto px-3">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }} className='font-jakarta font-semibold text-[56px] leading-[130%] max-w-[589px] mb-5 capitalize '>
                    We provide services in these areas
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }} className='font-jakarta font-normal text-[18px] max-w-[589px] mb-[56px] '>
                    Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade
                </motion.p>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        visible: {
                            transition: { staggerChildren: 0.1 },
                        },
                    }} className='grid grid-cols-3 gap-6 '>
                    {repeatedServices.map((items, index) => (
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, scale: 0.9 },
                                visible: { opacity: 1, scale: 1 },
                            }}
                            transition={{ duration: 0.4 }} key={index} className='p-6 shadow-2 rounded-3xl flex gap-3 items-center '>
                            <div className='size-12 rounded-full bg-[#FF0000] flex items-center justify-center '>
                                <items.location />
                            </div>
                            <p className='font-jakarta font-semibold text-2xl '>
                                {items.name}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <div className='flex gap-6 mx-auto mt-6 max-w-[752px] '>
                    <motion.div initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }} className='p-6 shadow-2 rounded-3xl flex gap-3 items-center  max-w-[364px] w-full '>
                        <div className='size-12 rounded-full bg-[#FF0000] flex items-center justify-center '>
                            <LOCATION />
                        </div>
                        <p className='font-jakarta font-semibold text-2xl '>
                            Knoxville
                        </p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }} className='p-6 shadow-2 rounded-3xl flex gap-3 items-center max-w-[364px] w-full  '>
                        <div className='size-12 rounded-full bg-[#FF0000] flex items-center justify-center '>
                            <LOCATION />
                        </div>
                        <p className='font-jakarta font-semibold text-2xl '>
                            Sevierville
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Services