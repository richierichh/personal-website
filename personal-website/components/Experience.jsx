import React from 'react'
import markel from '../assets/markel.jpeg'
import civiconnect from '../assets/civiconnect.jpeg'
import ontario from '../assets/ontario.jpeg'
import Image from "next/image";
function Experience() {
  return (
      <div>
          <h1 className='text-lato text-4xl mt-40 ml-16 bg-gradient-to-br from-teal-500 to-emerald-100 bg-clip-text text-transparent'>Experience</h1>
          
          <div className="timeline-container mx-auto relative w-2 h-full inset-0 left-10">
              
              <div className="timeline-line"></div> 

              <div className="timeline-event">

                  <Image className="timeline-image h-28 w-28 rounded-full object-cover shadow-md border-4 border-white" src={civiconnect} alt=""/>
                  <div className ="timeline-textbox bg-white absolute p-2 rounded-md shadow-md text-[#EEF0F2] bg-gradient-to-r from-indigo-400 to-indigo-700">
                    <h2>Web Developer</h2>
                      <h3>Civiconnect</h3>
                      <span>Jan 2023 - April 2023</span>
                      <p>• Led a team of 3 which designed and deployed 2 professional websites for complex businesses needs</p>
                      <p>• Implemented search engine optimization (SEO) resulting in 45% improvement in website discoverability</p>
                      <p>• Implemented Strapi as a headless CMS and AWS for website deployment</p>
                      <p>• Conducted extensive unit tests using AWS Developer Tools for automation, resulting in improved pipeline efficiency</p>
                  </div>

                  <Image className="timeline-image-2 h-28 w-28 rounded-full object-cover shadow-md border-4 border-white" src={ontario} alt=""/>
                <div className ="timeline-textbox-2 absolute p-2 rounded-md shadow-md text-[#EEF0F2] bg-gradient-to-r from-slate-500 to-slate-800 ">
                    <h2>Software Developer</h2>
                    <h3>Ministry of Public and Business Service Delivery</h3>
                    <span>Jan 2023 - April 2023</span>
                    <p>• Designed and developed an email classification AI model with 75% accuracy which categorized tickets to respective IT teams using Microsoft Power Apps and Azure</p>
                    <p>• Led the design and development of a UI friendly model driven application in Microsoft Power apps and Azure to analyze 1000+ files and filter them</p>
                    <p>• Redesigned a government data dashboard into Microsoft Power Apps and transferred data using SQL tables</p>
                    <p>• Cleaned and migrated data Oracle pipelines using C#, SQL and ASP.net and tested data through PostMan API</p>
                </div>

                <Image className="timeline-image-3 h-28 w-28 rounded-full object-cover shadow-md border-4 border-white" src={markel} alt=""/>
                <div className ="timeline-textbox-3 absolute p-2 rounded-md shadow-md text-[#EEF0F2] bg-gradient-to-r from-slate-500 to-slate-800 ">
                    <h2>Underwriting Analyst</h2>
                    <h3>Markel</h3>
                    <span>Jan 2023 - April 2023</span>
                    <p>• Designed and developed an email classification AI model with 75% accuracy which categorized tickets to respective IT teams using Microsoft Power Apps and Azure</p>
                    <p>• Led the design and development of a UI friendly model driven application in Microsoft Power apps and Azure to analyze 1000+ files and filter them</p>
                    <p>• Redesigned a government data dashboard into Microsoft Power Apps and transferred data using SQL tables</p>
                    <p>• Cleaned and migrated data Oracle pipelines using C#, SQL and ASP.net and tested data through PostMan API</p>
                </div>  
                
              </div>
          </div>
      </div>
  )
}

export default Experience;
