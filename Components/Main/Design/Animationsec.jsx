"use client"

import React from 'react'
import { motion, useScroll, useTransform, useSpring } from "framer-motion";


    


const Animationsec = () => {
   

    const { scrollYProgress } = useScroll();

  // scroll position ke hisab se rotation: 0 se 30 degree tak
  const rawRotate = useTransform(scrollYProgress, [0, 1], [-70, 20]);

  // spring se smooth aur slow movement
  const rotate = useSpring(rawRotate, { stiffness: 50, damping: 20 });
    
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

  return (
    <section>
        <div className="sticky top-0 h-116 md:h-screen w-full overflow-hidden ">
            <div className='relative flex flex-col gap-8 items-center top-28 md:top-64 mx-auto text-center w-[60%]'>
            <p className='text-sm'>GET CREATIVE WITH US</p>
            <h1 className='text-4xl md:text-6xl lg:text-9xl font-medium'>
                Check over 10,000 Inspirations
            </h1>
            <motion.a
              href="#"
              initial="rest"
              whileHover="hover"
              className="relative inline-flex overflow-hidden border w-28 border-black/15 rounded-full bg-white px-6 py-4 text-sm hover:text-white"
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
              <span className="relative z-10">See More</span>
            </motion.a>
            </div>

        </div>
        <section className="relative py-24 mt-[-100vh] w-full z-10 overflow-hidden px-4 sm:px-8">
            <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className="mb-150 flex max-w-3xl flex-col items-center px-6 pt-200 text-center"
                >
                    <motion.div
                    style={{ rotate }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    
                            variants={item}
                            className="relative right-30 w-[65%]"
                          >
                            <img src='/Theme Images/Animation images/100i9x_W.webp' />
                          </motion.div>
                </motion.div>
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className="mb-150 flex max-w-3xl flex-col items-center px-6 pt-0 text-center"
                >
                    <motion.div
                    style={{ rotate }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    
                            variants={item}
                            className="relative -right-24 md:-right-70 lg:-right-280 w-[65%]"
                          >
                            <img src='/Theme Images/Animation images/00rwz_W.webp' />
                          </motion.div>
                </motion.div>
                 <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className="mb-150 flex max-w-3xl flex-col items-center px-6 pt-0 text-center"
                >
                    <motion.div
                    style={{ rotate }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    
                            variants={item}
                            className="w-[64%]"
                          >
                            <img src='/Theme Images/Animation images/11030245_i_vue_1.webp' />
                          </motion.div>
                </motion.div>
        </section>

    </section>
  )
}

export default Animationsec
