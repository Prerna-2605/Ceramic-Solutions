import React from 'react'
import bgimg from '../assets/png/section6.png'
import Button from './common/Button'

function GetInTouch() {
    return (
        <div className='mb-[140px] '>
            <div className='max-w-[1140px] mx-auto px-3'>
                <div className='relative bg-center bg-cover bg-no-repeat rounded-3xl -z-2 after:content-[""] after:absolute after:rounded-3xl after:top-0 after:-z-1 after:w-full after:h-full after:bg-[#FF0000BF] py-[64px] flex flex-col items-center ' style={{ backgroundImage: `url(${bgimg})` }}>
                    <h2 className='font-jakarta font-semibold text-[56px] leading-[120%] text-white text-center mb-5  '>
                        Interested?
                        <br />
                        Get in touch with us
                    </h2>

                    <p className='font-jakarta font-normal text-[18px] text-white text-center leading-[160%] mb-9 max-w-[592px] mx-auto '>
                        Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt.
                    </p>

                    <Button className={`bg-white py-5 px-8 !text-[#FF0000] cursor-pointer `}>
                        get a quote
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch