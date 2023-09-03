import React, {useState} from 'react';

const Home = () => {

  return (
      <div className='mx-auto flex flex-col justify-center h-full pt-56 pl-20'> 
        <h1 className ='text-white font-lato text-7xl'>Hi <span className="animate-wave text-7xl">👋</span>, my name is
        </h1>
        <h2 className ='font-lato text-xl sm:text-8xl font-bold bg-gradient-to-r from-blue-200 to-cyan-200  bg-clip-text text-transparent' >Richard Liao.</h2>
        <h4 className ='text-white font-lato text-xl sm:text-7xl font-bold'> I love to build delightful user experiences.</h4>
        <p className ='text-white font-lato text-xl sm:text-4xl font-bold'>I'm an aspiring software engineer currently studying </p>
        <p className ='text-white font-lato text-xl sm:text-4xl font-bold'>Computer Science and Business Administration @Wilfrid Laurier University</p>
      </div>
  );
  }
export default Home