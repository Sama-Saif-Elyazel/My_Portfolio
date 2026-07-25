import React from 'react'

export default function About() {
  return (
    <div className='bg-[#ecd7ef] min-h-screen w-full flex flex-col items-center justify-center pt-28 pb-16 px-6 relative overflow-x-hidden scroll-mt-24' id='about'>
      
      {/* خلفية الصفحة */}
      <img src="./assets/images/Screenshot (67).png" alt="background" className='absolute inset-0 z-0 w-full h-full object-cover opacity-80' />

      <div className='relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center gap-10'>
        
        {/* عنوان الصفحة */}
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-[#ecd7ef] font-[cursive] drop-shadow-md text-center'>
          About Me
        </h1>

        {/* الكارت الزجاجي الحاوي للمحتوى */}
        <div className='bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-[#4c0a5e]/20 transition-all duration-500 w-full flex flex-col md:flex-row items-center justify-between gap-10'>
          
          {/* الصورة مع إطار مضيء وتأثير عند الماوس */}
          <div className='relative group shrink-0'>
            <div className='absolute -inset-1 bg-gradient-to-r from-[#4c0a5e] to-[#db76ea] rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500'></div>
            <div className='relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-500'>
              <img 
                src="./assets/images/samsom.jpeg" 
                alt="Sama Saif Elyazel" 
                className='w-full h-full object-cover' 
              />
            </div>
          </div>

          {/* النص والبيانات */}
          <div className='flex flex-col justify-center items-center md:items-end text-center md:text-right gap-4 max-w-xl'>
            <span className='bg-[#4c0a5e] text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-md'>
              Welcome to my portfolio 👋
            </span>
            
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4c0a5e] font-[cursive] leading-tight'>
              Hello, I'm <span className='text-[#8b23a7]'>Sama Saif Elyazel</span>
            </h2>
            
            <h3 className='text-xl sm:text-2xl font-bold text-[#4c0a5e]/80 font-[cursive]'>
              Software Engineer
            </h3>

            <p className='text-base sm:text-lg text-[#4c0a5e] leading-relaxed font-semibold pt-2'>
              A passionate developer creating clean, responsive, and interactive web experiences. 
              Always eager to learn new technologies and build creative solutions.
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}