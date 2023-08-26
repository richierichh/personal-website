import React from 'react'
import Image from "next/image"
import Link from "next/link"
import {BaGithub , BsArrowUpRightSquare} from "react-icons/bs"
import selfie from "../assets/selfie.jpg"

const projectItems = [
    {
      name: "MERN Full Stack To Do List",
      description:
        "A full stack bug ticket tracker that allows users to create and delete issues built with React, Node.js, Express, and MongoDB.",
      image: "/thankfulthoughts.png",
      github: "https://github.com/richierichh/MernToDo",
      link: "https://richardsmerntodolist.netlify.app/#",
    },
    {
      name: "Apple Stock Price Prediction",
      description: "Compared the accuracy of linear regression vs decision tree models in predicting Apple's stock price.",
      image: "/platoio.png",
      github: "https://github.com/richierichh/Apple-Stock-Price-Predictor",
      link: "https://github.com/richierichh/Apple-Stock-Price-Predictor/blob/main/Stock_Predictor.ipynb",
    },
    {
      name: "Personal Website",
      description:
        "My personal portfolio website built with Next.js, Tailwind CSS, and Vercel.",
      image: "/familyphotos.png",
      github: "https://github.com/richierichh/personal-website",
      link: "richardliao.me",
    },
    {
        name: "Voice Integrated E-Commerce Web App",
        description:
          "Implemented voice integration allowing users to add/remove items to cart, checkout, and open/close cart using voice commands.",
        image: "/familyphotos.png",
        github: "https://github.com/richierichh/AlanAi-ECommerce-React-Web-App/tree/master",
      },

  ]
const projects = () => {
  return (
    <section id='projects'>
        <h1 className='text-lato md:text-4xl text-2xl md:mt-40 ml-6 md:ml-16 bg-gradient-to-br from-teal-500 to-emerald-100 bg-clip-text text-transparent'>
            Projects
        </h1>
        <div className = "flex flex-col space-y-28">
            {projectItems.map((project, idx) => (
               <div key = {idx}> 
                <div className = "flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12"> 
                <Image src={selfie} alt="" width={1000} height={1000} className="rounded-xl shadow-xl hover:opacity-70"/>
                </div> 



                </div>
            ))}
        </div>
    </section> 
  )
}

export default projects;