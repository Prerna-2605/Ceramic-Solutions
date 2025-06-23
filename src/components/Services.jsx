import React from 'react'
import { repeatedServices } from '../utils/helper'
import { LOCATION } from '../utils/Icons'

function Services() {
    return (
        <div className='mb-[140px] '>
            <div className="max-w-[1140px] mx-auto px-3">
                <h2 className='font-jakarta font-semibold text-[56px] leading-[130%] max-w-[589px] mb-5 capitalize '>
                    We provide services in these areas
                </h2>

                <p className='font-jakarta font-normal text-[18px] max-w-[589px] mb-[56px] '>
                    Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade
                </p>

                <div className='grid grid-cols-3 gap-6 '>
                    {repeatedServices.map((items, index) => (
                        <div key={index} className='p-6 shadow-2 rounded-3xl flex gap-3 items-center '>
                            <div className='size-12 rounded-full bg-[#FF0000] flex items-center justify-center '>
                                <items.location />
                            </div>
                            <p className='font-jakarta font-semibold text-2xl '>
                                {items.name}
                            </p>
                        </div>
                    ))}
                </div>

                <div className='flex gap-6 mx-auto mt-6 max-w-[752px] '>
                    <div className='p-6 shadow-2 rounded-3xl flex gap-3 items-center  max-w-[364px] w-full '>
                        <div className='size-12 rounded-full bg-[#FF0000] flex items-center justify-center '>
                            <LOCATION />
                        </div>
                        <p className='font-jakarta font-semibold text-2xl '>
                            Knoxville
                        </p>
                    </div>
                    <div className='p-6 shadow-2 rounded-3xl flex gap-3 items-center max-w-[364px] w-full  '>
                        <div className='size-12 rounded-full bg-[#FF0000] flex items-center justify-center '>
                            <LOCATION />
                        </div>
                        <p className='font-jakarta font-semibold text-2xl '>
                            Sevierville
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services