import React, { useState } from 'react';


const ImageSlider = () => {
  const images = [
    './assets/images/slide1.jpeg',
    './assets/images/slide2.jpeg',
    './assets/images/slide3.jpeg',
  ]; 
    const [currentIndex, setCurrentIndex] = useState(0);   

    const prevSlide = () => {   
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const nextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <>
        <div className='bg-[#ecd7ef] h-screen flex-row items-center justify-center scroll-mt-24' id="image-slider">
            <h1 className='text-4xl font-bold text-[#4c0a5e] font-[cursive] mt-10'>Image Slider</h1>
            <div className='h-150 w-180 m-auto py-12 px-4 relative group'>
                <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 shadow-lg' 
                style={{ backgroundImage: `url(${images[currentIndex]})` }}>
                </div>

                <div className='hidden group-hover:block absolute top-[50%]-translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition'>
                    <button onClick={prevSlide}>Prev</button>
                </div>
                <div className='hidden group-hover:block absolute top-[50%]-translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition'>
                    <button onClick={nextSlide}>Next</button>
                </div>

                <div className='flex top-4 justify-center py-2'> 
                    {images.map((slide, index) => (
                        <div key={index} className={`text-2xl cursor-pointer ${currentIndex === index ? 'text-[#963f75]' : 'text-gray-500'}`} onClick={() => setCurrentIndex(index)}>
                            &#9679;
                        </div>
                    ))}
                </div>
                    

            </div>
        </div>
        </>
    );
};

export default ImageSlider;
