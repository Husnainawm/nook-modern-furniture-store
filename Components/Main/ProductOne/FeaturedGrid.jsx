"use client"

import React from 'react'
import { motion } from 'motion/react'

const Cards = [
  {
    idx: 1,
    pic: 'Theme Images/green-sofa_bc362dbb-b66c-415b-a38d-937b01833a7c.webp',
    title: 'Curated Design for Modern Living',
    link: 'Shop Storage',
    big: true,
  },
  {
    idx: 2,
    pic: 'Theme Images/stolik-kolaz-1-mobile.webp',
    title: 'Organic Textures',
    link: 'Shop Tables',
  },
  {
    idx: 3,
    pic: 'Theme Images/lampy-kolaz.webp',
    title: 'Ambient Art',
    link: 'Shop Light',
  },
]

const FeaturedGrid = () => {
  const big = Cards.find((c) => c.big)
  const small = Cards.filter((c) => !c.big)

  return (
    <motion.section
     initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2}}
    className="w-full bg-white px-6 py-4 md:py-8">
      <div className="mx-auto grid max-w-[1740px] grid-cols-1 gap-2 lg:grid-cols-[2fr_1fr]">
        {/* Big card (left) */}
        <a
          href="#"
          className="group relative block min-h-100 overflow-hidden lg:min-h-167.5"
        >
          {big.pic && (
            <img
              src={big.pic}
              alt={big.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-2000 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-black/10" />

          <div className="absolute left-12 top-14 flex max-w-md flex-col items-start gap-3 text-white">
            <h2 className="text-5xl font-sans leading-tight">{big.title}</h2>
            <span className="border-b border-white pb-1 text-sm">
              {big.link}
            </span>
          </div>
        </a>

        {/* Two small cards (right, stacked) */}
        <div className="grid grid-rows-2 gap-2">
          {small.map((elem, i) => (
  <motion.a
  initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2}}
  
  key={elem.idx}
    className="group relative block min-h-75 overflow-hidden"
  >
              {elem.pic && (
                <img
                  src={elem.pic}
                  alt={elem.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-2000 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-black/10" />

              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center text-white">
                <h3 className="text-4xl font-sans">{elem.title}</h3>
                <span className="border-b border-white pb-1 text-sm">
                  {elem.link}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default FeaturedGrid