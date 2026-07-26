import React, { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className='fixed top-4 inset-x-0 z-50 w-[92%] max-w-6xl mx-auto'>
      <div className='bg-[#4c0a5e]/80 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 flex items-center justify-between shadow-2xl transition-all duration-300'>

        <a href="#home" className='text-2xl sm:text-3xl font-bold text-[#db76ea] font-[cursive] hover:text-white transition-colors'>
          Sama Saif Elyazel
        </a>

        <div className='hidden md:flex items-center gap-6'>
          {navLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href} 
              className='text-white/90 hover:text-[#db76ea] font-[cursive] font-medium transition-all hover:scale-105'
            >
              {link.name}
            </a>
          ))}
        </div>

        <button 
          className='md:hidden text-[#db76ea] hover:text-white p-2 rounded-xl bg-white/10 border border-white/20 focus:outline-none'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>

      </div>

      {isMenuOpen && (
        <div className='md:hidden mt-3 bg-[#4c0a5e]/95 backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex flex-col items-center gap-4 shadow-2xl transition-all animate-fadeIn'>
          {navLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className='text-white font-[cursive] text-lg hover:text-[#db76ea] transition-colors'
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}