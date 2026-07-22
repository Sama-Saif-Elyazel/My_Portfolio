import React from 'react'

export default function About() {
    return (
        <>
            <div className='bg-[#ecd7ef] min-h-screen w-full relative flex flex-col items-center justify-center gap-20 overflow-x-hidden max-w-full scroll-mt-24' id='about'>
                <img src="./assets/images/Screenshot (67).png" className='absolute inset-0 z-0 w-full h-full object-cover opacity-80 ' />
                <div className='relative z-10 flex flex-col items-center justify-center text-center gap-5 p-20'>
                    <h1 className=' text-6xl mid:text-6xl font-bold text-[#cfa4db] font-[cursive] pt-20'>About Me</h1>
                   
                    <div className='flex flex-row'>
                        <img src="./assets/images/samsom.jpeg" className='w-1/2 h-auto flex col-span-1 object-cover z-9' style={{ borderRadius: '60%' }} />
                        <div className='flex flex-col justify-center items-center gap-5'>
                            
                            <h1 className='text-5xl font-bold text-[#cfa4db] font-[cursive]'>Hello, I'm Sama Saif Elyazel</h1>
                            <h1 className='text-6xl font-bold text-[#cfa4db] font-[cursive]'>Software Engineer</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
