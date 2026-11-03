"use client";


import React, { useState, useEffect } from 'react'
import { ChevronDown } from "lucide-react";
import LivingRoom from './LivingRoom';
import DinningRoomMenu from './DinningRoom';
import WebSiteAd from './WebSiteAd'
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";




const links = [
  { label: "Living room", dropdown: true, url:'' },
  { label: "Dining room", dropdown: true, url:'' },
  { label: "Bedroom", dropdown: true, url:'' },
  { label: "Decor", url:'#' },
  { label: "Lightning", dropdown: true, url:'' },
  { label: "Design Service", url:'#' },
  { label: "Inspiration", url:'#' },
  { label: "Sale", sale: true, url:'#' },
  { label: "Blog", url:'/blog' },
  { label: "Presets", dropdown: true, url:'' },
  { label: "Theme Features", url:'#' },
];



const NavarbarTwo = ({onMenuChange }) => {


  const [activeMenu, setActiveMenu] = useState(null);

  const handleClick = (label) => {
    if (label === "Living room") {
      
     return setActiveMenu(<LivingRoom/>);
  };
  if (label === "Dining room") {

      return setActiveMenu(<DinningRoomMenu/>);
  };
  if (label === "Bedroom"){

    return setActiveMenu(<div className='max-w-50 px-7 py-4 bg-white text-center hover:underline absolute left-135 shadow-xl '>
      <ul className="flex flex-col items-center gap-2">
        <li>Beds</li>
        <li>Continential beds</li>
        <li>Benches</li>
        <li>Chairs</li>
        <li>Night Lamps</li>
        <li>Decor</li>
        <li>View All</li>
      </ul>
    </div>);
  };

  if (label === "Lightning"){

    return setActiveMenu(<div className='max-w-50 px-7 bg-white py-4 text-center hover:underline absolute left-190 shadow-xl '>
      <ul className="flex flex-col items-center gap-2">
        <li>Wall lamp</li>
        <li>Floor lamp</li>
        <li>Table lamp</li>
        <li>Outdoor Lamp</li>   
      <li>View All</li>
      </ul>
    </div>);
  };


  if (label === "Presets") {
    console.log("mouseentwe")

      return setActiveMenu(<WebSiteAd/>);
  };
  


}
useEffect(() => {
  onMenuChange?.(!!activeMenu)
  return () => onMenuChange?.(false)
}, [activeMenu])


  return (
    <div className='w-auto'>
      <div className="w-90 lg:w-full justify-items-start px-6 lg:justify-center bg-white lg:flex">
      <ul className="flex flex-col md:flex-row items-center gap-10 py-3">
        {links.map((l) => (
          <li
            key={l.label}
            onMouseEnter={()=> handleClick(l.label)}
            className={`flex cursor-pointer items-center font-semibold gap-1 whitespace-nowrap  transition hover:opacity-70 hover:underline ${
              l.sale ? "text-[#8b1a1a]" : "text-[#1E1B18]"
            }`}
          >
            <Link href ={l.url}>{l.label}</Link>
            {l.dropdown && <ChevronDown size={14} />}
          </li>
        ))}
      </ul>

    </div>

<AnimatePresence>
      {activeMenu && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onMouseEnter={() => setActiveMenu(null)}
          className="fixed inset-0 -z-10 bg-black/40 backdrop-blur-sm"
        />
      )}
    </AnimatePresence>

    <div
      onMouseLeave={() => setActiveMenu(null)}
      className="absolute left-0 right-0 z-50 pb-5"
    >
      {activeMenu}
    </div>


      
    </div>
  )
}


export default NavarbarTwo