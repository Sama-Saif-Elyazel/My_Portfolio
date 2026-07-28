import React from 'react'

export default function Home() {
  const highlightCards = [
    { icon: "🔥", text: "Self-Motivated" },
    { icon: "💡", text: "Creative Thinker" },
    { icon: "🧩", text: "Problem Solver" },
    { icon: "🌱", text: "Always Learning" },
    { icon: "💭", text:"Curious Mind"},
    { icon: "🎯", text:"Goal-Oriented"},
  ]


  return (
    <div className='bg-[#ecd7ef] min-h-screen w-full flex items-center justify-center pt-28 pb-16 px-6 relative overflow-x-hidden scroll-mt-24' id="home">

      <div className='absolute top-20 left-10 w-72 h-72 bg-[#db76ea]/30 rounded-full blur-3xl pointer-events-none'></div>
      <div className='absolute bottom-10 right-10 w-80 h-80 bg-[#4c0a5e]/20 rounded-full blur-3xl pointer-events-none'></div>

      <div className='relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center gap-8'>

        <div className='bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col items-center gap-6 hover:shadow-[#4c0a5e]/15 transition-all duration-500'>

          <span className='bg-[#4c0a5e] text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-md animate-bounce'>
            Welcome to my creative space ✌️😎
          </span>

          <h1 className='text-4xl sm:text-6xl md:text-7xl font-bold text-[#4c0a5e] font-[cursive] leading-tight drop-shadow-sm'>
          Hi, I'm Sama👋
          </h1>

          <p className='text-lg sm:text-xl text-[#4c0a5e] font-semibold leading-relaxed max-w-2xl font-[cursive]'>
            <span className='text-2xl text-[#aa50c3] font-bold underline decoration-[#751f82]'>Software Engineer | Web Developer | Data Analyst</span>, <br />
            I build responsive websites and transform data into meaningful insights. I'm passionate about technology, continuous learning, and creating projects that solve real-world problems.
          </p>

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
              Contact Me 📩
            </a>
            <a 
              href= "https://drive.google.com/file/d/18dgX0uKMu_jWfN8_TD-J-U7aGh08F64L/view?usp=sharing"
              download="Sama_Saif_Elyazel_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className='bg-[#9959aa] text-[#4c0a5e] font-bold font-[cursive] border-2 border-[#4c0a5e]/30 px-8 py-3.5 rounded-2xl shadow-md hover:bg-[#cf81e7] hover:text-white hover:-translate-y-1 transition-all duration-300'
            >
              Download CV 📄
            </a>
          </div>

          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2 w-auto pt-4 mt-1 border-t border-[#4c0a5e]/10 '>
          {highlightCards.map((card, index) => (
              <div 
                key={index}
                className='bg-white/60 border border-white/80 rounded-2xl p-1 shadow-sm hover:shadow-md hover:-translate-y-1 hover:bg-[#d899e9] hover:text-white transition-all duration-300 flex items-center justify-center gap-3 group cursor-default'
              >
                <span className='text-2xl group-hover:scale-125 transition-transform duration-300'>
                  {card.icon}
                </span>
                <span className='text-sm sm:text-base font-bold text-[#4c0a5e] group-hover:text-white font-[cursive]'>
                  {card.text}
                </span>
              </div>
            ))}


          </div>

        </div>

      </div>
    </div>
  )
}