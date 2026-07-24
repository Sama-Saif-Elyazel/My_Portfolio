import React from 'react'

export default function About() {
    return (
        <>
            <div className='bg-[#ecd7ef] min-h-screen w-full relative flex flex-col items-center justify-center overflow-x-hidden max-w-full scroll-mt-24 py-5 px-4 pt-0' id='about'>
                <img src="./assets/images/Screenshot (67).png" className='absolute inset-0 z-0 w-full h-full object-cover opacity-80 ' />
                <div className='relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center gap-12 px-6 lg:px-12'>
                    <h1 className=' text-5xl mid:text-6xl font-bold text-[#e1c8e9] font-[cursive] drop-shadow-md pt-6 text-center'>About Me</h1>

                    <div className='flex flex-row md:flex-row items-center justify-center md:justify-between gap-10 md:gap-16 lg:gap-15 w-full px-12 md:px-0 my-auto'>
                       
                        <div className='w-60 h-80 sm:w-72 sm:h-100 md:w-80 md:h-110 shrink-0 overflow-hidden rounded-full shadow-2xl border-4 border-[#e1c8e9] '>
                        <img src="./assets/images/samsom.jpeg" className='w-full h-full object-cover z-9' style={{ borderRadius: '70% / 50%' }} />
                        </div>

                        <div className='flex flex-col justify-center items-center md:items-end text-center md:text-right gap-10 max-w-2xl px-4 md:px-0'>
                            <h2 className='text-4xl sm:text-4xl lg:text-5xl font-bold text-[#e1c8e9] font-[cursive] leading-tight drop-shadow-md'>Hello, <br></br> I'm Sama Saif Elyazel</h2>
                            <h3 className='text-2xl sm:text-3xl lg:text-6xl font-bold text-[#e1c8e9] font-[cursive] leading-tight drop-shadow-md'>Software Engineer</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
