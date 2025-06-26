import React from 'react'
import { repeatedServices } from '../utils/helper'
import { LOCATION } from '../utils/Icons'
import { motion } from 'framer-motion'
import Heading from './common/Heading';
import Subheading from './common/Subheading';

function Services() {
    const visibleCards = repeatedServices.slice(0, 18);   // first 18 items
    const lastRowCards = repeatedServices.slice(18);
    return (
        <div className='mb-[140px] '>
            <div className="max-w-[1140px] mx-auto px-3">
                
                <Heading headingText={'We provide services in these areas'} className='leading-[130%] max-w-[589px] !mb-5 capitalize' initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }} />
                
                <Subheading className='max-w-[589px] mb-[56px] ' initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }} />

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        visible: {
                            transition: { staggerChildren: 0.1 },
                        },
                    }} className='grid grid-cols-3 gap-6 max-[940px]:grid-cols-2 max-[552px]:grid-cols-1 '>
                    {visibleCards.map((items, index) => (
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, scale: 0.9 },
                                visible: { opacity: 1, scale: 1 },
                            }}
                            transition={{ duration: 0.4 }} key={index} className='p-6 shadow-2 rounded-3xl flex gap-3 items-center '>
                            <div className='size-12 rounded-full bg-[#FF0000] flex items-center justify-center '>
                                <LOCATION/>
                            </div>
                            <p className='font-jakarta font-semibold text-2xl max-sm:text-xl '>
                                {items.name}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="flex justify-center gap-6 mt-6 max-[552px]:flex-col">
                    {lastRowCards.map((items, index) => (
                        <motion.div
                            key={`last-${index}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 + index * 0.2 }}
                            viewport={{ once: true }}
                            className="p-6 shadow-2 rounded-3xl flex gap-3 items-center w-full min-[940px]:max-w-[364px]"
                        >
                            <div className="size-12 rounded-full bg-[#FF0000] flex items-center justify-center">
                                <LOCATION />
                            </div>
                            <p className="font-jakarta font-semibold text-2xl max-sm:text-xl ">{items.name}</p>
                        </motion.div>
                    ))}
                </div>

                {/* <div className='flex gap-6 mx-auto mt-6 max-w-[752px] '>
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
                </div> */}
            </div>
        </div>
    )
}

export default Services