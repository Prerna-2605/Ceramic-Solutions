import React from 'react'
import bgimg from '../assets/png/section6.png'
import Button from './common/Button'
import { motion } from 'framer-motion'

function GetInTouch() {
    return (
        <div className='mb-[140px] '>
            <div className='max-w-[1140px] mx-auto px-3'>
                <motion.div
                    initial={{ scale: 1 }}
                    whileInView={{ scale: 1.05 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }} className='relative bg-center bg-cover bg-no-repeat rounded-3xl z-0 after:content-[""] after:absolute after:rounded-3xl after:top-0 after:z-1 after:w-full after:h-full after:bg-[#FF0000BF] py-[64px] flex flex-col items-center ' style={{ backgroundImage: `url(${bgimg})` }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }} className='font-jakarta font-semibold text-[56px] leading-[120%] text-white text-center mb-5 z-2  '>
                        Interested?
                        <br />
                        Get in touch with us
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }} className='font-jakarta font-normal text-[18px] text-white text-center leading-[160%] mb-9 max-w-[592px] mx-auto z-2 '>
                        Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="z-2">
                        <Button className={`bg-white py-5 px-8 !text-[#FF0000] z-2 `}>
                            get a quote
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default GetInTouch