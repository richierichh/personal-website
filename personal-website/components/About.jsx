import React, { useState } from 'react';
import selfie from '../assets/selfie.jpg'
import Image from "next/image";

function About() {
const [dp,setDp] = useState(false)
const handleClick = () => setDp(!dp) 

  return (
    <div id='About' className="flex flex-col items-center justify-center pt-28">
        <h1 className="text-center font-bold text-4xl pb-10">
            About me
            <hr className="w-10 h-1 mx-auto my-2 bg-gradient-to-r from-blue-200 to-cyan-200 rounded"></hr>
        </h1>
        <Image className='rounded-full h-60 w-60 object-cover object-center' src={selfie} alt="selfie image" /> 
        <p className ='font-lato bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent text-xl text-center'></p>
        <div className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-3xl text-xl pt-10'>
            <div>
                <p className="pb-6">Hi! I&apos;m Richard, a Computer Science and Business Administration student at Wilfrid Laurier University, and I have just finished my third year.</p>
                <p className ="pb-6">Currently, I am interning at CIBC as a Business Systems Analyst, where I&apos;m optimizing business processes through comprehensive systems analysis and solution-driven recommendations.</p>
                <p className='pb-20'>I am also looking for winter and summer 2024 internships in software engineering! Feel free to email me at richardliao2002@gmail.com or click the Contact Me button on the home page.</p>
            </div>
        </div>
    </div>
  )
}

export default About
