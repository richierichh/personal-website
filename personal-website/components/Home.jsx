
import memoji from '../assets/memoji.jpeg';
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Home = () => {
  return (
      <div className='flex space-x-20 pt-40 pl-72'> 
      <div> 
      <Image className='rounded-full h-86 w-86 object-cover object-center' src={memoji} alt="memoji" /> 
      </div> 
      <div className='text-center mx-auto max-w-3xl px-4 sm:px-6 md:max-w-3xl '>
          <p className='text-white font-lato text-4xl sm:text-5xl md:text-6xl lg:text-7xl pb-4'>Hello 👋, I'm</p>
          <p className='font-lato text-xl sm:text-4xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent'>Richard Liao</p>
          <p className='text-white font-lato text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold'>Software Engineer</p>
          <p className ='text-white font-lato text-xl sm:text-xl md:text-xl font-bold pt-4'>Computer Science and Business @Wilfrid Laurier University</p>
        
        <ul className="flex justify-center items-center mt-6"> {/* Added space between icons */}
        <li>
          <a href="https://www.linkedin.com/in/richard-pierre-liao/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className='text-white hover:fill-[#6F8695]' size={30} />
          </a>
        </li>
        <li>
          <a href="https://github.com/richierichh" target="_blank" rel="noopener noreferrer">
            <FaGithub className='text-white hover:fill-[#6F8695]' size={30} />
          </a>
        </li>
      </ul>
          <div className="pt-10"> 
            <a href="/path-to-your-cv.pdf" download className="bg-blue-500 text-white py-3 px-6 rounded-md mr-4 hover:bg-blue-600 transition duration-300">Resume</a>
            <a href="mailto:richardliao2002.com" className="bg-green-500 text-white py-3 px-6 rounded-md hover:bg-green-600 transition duration-300">Contact Me</a>
            <ul className="flex justify-center items-center space-x-4 mb-4"/> {/* Added space between icons */}
        </div>
      </div>
   
  </div>
  
  );
}

export default Home;
