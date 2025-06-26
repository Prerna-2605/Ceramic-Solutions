import React, { useState } from 'react'
import { quest } from '../utils/helper'
import { AnimatePresence, motion } from 'framer-motion';
import Heading from './common/Heading';
import Subheading from './common/Subheading';

function Questions() {
    const [isOpen, setIsOpen] = useState(null);
    return (
        <div className='mb-[134px] '>
            <div className="max-w-[1140px] mx-auto px-3">
                <Heading headingText={'Frequently Asked Questions'} className='text-center !mb-5' initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }} />
                
                <Subheading className='text-center max-w-[592px] mx-auto mb-[56px] ' initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                viewport={{ once: true }} />

                <div className='max-w-[912px] mx-auto max-[936px]:mx-3  '>
                    {quest.map((items, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                            viewport={{ once: true }} key={index} className={`py-[21px] px-5 shadow-2 mb-6 rounded-2xl ${isOpen === index ? '' : ''} `}>
                            <button onClick={() => setIsOpen(isOpen === index ? null : index)} className={`flex justify-between items-center font-jakarta font-normal text-[18px] w-full cursor-pointer transition-[height] duration-250 ${isOpen === index ? 'mb-[14px] ' : 'h-full overflow-hidden'} `}>
                                {items.ques}
                                <span className={`${isOpen === index ? 'rotate-180' : ''}`}><items.arrow /></span>
                            </button>
                            <AnimatePresence initial={false}>
                                {isOpen === index && (
                                    <motion.p
                                        key="content"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.15 }}
                                        className="font-jakarta font-normal text-base overflow-hidden"
                                    >
                                        {items.ans}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Questions