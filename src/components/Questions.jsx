import React, { useState } from 'react'
import { quest } from '../utils/helper'

function Questions() {
    const [isOpen, setIsOpen] = useState(null);
    return (
        <div className='mb-[134px] '>
            <div className="max-w-[1140px] mx-auto px-3">
                <h2 className='font-jakarta font-semibold text-[56px] leading-[100%] text-center mb-5 '>
                    Frequently Asked Questions
                </h2>

                <p className='font-jakarta font-normal text-[18px] text-center max-w-[592px] mx-auto mb-[56px] '>
                    Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade
                </p>

                <div className='max-w-[912px] mx-auto -px-3  '>
                    {quest.map((items, index) => (
                        <div key={index} className={`py-[21px] px-5 shadow-2 mb-6 rounded-2xl ${isOpen === index ? '' : ''} `}>
                            <button onClick={() => setIsOpen(isOpen === index ? null : index)} className={`flex justify-between items-center font-jakarta font-normal text-[18px] w-full cursor-pointer transition-[height] duration-250 ${isOpen === index ? 'mb-[14px] ' : 'h-full overflow-hidden'} `}>
                                {items.ques}
                                <span className={`${isOpen === index ? 'rotate-180' : ''}`}><items.arrow /></span>
                            </button>
                            <p className={`font-jakarta font-normal text-base transition-[max-height] duration-250 ${isOpen === index ? ' max-h-[200px] ' : 'max-h-0 overflow-auto absolute -top-full'} `}>
                            Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade
                        </p>
                        </div>
                    ))}
            </div>
        </div>
        </div >
    )
}

export default Questions