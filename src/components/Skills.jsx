import React from 'react'

export default function Skills() {
  return (
    <>
      <div className='bg-[#ecd7ef] h-screen flex items-center justify-center overflow-x-hidden max-w-full scroll-mt-24' id="skills">
        {/* <img src="./assets/images/background.jpeg" className=' w-full h-full object-cover' /> */}
        <div className='absolute flex flex-col items-center justify-center gap-10 p-20'>
          <h1 className='text-6xl font-bold text-[#4c0a5e] font-[cursive]'>Skills</h1>
          <div className='flex flex-row gap-40 p-20'>
            <div className='flex flex-col justify-center items-center gap-5'>
              <h1 className='text-4xl font-bold text-[#4c0a5e] font-[cursive]'>Programming Languages</h1>
              <p className='text-2xl text-[#4c0a5e] font-[cursive]'>JavaScript, Python, Java, C++</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-5'>
              <h1 className='text-4xl font-bold text-[#4c0a5e] font-[cursive]'>Frameworks & Libraries</h1>
              <p className='text-2xl text-[#4c0a5e] font-[cursive]'>React, Node.js, Express, Django</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-5'>
              <h1 className='text-4xl font-bold text-[#4c0a5e] font-[cursive]'>Data Analysis</h1>
              <p className='text-2xl text-[#4c0a5e] font-[cursive]'>Python, SQL, Power BI</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
