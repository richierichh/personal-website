import React from 'react';
import Image from "next/image";
import experiences from '../data/experiences';

function JobExperience({ title, company, date, tasks, image, index }) {
  return (
    <>
      {index % 2 === 0 ? (
        <div className="hover:-translate-y-3 w-full h-full bg-[#89909F] rounded-3xl p-4 "> 
        <div className="col-span-1 w-full h-full ">
            <h1 className=" md:text-xl text-lg font-medium">{title}</h1>
            <h2 className=" md:text-xl text-lg font-medium">{company}</h2>
            <h3>{date}</h3>
            <div className="text-gray-100 md:text-sm text-xs">
              {tasks.map(task => <p key={task}>• {task}</p>)}
            </div>
          </div>
        </div>
      ) : (
        <div className="col-span-1 w-full h-full"></div>
      )}

      <div className="relative col-span-1 w-full h-full flex justify-center items-center">
        <div className="h-full w-1 bg-gradient-to-r from-blue-200 to-cyan-200"></div>
        <Image className="hidden md:block md:h-28 md:w-28 rounded-full object-cover shadow-md border-4 border-white absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10" src={image} alt={company} />
      </div>

      {index % 2 !== 0 ? (
        <div className="col-span-1 w-full h-full">
          <div className="hover:-translate-y-3 w-full h-full bg-[#89909F] rounded-3xl p-4">
            <h1 className="text-white md:text-xl text-lg font-medium">{title}</h1>
            <h2 className="text-white md:text-xl text-lg font-medium">{company}</h2>
            <h3>{date}</h3>
            <div className="text-gray-100 md:text-sm text-xs">
              {tasks.map(task => <p key={task}>• {task}</p>)}
            </div>
          </div>
        </div>
      ) : (
        <div className="col-span-1 w-full h-full"></div>
      )}
    </>
  );
}

function Experience() {
  return (
    <div className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-6xl '>
      <h1 className='mt-48 mb-40 text-center font-bold text-4xl'>
        Experience
        <hr className="w-10 h-1 mx-auto my-4 bg-gradient-to-r from-blue-200 to-cyan-200 rounded"></hr>
      </h1>
      
      <div className="h-screen w-full flex justify-center items-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-[2fr,1fr,2fr] px-2">
          {experiences.map((experience, index) => (
            <JobExperience key={index} {...experience} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;