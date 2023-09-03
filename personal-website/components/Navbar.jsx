import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Image from "next/image";
import logo from '../assets/logo.png';
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"

const Navbar = () => {
    const [nav, setNav] = useState(false);
    
    const handleClick = () => setNav(!nav);
    const { systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme
    return (
        <>
            <div className='fixed w-full h-[80px] flex items-center px-4 justify-between bg-[#141414] z-1000'>
                <div className='pt-2 pl-8'>
                    <Image src={logo} width={60} alt='logo image' />
                </div>

                <ul className='hidden md:flex ml-auto w-2/4 justify-between text-[#EEF0F2] text-xl'>
                    <li>Home</li>
                    <li>Experience</li>
                    <li>Projects</li>
                    <li>Contact</li>
                    <li>Resume</li>
                </ul>

                <div onClick={handleClick} className='md:hidden z-1000'>
                    {!nav ? <FaBars /> : <FaTimes />}
                </div>

                <ul className={!nav ? 'hidden' : 'text-4xl absolute top-0 left-0 w-full h-screen flex flex-col justify-center text-[#EEF0F2]'}>
                    <li className='py-6'><a href="#home" onClick={() => handleClick("close")}>Home</a></li>
                    <li className='py-6'><a href="#experience" onClick={() => handleClick("close")}>Experience</a></li>
                    <li className='py-6'><a href="#projects" onClick={() => handleClick("close")}>Projects</a></li>
                    <li className='py-6'>Contact</li>
                    <li className='py-6'>Resume</li>
                </ul>
                {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")} className="bg-slate-100 p-2 rounded-xl m-10">
                  <RiSunLine size={25} color="black " />
                </button>
              ) : (
                <button onClick={() => setTheme("dark")} className="bg-slate-100 p-2 rounded-xl m-10 ">
                  <RiMoonFill size={25} color="black" />
                </button>
                )}

           
            </div>
        </>
    )
}

export default Navbar;
