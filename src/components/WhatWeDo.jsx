import React from 'react'
import { whatWeDo } from '../utils/helper'

function WhatWeDo() {
    return (
        <div className='mb-[140px] '>
            <div className='max-w-[1140px] mx-auto -px-3 '>
                <h2 className='font-jakarta font-semibold text-[56px] text-center mb-[56px] '>
                    What We Do
                </h2>

                <div className='grid grid-cols-3 gap-6'>
                    {whatWeDo.map((items, index) => (
                        <div key={index} className='p-6 border border-[#E0E0E0] rounded-[24px] hover:shadow hover:border-0 transition-all duration-150 '>
                            <img src={items.image} alt="image" className='w-full mb-6' />

                            <h3 className='font-jakarta font-semibold text-2xl mb-3 '>
                                {items.heading}
                            </h3>

                            <p className='font-jakarta font-normal text-base mb-6 '>
                                {items.content}
                            </p>

                            <a href="" className='font-jakarta font-semibold text-base text-[#FF0000] flex gap-[10px] items-center'>
                                {items.more}
                                <img src={items.redarrow} alt="img" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo