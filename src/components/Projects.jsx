import React from 'react'

export default function Projects() {
  const projectsList = [
    {
      id: 1,
      title: 'Personal Portfolio Website',
      description: 'A modern, fully responsive personal portfolio website built with React and Tailwind CSS. Features interactive glassmorphism UI cards and dynamic section scrolling.',
      tags: ['React.js', 'Tailwind CSS', 'JavaScript'],
      image: './assets/images/portfolio.png',
      demoLink: 'https://sama-saif-elyazel.github.io/My_Portfolio/'
    },
    {
      id: 2,
      title: 'Movies Explorer Website',
      description: 'A dynamic movie web application built with React.js that allows users to browse trending movies, search titles, and explore cast details.',
      tags: ['React.js', 'Tailwind CSS', 'REST API'],
      image: './assets/images/Movies.png',
      demoLink: 'https://sama-saif-elyazel.github.io/Movies/'
    },
    {
      id: 3,
      title: 'COVID-19 Interactive Dashboard',
      description: 'A data analysis project analyzing global COVID-19 trends using Excel for cleaning and Power BI for interactive dashboard visualization.',
      tags: ['Power BI', 'Excel', 'Data Visualization', 'Data Analysis'],
      image: './assets/images/dashboard.png',
      demoLink: 'https://app.powerbi.com/view?r=eyJrIjoiNjVhOWRjNjktOGFiOC00YmU4LThiOWMtYTgxYmY3MDI1MDJkIiwidCI6IjFmZmUwYTVhLTllNzYtNDcwZi04YzZiLTA0MzYyMjE3ZWFmMyJ9'
    },
    {
      id: 4,
      title: 'Dark Dashboard about Coffee',
      description: 'A data analysis project analyzing coffee shop sales data using Excel for cleaning and Power BI for interactive dashboard visualization.',
      tags: ['Power BI', 'Excel', 'Data Visualization','Sales Analysis'],
      image: './assets/images/Coffee2.png',
      demoLink: 'https://app.powerbi.com/view?r=eyJrIjoiZDQxMjM4ZjEtOGNkYS00ZTdmLTk5YzktMjdmMWJkZmFjOWYzIiwidCI6IjFmZmUwYTVhLTllNzYtNDcwZi04YzZiLTA0MzYyMjE3ZWFmMyJ9'
    },    {
      id: 5,
      title: 'Coffee Shop Sales Dashboard',
      description: 'A data analysis project analyzing coffee shop sales data using Excel for cleaning and Power BI for interactive dashboard visualization.',
      tags: ['Power BI', 'Excel', 'Data Visualization','Sales Analysis'],
      image: './assets/images/Coffee.png',
      demoLink: 'https://app.powerbi.com/view?r=eyJrIjoiNGYyNzAxMzItMTc2ZS00ZmY0LTliMjktYTU4NTllYjYyZDBiIiwidCI6IjFmZmUwYTVhLTllNzYtNDcwZi04YzZiLTA0MzYyMjE3ZWFmMyJ9'
    },
    {
      id: 6,
      title: 'Python Shopping Cart System',
      description: 'A console-based shopping cart application written in Python featuring item addition, total bill calculation, discounts, and inventory management.',
      tags: ['Python', 'OOP', 'Data Structures','Console Application'],
      image: './assets/images/python.png',
      demoLink: 'https://github.com/Sama-Saif-Elyazel/Shopping_Cart.git'
    }
  ]

  return (
    <section
      id='projects'
      className='bg-[#ecd7ef] min-h-screen py-24 px-6 md:px-12 flex flex-col items-center justify-center scroll-mt-24'
    >
      <div className='w-full max-w-7xl mx-auto flex flex-col items-center gap-12'>

        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-[#4c0a5e] font-[cursive] drop-shadow-md text-center'>
          Featured Projects
        </h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full'>
          {projectsList.map((project) => (
            <div
              key={project.id}
              className='bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group'
            >
              <div>
                <div className='w-full h-44 overflow-hidden relative border-b border-white/40 bg-[#4c0a5e]/10'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='object-cover group-hover:scale-110 transition-transform duration-500'
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/400x220/4c0a5e/ffffff?text=" + project.title;
                    }}
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-[#4c0a5e]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                </div>

                <div className='p-5 flex flex-col gap-3'>
                  <h2 className='text-xl font-bold text-[#4c0a5e] font-[cursive] leading-snug'>
                    {project.title}
                  </h2>

                  <p className='text-[#4c0a5e]/90 text-xs sm:text-sm leading-relaxed font-medium line-clamp-3'>
                    {project.description}
                  </p>
                </div>
              </div>

              <div className='p-5 pt-0'>
                <div className='flex flex-wrap gap-1.5 mb-5'>
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className='bg-[#4c0a5e] text-white text-[11px] font-semibold px-2.5 py-1 rounded-xl shadow-sm group-hover:bg-[#db76ea] group-hover:text-[#4c0a5e] transition-colors duration-300'
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className='flex items-center gap-2 pt-3 border-t border-[#4c0a5e]/15'>
                  <a
                    href={project.demoLink}
                    target='_blank'
                    rel='noreferrer'
                    className='flex-1 text-center py-2 px-3 rounded-xl bg-[#4c0a5e] text-white text-xs font-bold font-[cursive] hover:bg-[#db76ea] hover:text-[#4c0a5e] transition-all duration-300 shadow-md'
                  >
                    View Project
                  </a>
                  {/* <a 
                    href={project.githubLink} 
                    target='_blank' 
                    rel='noreferrer'
                    className='flex-1 text-center py-2 px-3 rounded-xl border-2 border-[#4c0a5e] text-[#4c0a5e] text-xs font-bold font-[cursive] hover:bg-[#4c0a5e] hover:text-white transition-all duration-300'
                  >
                    GitHub
                  </a> */}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}