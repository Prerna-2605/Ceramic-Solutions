import React from 'react'
import section2img from '../assets/png/section2.png'
import { whyUs } from '../utils/helper'
import Button from './common/Button'

function ChooseUs() {
    return (
        <div className='bg-[#FFEBEB] mb-[140px] py-[100px] '>
            <div className="max-w-[1140px] mx-auto px-3">
                <div className="flex flex-wrap items-center">
                    <div className="w-1/2">
                        <h2 className='font-jakarta font-semibold text-[56px] mb-5 '>
                            Why Choose us?
                        </h2>

                        <p className='font-jakarta font-normal text-[18px] leading-[160%] mb-8 '>
                            Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt.
                        </p>

                        <div className='flex flex-col gap-6 mb-9'>
                            {whyUs.map((items, index) => (
                                <div key={index} className='flex gap-5 '>
                                    <div className='size-[62px] bg-[#F8D4D4] rounded-[10px] flex items-center justify-center '>
                                        <items.icon/>
                                    </div>

                                    <div className='max-w-[370px]'>
                                        <h3 className='font-jakarta font-semibold text-[20px] leading-[160%] mb-3 '>
                                            {items.heading}
                                        </h3>

                                        <p className='font-jakarta font-normal text-base '>
                                            {items.content}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Button className={`py-5 px-8 bg-[#FF0000] `}>
                            Get A Quote
                        </Button>
                    </div>

                    <div className="w-1/2">
                        <img src={section2img} alt="image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseUs