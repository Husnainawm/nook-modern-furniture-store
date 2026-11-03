'use client'
import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import NavbarOne from '@/Components/Navbar/Navbarfiles/NavbarOne'
import NavbarTwo from './Navbarfiles/NavarbarTwo'
import useMediaQuery from './Navbarfiles/useMediaQuery'



const Navbar = () => {
  const [inView, setInView] = useState(true)
  const [open, setOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
        if (entry.isIntersecting) setOpen(false)
      },
      { rootMargin: '-80px 0px 0px 0px' }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  },[])

  useEffect(() => {
  if (!open) return

  const startY = window.scrollY

  const onScroll = () => {

    if (Math.abs(window.scrollY - startY) > 40) setOpen(false)
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  return () => window.removeEventListener('scroll', onScroll)
}, [open])

const isSmall = useMediaQuery("(max-width: 767px)"); // md se neeche

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      setInView(entry.isIntersecting)
      if (entry.isIntersecting && !isSmall) setOpen(false)
    },
    { rootMargin: '-80px 0px 0px 0px' }
  )
  if (ref.current) observer.observe(ref.current)
  return () => observer.disconnect()
}, [isSmall])

// slide band ho to backdrop/menu state bhi reset ho
useEffect(() => {
  if (!open) setMenuOpen(false)
}, [open])

  return (
    <>
      {/* NavbarOne: always fixed */}
     <div className="fixed left-0 top-0 z-55 h-20 w-full shadow-xl/3 bg-white">
  <NavbarOne
    showButton={isSmall || (!inView && !open)}
    onButtonClick={() => setOpen(!open)}
  />
</div>

      {/* NavbarTwo in normal flow (this is what we watch) */}
      <div ref={ref} className="relative z-50 pt-20">
        {!isSmall && <NavbarTwo onMenuChange={setMenuOpen} />}

      </div>
      <AnimatePresence>
  {menuOpen && (
    <motion.div
      key="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="pointer-events-none fixed inset-0 z-40 bg-gray-200/50 backdrop-blur-sm"
    />
  )}
</AnimatePresence>

      {/* NavbarTwo again, slides in under NavbarOne when button is clicked */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.3 }}
      className="fixed left-0 top-20 z-50 w-full bg-white shadow-md max-h-[calc(100dvh-5rem)] overflow-y-auto"
          >
      <NavbarTwo onMenuChange={setMenuOpen} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar