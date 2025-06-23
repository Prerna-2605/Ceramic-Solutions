import React from 'react'
import logo from '../assets/svg/logo2.svg'
import { MAIL, REDPHONE } from '../utils/Icons'
import { footerLinks, icons } from '../utils/helper'
import Button from './common/Button'

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div>
            <div className="max-w-[1140px] mx-auto px-3">
                <div className='flex justify-between mb-[45px] '>
                    <div>
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
                                <a href={items.link} target='_blank' key={index} className='hover:-translate-y-1 transition-[translate] duration-150 '>
                                    <img src={items.icon} alt="" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="max-w-[832px] justify-between flex w-full">
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

                            <div className='relative'>
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className='w-[340px] h-[74px] border border-[#D9D9D9] pl-6 pr-[180px] rounded-full '
                                />
                                <Button className={`bg-[#FF0000] !font-semibold !text-base py-4 px-10 absolute right-[10px] top-[9px] `}>
                                    Subscribe
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                {/* Gradient top border */}
                <div className="h-[1.5px] w-full bg-gradient-to-r from-[#FFFFFF] via-[#727272] to-[#FFFFFF]" />

                {/* Copyright text */}
                <div className="py-4">
                    <p className='font-jakarta font-normal text-base text-center ' >
                        Copyright {year} ceramicsolutions.com all rights reserved
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer

