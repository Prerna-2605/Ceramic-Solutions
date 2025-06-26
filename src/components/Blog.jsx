import React from 'react'
import { blog } from '../utils/helper'
import { motion } from 'framer-motion'
import Heading from './common/Heading'
import Subheading from './common/Subheading'

function Blog() {
    return (
        <div className='mb-[84px] '>
            <div className="max-w-[1140px] mx-auto px-3">
                <Heading headingText={'Our Blog'} className='text-center !mb-5' initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }} />
                
                <Subheading className='text-center max-w-[592px] mx-auto ' initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }} />

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.2,
                            },
                        },
                    }} className='grid grid-cols-3 gap-6 py-[56px] max-[920px]:grid-cols-2 max-[520px]:grid-cols-1 '>
                    {blog.map((items, index) => (
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, scale: 0.9 },
                                visible: { opacity: 1, scale: 1 },
                            }}
                            transition={{ duration: 0.5, ease: "easeOut" }} key={index} className='p-6 rounded-3xl shadow '>
                            <img src={items.image} alt="image" className='w-full mb-6' />

                            <h3 className='font-jakarta font-semibold text-2xl mb-3 max-[940px]:text-xl '>
                                {items.content}
                            </h3>

                            <a href="" className='font-jakarta font-semibold text-base text-[#FF0000] flex gap-[10px] items-center'>
                                {items.more}
                                <img src={items.arrow} alt="img" />
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default Blog