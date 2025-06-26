import React from 'react'
import bgimg from '../assets/png/section6.png'
import Button from './common/Button'
import { motion } from 'framer-motion'
import Heading from './common/Heading'
import Subheading from './common/Subheading'

function GetInTouch() {
    return (
        <div className='mb-[140px] max-w-[1140px] mx-auto px-3'>

            <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className='w-full relative bg-center bg-cover bg-no-repeat rounded-3xl z-0 after:content-[""] after:absolute after:rounded-3xl after:top-0 after:left-0 after:z-1 after:w-full after:h-full after:bg-[#FF0000BF] py-[64px] flex flex-col items-center max-[595px]:px-3 ' style={{ backgroundImage: `url(${bgimg})` }}>

                <Heading headingText={<>Interested? <br /> Get in touch with us</>} className='text-center leading-[120%] text-white !mb-5 z-2 ' initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }} />

                <Subheading className='text-white text-center leading-[160%] mb-9 max-w-[592px] mx-auto z-2 ' initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }} />

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
    )
}

export default GetInTouch