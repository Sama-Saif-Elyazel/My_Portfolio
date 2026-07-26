import React from 'react'
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
  const socialLinks = [
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/sama-saif-elyazel-356ba241b", name: "LinkedIn", color: "hover:text-[#0a66c2]" },
    { icon: <FaGithub />, url: "https://github.com/Sama-Saif-Elyazel", name: "GitHub", color: "hover:text-black" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/sama_saif826?igsh=MWdqNmk4NWV6bWVkdw==", name: "Instagram", color: "hover:text-[#e4405f]" },
    { icon: <FaFacebook />, url: "https://www.facebook.com/semsma.ana.39/", name: "Facebook", color: "hover:text-[#1877f2]" }
  ]

  // رابط Gmail مباشر بيفتح الصفحة جاهزة لكتابة الإيميل
  const gmailWebUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=sama.elyazel@gmail.com";

  return (
    <section id='contact' className='bg-[#ecd7ef] min-h-screen py-24 px-6 flex items-center justify-center scroll-mt-24'>
      <div className='w-full max-w-4xl mx-auto flex flex-col items-center gap-10'>
        
        <div className='text-center flex flex-col items-center gap-2'>
          <span className='bg-[#4c0a5e] text-white text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full shadow-md'>
            Let's Connect 🤝
          </span>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-[#4c0a5e] font-[cursive] drop-shadow-md'>
            Get In Touch
          </h1>
        </div>

        <div className='w-full bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10 hover:shadow-[#4c0a5e]/15 transition-all duration-500'>
          
          <div className='flex flex-col gap-6 w-full md:w-1/2'>
            
            <a 
              href={gmailWebUrl} 
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-4 p-4 rounded-2xl bg-white/60 border border-white/80 shadow-sm hover:shadow-md hover:scale-102 hover:bg-[#4c0a5e] hover:text-white transition-all duration-300 group'
            >
              <div className='p-3.5 bg-[#4c0a5e]/10 rounded-xl text-[#4c0a5e] group-hover:bg-white/20 group-hover:text-white transition-colors text-2xl'>
                <FaEnvelope />
              </div>
              <div className='flex flex-col'>
                <span className='text-xs font-semibold text-[#4c0a5e]/70 group-hover:text-white/80'>Email Me</span>
                <span className='text-sm sm:text-base font-bold text-[#4c0a5e] group-hover:text-white font-[cursive] break-all'>
                  sama.elyazel@gmail.com
                </span>
              </div>
            </a>

            <a 
              href="https://wa.me/201127836069" 
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-4 p-4 rounded-2xl bg-white/60 border border-white/80 shadow-sm hover:shadow-md hover:scale-102 hover:bg-[#4c0a5e] hover:text-white transition-all duration-300 group'
            >
              <div className='p-3.5 bg-[#4c0a5e]/10 rounded-xl text-[#4c0a5e] group-hover:bg-white/20 group-hover:text-white transition-colors text-2xl'>
                <FaWhatsapp />
              </div>
              <div className='flex flex-col'>
                <span className='text-xs font-semibold text-[#4c0a5e]/70 group-hover:text-white/80'>Call / WhatsApp</span>
                <span className='text-base font-bold text-[#4c0a5e] group-hover:text-white font-[cursive]'>
                  01127836069
                </span>
              </div>
            </a>

          </div>

          <div className='hidden md:block w-px h-48 bg-[#4c0a5e]/15'></div>

          <div className='flex flex-col items-center text-center gap-6 w-full md:w-1/2'>
            <h2 className='text-2xl font-bold text-[#4c0a5e] font-[cursive]'>
              Follow & Connect
            </h2>
            <p className='text-sm text-[#4c0a5e]/80 font-medium max-w-xs'>
              Feel free to reach out through any of these platforms!
            </p>

            <div className='flex flex-wrap justify-center gap-4 pt-2'>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={social.name}
                  className={`p-4 bg-white/70 border border-white rounded-2xl text-2xl text-[#4c0a5e] shadow-sm hover:scale-115 hover:-translate-y-1 hover:shadow-lg ${social.color} transition-all duration-300`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}