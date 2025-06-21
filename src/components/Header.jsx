import React from 'react'
import bgimg from '../assets/png/section1-bg.png'
import logo from '../assets/svg/logo.svg'
import { nav } from '../utils/helper'
import Button from './common/Button'
import { PHONE } from '../utils/Icons'
import { review } from '../utils/helper'
import tiles from '../assets/png/tiles.png'
import award from '../assets/png/award.png'

function Header() {
    return (
        <div className='bg-center bg-cover bg-no-repeat pt-[180px] pb-6 px-3 mb-[174px] ' style={{ backgroundImage: `url(${bgimg})` }}>
            <nav className='fixed top-6 w-full'>
                <div className="max-w-[1140px] mx-auto p-4 bg-white rounded-[24px] flex justify-between items-center ">
                    <a href="">
                        <img src={logo} alt="logo" />
                    </a>

                    <ul className='flex gap-7'>
                        {nav.map((items, index) => (
                            <li key={index}>
                                <a href={items.link} className='capitalize font-normal text-base font-jakarta'>
                                    {items.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className='flex gap-5 items-center'>
                        <Button className={'bg-[#FF0000] font-bold text-base flex text-white gap-[10px] py-[14px] px-5 rounded-[56px] cursor-pointer font-jakarta '}>
                            <PHONE />
                            (865) 621-1717
                        </Button>
                        {/* <Button className={'flex flex-col justify-between w-[35px] h-[30px] cursor-pointer '}>
                            <span className={`w-full h-1 bg-[#FF0000] rounded-[50px] `}></span>
                            <span className={`w-full h-1 bg-[#FF0000] rounded-[50px] `}></span>
                            <span className={`w-full h-1 bg-[#FF0000] rounded-[50px] `}></span>
                        </Button> */}
                    </div>
                </div>
            </nav>

            <div className="max-w-[1140px] mx-auto">
                <h1 className='font-semibold text-[64px] max-w-[830px] text-white mb-5 font-jakarta'>
                    Transform Your Space with Precision and Quality:
                    Get a Free Quote Today!
                </h1>

                <p className='font-normal text-[18px] text-white mb-9 max-w-[742px] leading-[160%] font-jakarta '>
                    Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade nyheter eurosamma sol: teroktig,
                </p>

                <Button className={'py-5 px-8 bg-[#FF0000] capitalize font-bold text-[18px] text-white rounded-[56px] cursor-pointer mb-[72px] font-jakarta '}>
                    get a quote
                </Button>

                <div className='flex max-w-[690px] justify-between '>
                    {review.map((items, index) => (
                        <div key={index} className='flex gap-[10.67px] pt-[8.33px] pb-[6px] pl-4 pr-[45.5px] bg-white rounded-[16px] items-center '>
                            <a href="">
                                <img src={items.icon} alt="google" className='size-10' />
                            </a>
                            <div>
                                <p className='font-manrope font-normal text-[12px] leading-[160%] '>
                                    {items.name}
                                </p>

                                <div className='flex items-center'>
                                    <p className='font-manrope font-normal text-[20px] leading-[160%] '>
                                        {items.rating}
                                    </p>

                                    <img src={items.star} alt="stars" className='max-w[83.55px] w-full ' />
                                </div>

                                <p className='font-manrope font-normal text-[12px] leading-[160%] '>
                                    {items.reviews}
                                </p>
                            </div>
                        </div>
                    ))}

                    <img src={tiles} alt="img" />

                    <img src={award} alt="img" />
                </div>
            </div>
        </div>
    )
}

export default Header