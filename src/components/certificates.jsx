import React, { useState } from 'react'

export default function Certificates() {
  const certificatesList = [
    {
      id: 1,
      title: "Web Development by React",
      issuer: "Creativa Hub Aswan / TIEC",
      image: "./assets/images/slide1.jpeg",
      description: "Comprehensive training on modern web technologies including React and Tailwind."
    },
    {
      id: 2,
      title: "Web Development Fundamentals",
      issuer: "Creativa Hub Aswan / TIEC",
      image: "./assets/images/slide3.jpeg",
      description: "Foundational certification covering semantic HTML5 structures and responsive web styling using CSS3."
    },
    {
      id: 3,
      title: "Programming with Python",
      issuer: "Creativa Hub Aswan / TIEC",
      image: "./assets/images/slide2.jpeg",
      description: "Foundational programming principles, algorithms, and object-oriented structure."
    },
    {
      id: 4,
      title: "Data Analysis & Visualization",
      issuer: "Power BI & Excel",
      image: "./assets/images/",
      description: "Certification in data transformation, cleaning, and building interactive analytics dashboards."
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? certificatesList.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === certificatesList.length - 1 ? 0 : prev + 1))
  }

  return (
    <section
      id="certificates"
      className="bg-[#ecd7ef] min-h-screen py-24 px-4 sm:px-8 flex flex-col items-center justify-center scroll-mt-24"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-8">

        {/* عنوان الصفحة */}
        <div className="text-center flex flex-col items-center gap-2">
          <span className="bg-[#4c0a5e] text-white text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full shadow-md">
            Achievements & Learning 📜
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#4c0a5e] font-[cursive] drop-shadow-md">
            My Certificates
          </h1>
        </div>

        {/* كارت عرض الشهادة الرئيسي */}
        <div className="w-full bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col items-center gap-6 relative group">

          {/* إطار الصورة + أزرار التنقل */}
          <div className="relative w-full max-w-3xl h-64 sm:h-96 md:h-[450px] rounded-2xl overflow-hidden shadow-xl border-4 border-white/80 bg-[#4c0a5e]/5">

            {/* صورة الشهادة المعروضة */}
            <img
              src={certificatesList[currentIndex].image}
              alt={certificatesList[currentIndex].title}
              className="w-full h-full object-contain bg-black/5 transition-all duration-500 ease-in-out"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/800x500/4c0a5e/ffffff?text=Certificate+" + (currentIndex + 1)
              }}
            />

            {/* زرار السابق (Prev) */}
            <button
              onClick={prevSlide}
              aria-label="Previous Certificate"
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#4c0a5e]/80 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xl sm:text-2xl shadow-lg hover:bg-[#db76ea] hover:text-[#4c0a5e] hover:scale-110 active:scale-95 transition-all duration-300 backdrop-blur-sm"
            >
              ❮
            </button>

            {/* زرار التالي (Next) */}
            <button
              onClick={nextSlide}
              aria-label="Next Certificate"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#4c0a5e]/80 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xl sm:text-2xl shadow-lg hover:bg-[#db76ea] hover:text-[#4c0a5e] hover:scale-110 active:scale-95 transition-all duration-300 backdrop-blur-sm"
            >
              ❯
            </button>

            {/* عداد الشهادات في الزاوية */}
            <span className="absolute top-4 right-4 bg-[#4c0a5e]/80 text-white text-xs font-bold font-[cursive] px-3 py-1 rounded-full shadow-md backdrop-blur-sm">
              {currentIndex + 1} / {certificatesList.length}
            </span>
          </div>

          {/* تفاصيل الشهادة (العنوان والوصف) */}
          <div className="text-center flex flex-col items-center gap-2 max-w-2xl px-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#4c0a5e] font-[cursive]">
              {certificatesList[currentIndex].title}
            </h2>
            <p className="text-sm sm:text-base font-semibold text-[#8b23a7]">
              🏛️ {certificatesList[currentIndex].issuer}
            </p>
            <p className="text-xs sm:text-sm text-[#4c0a5e]/80 leading-relaxed font-medium">
              {certificatesList[currentIndex].description}
            </p>
          </div>

          {/* النقاط التفاعلية (Pagination Dots) */}
          <div className="flex items-center gap-3 pt-2">
            {certificatesList.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`transition-all duration-300 rounded-full ${currentIndex === index
                    ? 'w-8 h-3 bg-[#4c0a5e] shadow-md'
                    : 'w-3 h-3 bg-[#4c0a5e]/30 hover:bg-[#db76ea]'
                  }`}
              />
            ))}
          </div>

          {/* مصغرات الصور (Thumbnails) للتنقل المباشر */}
          <div className="flex items-center justify-center gap-3 pt-2 overflow-x-auto w-full max-w-md">
            {certificatesList.map((cert, index) => (
              <div
                key={cert.id}
                onClick={() => setCurrentIndex(index)}
                className={`w-16 h-12 sm:w-20 sm:h-14 rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-300 shrink-0 ${currentIndex === index
                    ? 'border-[#4c0a5e] scale-105 shadow-md ring-2 ring-[#db76ea]'
                    : 'border-white/60 opacity-60 hover:opacity-100 hover:scale-100'
                  }`}
              >
                <img
                  src={cert.image}
                  alt="thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}