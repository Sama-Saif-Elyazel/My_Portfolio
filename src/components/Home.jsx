import React from 'react'
import Navbar from './Navbar'

export default function Home() {
  return (
    <> 
      <div className='bg-[#ecd7ef] h-screen flex items-center justify-center overflow-x-hidden max-w-full scroll-mt-24' id='home'>
        {/* <img src="./assets/images/background.jpeg" className=' w-full h-full object-cover' /> */}
        <div className='absolute flex flex-col items-center justify-center gap-10 p-20'>
        <h1 className='text-4xl font-bold text-[#4c0a5e] font-[cursive] '>Welcome to My Portfolio🤞😎</h1>
        <p className='text-2xl text-[#4c0a5e] font-[cursive] wrap-anywhere'>Hello! I'm Sama Saif Elyazel, a passionate and dedicated web developer with a strong background in creating dynamic and user-friendly websites. With a keen eye for design and a commitment to delivering high-quality code, I strive to bring innovative solutions to every project I undertake. My expertise includes HTML, CSS, JavaScript, and various frameworks, allowing me to build responsive and visually appealing websites that meet the needs of clients and users alike. I am constantly learning and staying up-to-date with the latest industry trends to ensure that my work remains cutting-edge and effective.</p>
        </div>
      </div>
    </>
  )
}
