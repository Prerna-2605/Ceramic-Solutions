import React from 'react'
import section5img from '../assets/png/section5.png'
import { howItWorks } from '../utils/helper'
import Button from './common/Button'

function HowItWorks() {
    return (
        <div className='mb-[140px] '>
            <div className="max-w-[1140px] mx-auto px-3">
                <div className="flex flex-wrap justify-between">
                    <div className="w-[44%] px-3">
                        <img src={section5img} alt="image" className='w-full' />
                    </div>

                    <div className="w-[56%] px-3">
                        <h2 className='font-jakarta font-semibold text-[56px] mb-5 '>
                            How It Works?
                        </h2>

                        <p className='font-jakarta font-normal text-[18px] '>
                            Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt.
                        </p>

                        <div className='pt-8 pb-9 flex flex-col gap-4'>
                            {howItWorks.map((items, index) => (
                                <div key={index} className='p-4 shadow-3 rounded-[24px] flex gap-5 '>
                                    <span className='size-8'><items.icon /></span>

                                    <div>
                                        <h3 className='font-jakarta font-semibold text-[20px] mb-3 '>
                                            {items.heading}
                                        </h3>

                                        <p className='font-jakarta font-normal text-base leading-[160%] '>
                                            {items.content}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='flex gap-6 '>
                            <Button className={`bg-[#FF0000] py-4 px-8 `}>
                                get a quote
                            </Button>
                            <Button className={`border border-[#FF0000] py-4 px-8 !text-[#FF0000] `}>
                                view tile visualizer
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks