"use client"

import React from 'react'
import { motion } from 'motion/react'

const Departments = [
  { idx: 1, title: 'Sofa',     pic: 'Sofas/1_495d6eaa-7e55-442f-88bd-7a463984ca68.webp' },
  { idx: 2, title: 'Chair',    pic: 'Chairs/2_98c0fc34-59bc-4612-8876-6e66c0351218.webp' },
  { idx: 3, title: 'Table',    pic: 'Tables/3_76dd5e2a-1976-4590-ab31-b2ab6a1256ca.webp' },
  { idx: 4, title: 'Bed',      pic: 'Beds/4_38f4d350-64a7-4bd0-a5f6-63b453796fe3.webp' },
  { idx: 5, title: 'Storage',  pic: 'Storages/5_98cd88c6-12f7-4d40-89eb-de5126d63c77.webp' },
  { idx: 6, title: 'Lighting', pic: 'Electronic/6.webp' },
]

// Defined outside the component so they aren't recreated on every render
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const ShopByDepartment = () => {
  return (
    <section className="w-full bg-white py-4 md:py-8">
      <motion.h2
      initial={{opacity:0, y:10}}
      whileInView={{opacity:1, y:0}}
      end={{opacity:0, y:10}}
      transition={{duration:1}}
      className="text-center text-2xl font-sans text-neutral-900">
        Shop by Department
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto mt-2 md:mt-5 grid max-w-7xl grid-cols-2 gap-y-3 md:gap-y-10 px-6 sm:grid-cols-3 lg:grid-cols-6"
      >
        {Departments.map((elem) => (
          <motion.a
            key={elem.idx}
            href="#"
            variants={item}
            className="group flex flex-col items-center gap-0"
          >
            <div className="flex h-40 w-full items-center justify-center">
              {elem.pic && (
                <img
                  src={elem.pic}
                  alt={elem.title}
                  className="max-h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              )}
            </div>

            <p className="text-neutral-800">{elem.title}</p>
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}

export default ShopByDepartment