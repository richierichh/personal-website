import React from 'react';
import markel from '../assets/markel.jpeg';
import civiconnect from '../assets/civiconnect.jpeg';
import ontario from '../assets/ontario.jpeg';
import Image from "next/image";

function Experience() {
  return (
      <div>
          <h1 className='text-lato md:text-4xl text-2xl mt-12 md:mt-40 ml-6 md:ml-16 bg-gradient-to-br from-teal-500 to-emerald-100 bg-clip-text text-transparent'>Experience</h1>
          <div className="h-screen w-full flex justify-center items-center">

            <div class="max-w-7xl mx-auto w-full grid md:grid-cols-9 grid-cols-1 px-2">

                <div class="col-span-4 w-full h-full">
                    <div class="w-full h-full bg-indigo-400 rounded-md p-4">
                        <h1 class="text-white md:text-xl text-lg font-medium ">Web Developer</h1>
                        <h2 class="text-white md:text-xl text-lg font-medium">Civiconnect</h2>
                        <h3>Jan 2023 - Apr 2023</h3>
                        <div class="text-gray-100 md:text-sm text-xs">
                            <p>• Developed 2 websites for businesses from scratch </p>
                            <p>• Implemented search engine optimization (SEO) resulting in 45% improvement in website discoverability</p>
                            <p>• Implemented Strapi as a headless CMS and AWS for website deployment</p>
                        </div>
                    </div>
                </div>

                <div class="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div class="h-full w-1 bg-indigo-300"></div>
                    <Image className="hidden md:block md:h-28 md:w-28 rounded-full object-cover shadow-md border-4 border-white absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10 " src={civiconnect} alt=""/>
                </div>

                <div class="col-span-4 w-full h-full"></div>
                
                <div class="col-span-4 w-full h-full"></div>
                <div class="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div class="h-full w-1 bg-indigo-300">
                        <Image className="md:h-28 md:w-28 hidden md:block  rounded-full object-cover shadow-md border-4 border-white absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10" src={ontario} alt=""/> 
                    </div>
                </div>
                
                <div class="col-span-4 w-full h-full">
                    <div class="w-full h-full bg-indigo-400 rounded-md p-4">
                        <h1 class="text-white md:text-xl text-lg font-medium">Software Developer</h1>
                        <h2 class="text-white md:text-xl text-lg font-medium">Ministry of Public and Business Service Delivery</h2>
                        <h3>May 2022 - Aug 2022</h3>
                        <div class="text-gray-100 md:text-sm text-xs">
                            <p>• Developed an email classification AI model with 75% accuracy, categorizing tickets to respective IT teams </p>
                            <p>• Developed an application in Microsoft Power apps and Azure to analyze 1000+ files and filter them</p>
                            <p>• Cleaned and migrated data Oracle pipelines using C#, SQL and ASP.net and tested data through PostMan API</p>
                        </div>
                    </div>
                </div>

                <div class="col-span-4 w-full h-full ">
                    <div class="w-full h-full bg-indigo-400 rounded-md p-4">
                        <h1 class="text-white md:text-xl text-lg font-medium">Underwriting Analyst</h1>
                        <h2 class="text-white md:text-xl text-lg font-medium">Markel Canada</h2>
                        <h3>May 2021 - Sep 2021</h3>
                        <div class="text-gray-100 md:text-sm text-xs">
                            <p>• Improved the efficiency of workload in the underwriting process and made it faster by 20%</p> 
                            <p>• Prepared financial raters, issued, declined and renewed accounts </p>  
                        </div>
                    </div>
                </div>

                <div class="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div class="h-full w-1 bg-indigo-300 pt-8"></div>
                    <div class="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">
                    </div>
                    <Image className="md:h-28 md:w-28 hidden md:block rounded-full object-cover shadow-md border-4 border-white absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10" src={markel} alt=""/>
                </div>
            </div>
          </div>
      </div>
  );
}

export default Experience;
