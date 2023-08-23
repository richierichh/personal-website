import React, {useState} from 'react';
import selfie from '../assets/selfie.jpg'
import memoji from '../assets/memoji.jpeg'
import Image from "next/image";

const Home = () => {
const [dp,setDp] = useState(false)
const handleClick = () => setDp(!dp) 
  return (
  <div className="flex flex-col items-center justify-center">
      <div onClick={handleClick}>
        {
          dp ?
            <Image className='rounded-full h-60 w-60 mt-24 object-cover object-center' src={memoji} alt="memoji" /> :
            <Image className='rounded-full h-60 w-60 mt-24 object-cover object-center' src={selfie} alt="selfie image" />
        }
      </div>
      <div> 
        <p className ='font-lato bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent text-xl'>Click me</p>
      </div>
      <div id='content max-w-[1000px] mx-auto flex flex-col justify-center h-full'> 
        <h1 className ='text-white font-lato text-xl pt-10'>Hi, my name is</h1>
        <h2 className ='font-lato text-xl sm:text-7xl font-bold bg-gradient-to-r from-blue-200 to-cyan-200  bg-clip-text text-transparent text-xl' >Richard Liao.</h2>
        <h4 className ='text-white font-lato text-xl sm:text-7xl font-bold'> I love to build delightful user experiences.</h4>
        <p className ='text-white font-lato text-xl sm:text-xl font-bold'>I'm an aspiring software engineer currently studying </p>
        <p className ='text-white font-lato text-xl sm:text-xl font-bold'>Computer Science and Business Administration @Wilfrid Laurier University</p>
      </div>
    </div>
  );
  }

export default Home