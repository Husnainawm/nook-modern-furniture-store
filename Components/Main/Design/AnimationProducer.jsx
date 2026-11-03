"use client"

import React from 'react'
import { motion } from 'motion/react'


const cards = [
  {
    id: 1,
    title: 'Precise Contouring',
    text: 'Stretch-fabrics engineered to follow the complex, rounded volumes without a single fold or wrinkle.',
    img: 'Theme Images/zoom-3.webp',
  },
  {
    id: 2,
    title: 'Deep Immersion',
    text: 'A revolutionary multi-density foam core that adapts to your body, providing a cocoon-like feeling.',
    img: 'Theme Images/lifestyle.webp',
  },
  {
    id: 3,
    title: 'Master of Curves',
    text: 'He replaced rigid forms with organic freedom, believing furniture should fit people, not spaces.',
    img: 'Theme Images/designer.webp',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

const AnimationProducer = () => {



  return (
    <section className="relative">     
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <img className='h-full w-full object-cover object-[50%_25%]' src="/Theme Images/Animation images/background.webp" />

      </div>
      <section className="relative py-24 mt-[-100vh] w-full z-10 overflow-hidden px-4 sm:px-8">

       <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="mx-auto mb-160 md:mb-180 flex max-w-2xl flex-col items-center px-6 pt-0 md:pt-16 text-center"
    >
      {/* Small label */}
      <motion.p
        variants={item}
        className="text-sm uppercase tracking-[0.2em] text-neutral-800"
      >
        The Palace Heritage
      </motion.p>

      {/* Big heading */}
      <motion.h2
        variants={item}
        className="mt-6 font-normal leading-none text-neutral-900 text-3xl sm:text-5xl lg:text-7xl"
      >
        Pumpkin Sofa
      </motion.h2>

      {/* Description */}
      <motion.p
        variants={item}
        className="mt-3 max-w-md text-base leading-7 text-neutral-800"
      >
        An icon of 1970s revolutionary design, originally created for the
        private apartments of the Elysée Palace.
      </motion.p>
    </motion.div>
        {/* Sofa background image, pinned to the bottom center */}
        <img
          src="/Features/sofa-bg.webp"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/2 w-full max-w-full -translate-x-1/2 object-contain"
        />

        <div className="relative mx-auto max-w-[85%]">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-12 md:grid-cols-3"
          >
            {cards.map((card) => (
              <motion.article key={card.id} variants={item} className="flex flex-col">
                {/* Image */}
                <div className="aspect-4/3 w-full overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Semi-transparent text panel */}
                <div className="min-h-40 bg-white/80 p-6">
                  <h3 className="text-2xl font-normal text-neutral-900">{card.title}</h3>
                  <p className="mt-5 leading-6 text-neutral-800">
                    {card.text}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Button */}
          <div className="mt-10 flex justify-center">
            <motion.a
              href="#"
              initial="rest"
              whileHover="hover"
              className="relative inline-flex overflow-hidden rounded-full bg-gray-800 px-6 py-4 text-sm text-white"
            >
              {/* Color fill: neeche se upar aata hai */}
              <motion.span
                variants={{
                  rest: { y: "100%" },
                  hover: { y: 0 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute rounded-full inset-0 bg-black"
              />

              {/* Text: fill ke upar rehna chahiye */}
              <span className="relative z-10">Discover collection</span>
            </motion.a>
          </div>
        </div>
      </section>

    </section>
  )
}

export default AnimationProducer