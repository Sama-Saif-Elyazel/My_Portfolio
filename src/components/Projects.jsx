import React from 'react'

export default function Projects() {
  return (
    <>
      <div className='bg-[#ecd7ef] h-screen flex items-center justify-center scroll-mt-24 pt-24' id='projects'>
        {/* <img src="./assets/images/background.jpeg" className=' w-full h-full object-cover' /> */}
        <div className='absolute flex flex-col items-center justify-center gap-10 p-20'>
          <h1 className='text-6xl font-bold text-[#4c0a5e] font-[cursive]'>Projects</h1>
          <div className='flex flex-row gap-40 p-20'>
            <div className='flex flex-col justify-center items-center gap-5'>
              <h1 className='text-4xl font-bold text-[#4c0a5e] font-[cursive]'>Project 1: Personal Portfolio Website</h1>
              <p className='text-2xl text-[#4c0a5e] font-[cursive]'>A responsive and visually appealing personal portfolio website built using React, showcasing my skills, projects, and experience in web development.</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-5'>
              <h1 className='text-4xl font-bold text-[#4c0a5e] font-[cursive]'>Project 2: E-commerce Platform</h1>
              <p className='text-2xl text-[#4c0a5e] font-[cursive]'>An e-commerce platform developed with Node.js and Express, featuring user authentication, product management, and a shopping cart system.</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-5'>
              <h1 className='text-4xl font-bold text-[#4c0a5e] font-[cursive]'>Project 3: Social Media App</h1>
              <p className='text-2xl text-[#4c0a5e] font-[cursive]'>A social media application created using Django, allowing users to create profiles, post updates, and connect with friends.</p>
            </div>
          </div>
        </div> 
        </div> 
    </>
  )
}
