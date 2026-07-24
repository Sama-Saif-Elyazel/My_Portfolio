import React, { useState } from 'react'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            <div className='fixed top-0 bg-[#4c0a5e] h-25 w-full flex items-center justify-between px-2 z-50 gap-6 overflow-x-hidden max-w-full'>
                <div>
                    <h1 className='text-4xl font-bold text-[#db76ea] font-[cursive] hover:text-[#e7cae8] hover:cursor-pointer whitespace-nowrap'>Sama Saif Elyazel</h1>
                </div>
                <div className='text-xl gap-5 hidden md:flex overflow-x-hidden max-w-full'>
                    <a href="#home" className='text-[#db76ea] font-[cursive] hover:text-[#e7cae8] hover:cursor-pointer'>Home</a>
                    <a href="#about" className='text-[#db76ea] font-[cursive] hover:text-[#e7cae8] hover:cursor-pointer'>About Me</a>
                    <a href="#skills" className='text-[#db76ea] font-[cursive] hover:text-[#e7cae8] hover:cursor-pointer'>Skills</a>
                    <a href="#projects" className='text-[#db76ea] font-[cursive] hover:text-[#e7cae8] hover:cursor-pointer'>Projects</a>
                    <a href="#contact" className='text-[#db76ea] font-[cursive] hover:text-[#e7cae8] hover:cursor-pointer'>Contact</a>
                    <a href="#certificates" className='text-[#db76ea] font-[cursive] hover:text-[#e7cae8] hover:cursor-pointer'>Certificates</a>
                </div>
                <button className='fixed right-10 top-10 md:hidden text-[#db76ea] font-[cursive] hover:text-[#e7cae8] hover:cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
                    {isMenuOpen ? 'Close' : 'Menu'}
                </button>

                {isMenuOpen && (
                    <div className='fixed right-5 top-25 z-50 md:hidden bg-[#4c0a5e] text-[#db76ea] font-[cursive] flex flex-col items-center gap-4 py-4 overflow-x-hidden max-w-full'>
                        <a href="#home" className='hover:text-[#e7cae8] hover:cursor-pointer'>Home</a>
                        <a href="#about" className='hover:text-[#e7cae8] hover:cursor-pointer'>About Me</a>
                        <a href="#skills" className='hover:text-[#e7cae8] hover:cursor-pointer'>Skills</a>
                        <a href="#projects" className='hover:text-[#e7cae8] hover:cursor-pointer'>Projects</a>
                        <a href="#contact" className='hover:text-[#e7cae8] hover:cursor-pointer'>Contact</a>
                        <a href="#certificates" className='hover:text-[#e7cae8] hover:cursor-pointer'>Certificates</a>
                    </div>
                )}
            </div>
        </>
    )
}
