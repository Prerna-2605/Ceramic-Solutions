import React from 'react'
import logo from '../assets/svg/logo2.svg'
import { MAIL, REDPHONE } from '../utils/Icons'
import { footerLinks, icons } from '../utils/helper'
import Button from './common/Button'
import { motion } from 'framer-motion'

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div>
            <div className="max-w-[1140px] mx-auto px-3">
                <div className='flex justify-between gap-15 mb-[45px] max-[992px]:flex-wrap '>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}>
                        <a href="">
                            <img src={logo} alt="logo" />
                        </a>

                        <div className='mt-5 mb-6 '>
                            <div className='flex items-center gap-[10px] mb-4 '>
                                <MAIL />
                                <a href="mailto:help@Dealzip.com" className='font-jakarta font-normal text-base '>
                                    help@Dealzip.com
                                </a>
                            </div>

                            <div className='flex items-center gap-[10px] '>
                                <REDPHONE />
                                <p className='font-jakarta font-normal text-base '>
                                    +1 234 456 678 89
                                </p>
                            </div>
                        </div>

                        <div className='flex gap-2 '>
                            {icons.map((items, index) => (
                                <a href={items.link} target='_blank' key={index} className='min-[768px]:hover:-translate-y-1 transition-[translate] duration-150 ease-in-out '>
                                    <img src={items.icon} alt="" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }} className="max-w-[832px] justify-between flex w-full max-[710px]:grid max-[710px]:grid-cols-2 max-[710px]:gap-6 max-[710px]:max-w-[710px] ">
                        {footerLinks.map((items, index) => (
                            <div key={index}>
                                <ul>
                                    <li className='font-jakarta font-semibold text-[20px] mb-5 '>
                                        {items.title}
                                    </li>

                                    {items.links.map((link, i) => (
                                        <li key={i} className='mb-3'>
                                            <a href="" className='font-jakarta font-normal text-base '>
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {/* Newsletter Column */}
                        <div>
                            <h3 className='font-jakarta font-semibold text-[20px] mb-5 '>
                                Newsletter
                            </h3>

                            <p className='font-jakarta font-normal text-base mb-3 '>
                                Stay Up To Date
                            </p>

                            <div className='relative flex max-[615px]:flex-col max-[625px]:gap-2'>
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className='max-w-[340px] w-full h-[74px] max-[710px]:h-[54px] border border-[#D9D9D9] pl-6 pr-[180px] rounded-full max-[710px]:pr-[152px] max-[710px]:pl-4 max-[615px]:pr-4 '
                                />
                                <Button className={`bg-[#FF0000] !font-semibold !text-base py-4 px-10 min-[615px]:absolute right-[10px] top-[9px] max-[710px]:top-[5px] max-[710px]:right-[5px] max-[710px]:py-[10px] max-[710px]:px-8  `}>
                                    Subscribe
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}>
                {/* Gradient top border */}
                <div className="h-[1.5px] w-full bg-gradient-to-r from-[#FFFFFF] via-[#727272] to-[#FFFFFF]" />

                {/* Copyright text */}
                <div className="py-4">
                    <p className='font-jakarta font-normal text-base text-center ' >
                        Copyright {year} ceramicsolutions.com all rights reserved
                    </p>
                </div>
            </motion.div>
        </div >
    )
}

export default Footer

