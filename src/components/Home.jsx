import React from 'react'
import Navbar from './Navbar'

export default function Home() {
  return (
    <> 
      <div className='bg-[#ecd7ef] min-h-screen w-full flex items-center justify-center overflow-x-hidden pt-28 pb-10' id='home'>
        <div className='w-full max-w-4xl flex flex-col items-center justify-center gap-6 text-center px-10 overflow-x-hidden'>
        <h1 className='text-3xl sm:text-4xl font-bold text-[#4c0a5e] font-[cursive] leading-tight wrap-break-word'>Welcome to My Portfolio🤞😎</h1>
        <p className='my-4 text-base sm:text-lg text-[#4c0a5e] font-[cursive] wrap-break-word leading-relaxed'>Hello! I'm Sama Saif Elyazel, a passionate and dedicated web developer with a strong background in creating dynamic and user-friendly websites. With a keen eye for design and a commitment to delivering high-quality code, I strive to bring innovative solutions to every project I undertake. My expertise includes HTML, CSS, JavaScript, and various frameworks, allowing me to build responsive and visually appealing websites that meet the needs of clients and users alike. I am constantly learning and staying up-to-date with the latest industry trends to ensure that my work remains cutting-edge and effective.</p>
        </div>
      </div>
    </>
  )
}
