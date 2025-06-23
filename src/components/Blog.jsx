import React from 'react'
import { blog } from '../utils/helper'

function Blog() {
    return (
        <div className='mb-[84px] '>
            <div className="max-w-[1140px] mx-auto -px-3">
                <h2 className='font-jakarta font-semibold text-[56px] leading-[100%] text-center mb-5 '>
                    Our Blog
                </h2>

                <p className='font-jakarta font-normal text-[18px] text-center max-w-[592px] mx-auto '>
                    Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade
                </p>

                <div className='grid grid-cols-3 gap-6 py-[56px]'>
                    {blog.map((items, index) => (
                        <div key={index} className='p-6 rounded-3xl shadow '>
                            <img src={items.image} alt="image" className='w-full mb-6' />

                            <h3 className='font-jakarta font-semibold text-2xl mb-3 '>
                                {items.content}
                            </h3>

                            <a href="" className='font-jakarta font-semibold text-base text-[#FF0000] flex gap-[10px] items-center'>
                                {items.more}
                                <img src={items.arrow} alt="img" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blog