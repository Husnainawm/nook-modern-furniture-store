"use client"

import { motion } from 'motion/react'
import { useState, useEffect } from 'react'
import MouseHover from './MouseHover'

const Data =[
  {
    idx :1,
    pic : "Hero Banner/5-1.webp",
    title: "Quite Luxury",
    uppara: "SHAPE YOUR ATMOSPHERE",
    link:"Stop Lightning"
  },
  {
    idx :2,
    pic : "Hero Banner/6-1.webp",
    title: "Urban Sophistication",
    uppara: "MASTER YOUR SETTING",
    link:"Explore Collection"
  },
  {
    idx :3,
    pic : "Hero Banner/main-banner-7-desktop.webp",
    title: "Art of Style",
    uppara: "DESIGN FOR MORDERN LIVING",
    link:"View Collection",
    Shop: "Shop the Look"
  }

]

const HeroSection = () => {
  const [current, setCurrent] = useState(0)

  const handleDirection = (dir) => {
    // dir = -1 (left) ya 1 (right)
    setCurrent((prev) => (prev + dir + Data.length) % Data.length)
  }

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % Data.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [current])

  return (
    <div className="relative w-full overflow-hidden">
      <MouseHover
      onDirection={handleDirection}
      >
      {/* Sliding track */}
      <motion.div
        className="flex"
        animate={{ x: `-${current * 100}%` }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        {Data.map((elem) => (
          <div key={elem.idx} className="relative w-full shrink-0">
            <img src={elem.pic} className="w-full block" />

            {/* Text overlay */}
            <div className="absolute bottom-4 md:bottom-20 flex flex-col justify-center gap-2 md:gap-5 pl-4 md:pl-17 text-white">
              <p className="text-sm">{elem.uppara}</p>
              <h2 className="text-xl md:text-6xl max-w-90 font-sans">{elem.title}</h2>
              <div className="flex gap-2 md:gap-5">
                <a className="underline underline-offset-10 text-sm sm:text-" href="#">{elem.link}</a>
                {elem.Shop && (
                  <a className="underline underline-offset-10" href="#">{elem.Shop}</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Dots */}
      <div className="hidden  absolute bottom-5 left-1/2 -translate-x-1/2 md:flex items-center gap-3 z-20">
 {Data.map((_, i) => (
    <button
      key={i}
      onClick={() => setCurrent(i)}
      aria-label={`Go to slide ${i + 1}`}
      className={`h-3 rounded-full cursor-pointer transition-all duration-300 shadow-md ring-1 ring-black/20 ${
        current === i ? 'w-8 bg-white' : 'w-3 bg-white/60 hover:bg-white/90'
      }`}
    /> 
  ))}
</div>
</MouseHover >
    </div>

  )
}

export default HeroSection