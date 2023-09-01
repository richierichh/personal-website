import React from 'react'
import Image from "next/image"
import Link from "next/link"


import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projectItems = [
    {
      name: "MERN Full Stack To Do List",
      description:
        "A full stack to do list tracker that allows users to create and delete tasks built with React, Node.js, Express, and MongoDB.",
      image: "/todolist.png",
      github: "https://github.com/richierichh/MernToDo",
      link: "https://richardsmerntodolist.netlify.app/#",
    },

   { name: "PDF to Powerpoint Convertor",
    description:
      "An application that summarizes and converts PDF research papers to powerpoint presentations",
    image: "/PDF2PPTX.png",
    github: "https://github.com/richierichh/MernToDo",
    link: "https://richardsmerntodolist.netlify.app/#",
  },
    {
      name: "Apple Stock Price Predictor",
      description: "Predicted Apples stock price 30 days out while comparing the accuracy of linear regression vs decision tree models using Pandas, Numpy, SkLearn and ",
      image: "/stock.png",
      github: "https://github.com/richierichh/Apple-Stock-Price-Predictor",
      link: "https://github.com/richierichh/Apple-Stock-Price-Predictor/blob/main/Stock_Predictor.ipynb",
    },
    {
      name: "Personal Website",
      description:
        "My personal portfolio website built with Next.js, Tailwind CSS, and Vercel.",
      image: "/portfolio.png",
      github: "https://github.com/richierichh/personal-website",
      link: "richardliao.me",
    },

  ]
  const ProjectsSection = () => {
    return (
      <section className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl" id="projects">
        <h1 className="mt-52 text-center font-bold text-4xl">
          Projects
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
  
        <div className="flex flex-col space-y-28 mx-auto">
          {projectItems.map((project, idx) => {
            return (
              <div key={idx}>
              
                  <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                    <div className=" md:w-1/2">
                      <Link href={project.link}>
                        <Image
                          src={project.image}
                          alt=""
                          width={1000}
                          height={1000}
                          className="rounded-xl shadow-xl hover:opacity-70"
                        />
                      </Link>
                    </div>
                    <div className="mt-8 md:w-1/2">
                      <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                      <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                        {project.description}
                      </p>
                     
                    </div>
                  </div>
              </div>
            )
          })}
          
        </div>
      </section>
    )
  }
  
  export default ProjectsSection