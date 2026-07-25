import React from 'react'

export default function Home() {
  return (
    <div className='bg-[#ecd7ef] min-h-screen w-full flex items-center justify-center pt-28 pb-16 px-6 relative overflow-x-hidden scroll-mt-24' id="home">
      
      {/* خلفية جمالية بلورية */}
      <div className='absolute top-20 left-10 w-72 h-72 bg-[#db76ea]/30 rounded-full blur-3xl pointer-events-none'></div>
      <div className='absolute bottom-10 right-10 w-80 h-80 bg-[#4c0a5e]/20 rounded-full blur-3xl pointer-events-none'></div>

      <div className='relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center gap-8'>
        
        {/* الكارت الزجاجي الرئيسي */}
        <div className='bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col items-center gap-6 hover:shadow-[#4c0a5e]/15 transition-all duration-500'>
          
          {/* باج ترحيبي عائم */}
          <span className='bg-[#4c0a5e] text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-md animate-bounce'>
            Welcome to my creative space ✨
          </span>

          {/* العنوان الرئيسي */}
          <h1 className='text-4xl sm:text-6xl md:text-7xl font-bold text-[#4c0a5e] font-[cursive] leading-tight drop-shadow-sm'>
            Welcome to My Portfolio ✌️ 😎
          </h1>

          {/* الفقرة التعريفية */}
          <p className='text-lg sm:text-xl text-[#4c0a5e] font-semibold leading-relaxed max-w-2xl font-[cursive]'>
            Hello! I'm <span className='text-[#8b23a7] font-bold underline decoration-[#db76ea]'>Sama Saif Elyazel</span>, a passionate and dedicated web developer. 
            I craft dynamic, user-friendly websites with clean code and modern designs.
          </p>

          {/* أزرار الدعوة للتفاعل (CTA Buttons) */}
          <div className='flex flex-wrap justify-center items-center gap-4 pt-4'>
            <a 
              href="#projects" 
              className='bg-[#4c0a5e] text-white font-bold font-[cursive] px-8 py-3.5 rounded-2xl shadow-lg hover:bg-[#db76ea] hover:text-[#4c0a5e] hover:-translate-y-1 hover:shadow-xl transition-all duration-300'
            >
              View My Work 🚀
            </a>
            <a 
              href="#contact" 
              className='bg-white/70 text-[#4c0a5e] font-bold font-[cursive] border-2 border-[#4c0a5e]/30 px-8 py-3.5 rounded-2xl shadow-md hover:bg-[#4c0a5e] hover:text-white hover:-translate-y-1 transition-all duration-300'
            >
              Contact Me ✉️
            </a>
          </div>

        </div>

      </div>
    </div>
  )
}