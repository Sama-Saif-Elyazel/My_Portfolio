import React from 'react'
import ImageSlider from './ImageSlider'

export default function certificates() {
  return (
    <>
    <div className='bg-[#ecd7ef] h-screen flex items-center justify-center scroll-mt-24' id='certificates'>
      <div className='absolute flex flex-col items-center justify-center gap-10 p-20'>
        <h1 className='text-6xl font-bold text-[#4c0a5e] font-[cursive]'>Certificates</h1>
        <ImageSlider />
        {/* <div className='flex flex-row gap-40 p-20'>
          <div className='flex flex-col justify-center items-center gap-5'>
            <h1 className='text-4xl font-bold text-[#b93185] font-[cursive]'>Certificate 1: Web Development Bootcamp</h1>
            <p className='text-2xl text-[#963f75] font-[cursive]'>Completed a comprehensive web development bootcamp covering HTML, CSS, JavaScript, and React.</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-5'>
            <h1 className='text-4xl font-bold text-[#b93185] font-[cursive]'>Certificate 2: Data Science Fundamentals</h1>
            <p className='text-2xl text-[#963f75] font-[cursive]'>Earned a certificate in data science fundamentals including Python, statistics, and machine learning basics.</p>
          </div>
        </div> */}
      </div> 
    </div>
    </>
  )
}
