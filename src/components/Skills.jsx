import React from 'react'

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["JavaScript", "Python", "Java", "C++"]
    },
    {
      title: "Frameworks & Libraries",
      icon: "⚡",
      skills: ["React", "Node.js", "Express", "Django"]
    },
    {
      title: "Data Analysis",
      icon: "📊",
      skills: ["Python", "SQL", "Power BI", "Excel"]
    }
  ]

  return (
    <div className='bg-[#ecd7ef] min-h-screen w-full flex flex-col items-center justify-start pt-28 pb-16 px-6 scroll-mt-24' id="skills">
      <div className='w-full max-w-6xl mx-auto flex flex-col items-center gap-12'>
        
        {/* عنوان الصفحة */}
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-[#4c0a5e] font-[cursive] drop-shadow-md'>
          Skills & Expertise
        </h1>

        {/* شبكة الكروت الزجاجية */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full justify-center'>
          {skillCategories.map((cat, index) => (
            <div 
              key={index}
              className='bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center gap-6 group'
            >
              {/* أيقونة القسم */}
              <div className='text-5xl p-4 bg-[#4c0a5e]/10 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300'>
                {cat.icon}
              </div>
              
              {/* عنوان الكارت */}
              <h2 className='text-2xl font-bold text-[#4c0a5e] font-[cursive]'>
                {cat.title}
              </h2>

              {/* أزرار المهارات مع الأنيميشن والـ Hover */}
              <div className='flex flex-wrap justify-center gap-3'>
                {cat.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className='bg-[#4c0a5e] text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-md 
                               hover:bg-[#db76ea] hover:text-[#4c0a5e] 
                               hover:-translate-y-1 hover:scale-110 hover:shadow-lg 
                               active:scale-95 cursor-pointer 
                               transition-all duration-300 ease-in-out select-none'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}