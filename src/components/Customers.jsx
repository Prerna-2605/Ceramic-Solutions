import React from 'react'
import { review, slider } from '../utils/helper'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';
import Heading from './common/Heading';
import Subheading from './common/Subheading';

function Customers() {
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 3.75,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3.25,
                }
            },
            {
                breakpoint: 1235,
                settings: {
                    slidesToShow: 2.75,
                }
            },
            {
                breakpoint: 1065,
                settings: {
                    slidesToShow: 2.25,
                }
            },
            {
                breakpoint: 870,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.75,
                }
            },
            {
                breakpoint: 642,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };
    return (
        <div className='mb-[84px] overflow-hidden'>
            <div className="mx-w-[1140px] mx-auto px-3">
                <Heading headingText={'What Our Customers Say'} className='text-center !mb-5' initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }} />

                <Subheading className='text-center max-w-[641px] mx-auto mb-8' initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }} />

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.2 } },
                    }} className='flex max-w-[482px] justify-between mx-auto max-[495px]:flex-col max-[495px]:gap-5 max-[495px]:max-w-[230px] w-full '>
                    {review.map((items, index) => (
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.4 }} key={index} className='flex gap-[10.67px] pt-[8.33px] pb-[6px] pl-4 pr-[45.5px] bg-white rounded-[16px] items-center border border-[#DCDCDC] '>
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
                </motion.div>
            </div>

            <Slider {...settings}>
                {slider.map((items, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }} key={index} className='p-6 rounded-3xl shadow-2 my-[56px] '>
                        <div className='flex items-center gap-2 '>
                            <img src={items.profile} alt="profile" />

                            <div>
                                <p className='font-manrope font-semibold text-base leading-[160%] '>
                                    {items.name}
                                </p>

                                <p className='font-manrope font-normal text-[14px] leading-[160%] '>
                                    {items.job}
                                </p>
                            </div>
                        </div>

                        <img src={items.stars} alt="rating" className='w-[120px] h-6 my-4 ' />

                        <p className='font-manrope font-normal text-base leading-[160%] '>
                            "{items.comment}"
                        </p>
                    </motion.div>
                ))}
            </Slider>
        </div >
    )
}

export default Customers