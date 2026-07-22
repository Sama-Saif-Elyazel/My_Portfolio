import React from 'react'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaSpotify } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <div className='bg-[#ecd7ef] h-screen flex items-center justify-center scroll-mt-24' id='contact'>
        {/* <img src="./assets/images/background.jpeg" className=' w-full h-full object-cover' /> */}
        <div className='absolute flex flex-col items-center justify-center gap-10 p-20'>
          <h1 className='text-6xl font-bold text-[#4c0a5e] font-[cursive]'>Contact</h1>
          <div className='flex flex-row gap-40 p-20'>
            <div className='flex flex-col justify-center items-center gap-5'>
              <h1 className='text-4xl font-bold text-[#4c0a5e] font-[cursive]'>Email</h1>
              <p className='text-2xl text-[#4c0a5e] font-[cursive]'>sama.elyazel@gmail.com</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-5'>
              <h1 className='text-4xl font-bold text-[#4c0a5e] font-[cursive]'>Phone</h1>
              <p className='text-2xl text-[#4c0a5e] font-[cursive]'>01127836069</p>
            </div>
            <div>
              <h1 className='text-4xl font-bold text-[#4c0a5e] font-[cursive]'>Social Media</h1>
              <div className='flex flex-row gap-5 mt-5'>
                <a href="https://www.facebook.com/semsma.ana.39/" target="_blank" rel="noopener noreferrer"><FaFacebook className='w-8 h-8 text-[#4c0a5e] hover:text-blue-900 hover:cursor-pointer' /></a>
                <a href="https://www.instagram.com/sama_saif826?igsh=MWdqNmk4NWV6bWVkdw==" target="_blank" rel="noopener noreferrer"><FaInstagram className='w-8 h-8 text-[#4c0a5e] hover:text-pink-900 hover:cursor-pointer ml-5' /></a>
                <a href="https://www.linkedin.com/in/sama-saif-356ba241b?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer"><FaLinkedin className='w-8 h-8 text-[#4c0a5e] hover:text-blue-900 hover:cursor-pointer ml-5' /></a>
                <a href="https://www.youtube.com/channel/UCXoQZtHkKzj3nLhXoV9r8w" target="_blank" rel="noopener noreferrer"><FaYoutube className='w-8 h-8 text-[#4c0a5e] hover:text-red-900 hover:cursor-pointer ml-5' /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
