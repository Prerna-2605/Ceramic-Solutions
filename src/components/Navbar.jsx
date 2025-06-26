import React, { useState } from 'react'
import logo from '../assets/svg/logo.svg'
import { nav } from '../utils/helper'
import { PHONE } from '../utils/Icons'
import Button from './common/Button'
import { motion, useScroll } from "framer-motion";
import { Link } from 'react-router-dom'

function Navbar() {

    const [state, setIsOpen] = useState(null)
    // const [hasScrolled, setHasScrolled] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setHasScrolled(window.scrollY > 1);
    //     };
    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    return (
        <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='fixed top-6 w-full z-20'>
            <div className="max-w-[1140px] mx-auto p-4 bg-white rounded-[24px]">
                <div className="flex justify-between items-center ">
                    <Link href="">
                        <img src={logo} alt="logo" />
                    </Link>

                    <motion.ul
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.1,
                                },
                            },
                        }}
                        className={`flex items-center gap-7 max-[981px]:flex-col max-[981px]:justify-center max-[981px]:fixed max-[981px]:top-0 max-[981px]:w-[70%] max-[981px]:h-full max-[981px]:bg-[#FFFFFF] max-[981px]:gap-13 transition-[right] duration-300 ${state === "show" ? 'right-0' : 'max-[981px]:right-[-100%]'} `}>
                        {nav.map((items, index) => (
                            <motion.li
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: -10 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 0.4 }} >
                                <a href={items.link} className='capitalize font-normal text-base font-jakarta whitespace-nowrap'>
                                    {items.name}
                                </a>
                            </motion.li>
                        ))}
                    </motion.ul>

                    <div className='flex gap-5 items-center'>
                        <Button className={'bg-[#FF0000] gap-[10px] py-[14px] px-5 flex max-md:hidden '}>
                            <PHONE />
                            (865) 621-1717
                        </Button>
                        <Button className={'bg-[#FF0000] gap-[10px] p-[14px] flex min-md:hidden max-[425px]:p-[10px] '}>
                            <PHONE />
                        </Button>
                        <button onClick={() => setIsOpen(state === "show" ? null : "show")} className={'cursor-pointer active:scale-95 flex flex-col justify-between w-[38px] h-[31px] z-15 min-[981px]:hidden '}>
                            <span className={`w-full h-1 bg-[#FF0000] rounded-[50px] transition-all duration-300 ease-in-out ${state === "show" ? 'rotate-45 origin-left ' : 'rotate-0'}`}></span>
                            <span className={`w-full h-1 bg-[#FF0000] rounded-[50px] transition-all duration-300 ease-in-out ${state === "show" ? 'opacity-0' : 'opacity-100'}`}></span>
                            <span className={`w-full h-1 bg-[#FF0000] rounded-[50px] transition-all duration-300 ease-in-out ${state === "show" ? '-rotate-45 origin-left ' : 'rotate-0'}`}></span>
                        </button>
                    </div>
                </div>
            </div>
        </motion.nav>
    )
}

export default Navbar