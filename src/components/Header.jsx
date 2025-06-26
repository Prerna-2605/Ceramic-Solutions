import React, { useState } from 'react'
import bgimg from '../assets/png/section1-bg.png'
import Button from './common/Button'
import { review } from '../utils/helper'
import tiles from '../assets/png/tiles.png'
import award from '../assets/png/award.png'
import { motion, useScroll } from "framer-motion";
import Subheading from './common/Subheading'

function Header() {

    return (
        <div className='bg-center bg-cover bg-no-repeat pt-[180px] pb-6 mb-[174px] overflow-hidden ' style={{ backgroundImage: `url(${bgimg})` }}>

            <div className="max-w-[1140px] mx-auto px-3 ">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }} // triggers only once when 50% visible
                    transition={{ duration: 0.6, ease: "easeOut" }} className='font-semibold text-[64px] max-w-[830px] text-white mb-5 font-jakarta max-[940px]:text-[58px] max-sm:text-[50px] '>
                    Transform Your Space with Precision and Quality:
                    Get a Free Quote Today!
                </motion.h1>

                <Subheading className='text-white mb-9 max-w-[742px] ' initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ delay: 0.2, duration: 0.6 }} />

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 100 }}>
                    <Button className={'py-5 px-8 bg-[#FF0000] font-bold text-[18px] text-white rounded-[56px] cursor-pointer mb-[72px] font-jakarta '}>
                        get a quote
                    </Button>
                </motion.div>

                <motion.div
                    className='flex max-w-[690px] justify-between max-[710px]:flex-col max-[710px]:gap-6 '
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={{
                        visible: {
                            transition: { staggerChildren: 0.2 }
                        }
                    }}>
                    <div className='flex gap-6 max-[505px]:flex-col '>
                        {review.map((items, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                transition={{ duration: 0.5 }} className='flex gap-[10.67px] pt-[8.33px] pb-[6px] pl-4 pr-[45.5px] bg-white rounded-[16px] items-center max-[505px]:max-w-[230px] '>
                                <a href="">
                                    <img src={items.icon} alt="google" className='size-10' />
                                </a>
                                <div>
                                    <p className='font-manrope font-normal text-[12px] leading-[160%] '>
                                        {items.name}
                                    </p>
                                    <div className='flex items-center'>
                                        <p className='font-manrope font-normal text-[20px] leading-[160%] '>
                                            {items.rating}
                                        </p>
                                        <img src={items.star} alt="stars" className='max-w[83.55px] w-full ' />
                                    </div>
                                    <p className='font-manrope font-normal text-[12px] leading-[160%] whitespace-nowrap '>
                                        {items.reviews}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className='flex gap-6 '>
                        <motion.img
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }} src={tiles} alt="img" />
                        <motion.img
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }} src={award} alt="img" />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Header