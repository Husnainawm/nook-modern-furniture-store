"use client";
import React from "react";
import { motion } from "framer-motion";

const products = [
  { brand: "Miniforms", name: "Acco Miniform Table", price: "$1,500.00", img: "/Tables/Acco/stol-acco-240x120-orzech-miniforms.webp" },
  { brand: "Hay", name: "Accord chair", price: "$200.00", img: "/Chairs/accord/chair-acc-main.webp" },
  { brand: "Sits", name: "Alex sofa", price: "$1,800.00", img: "/Sofas/Alex/sofa-alex-blue.webp" },
  { brand: "Normann Copenhagen", name: "Amédée Chair", price: "$2,010.00", img: "/Chairs/Aemeede/produkt-5-5_8491d8af-490a-42a9-b56c-155481dfddc9.webp" },
  { brand: "Ligne Roset", name: "Anda Armchair", price: "$3,700.00", img: "/Chairs/Anda Chair/produkt-8-3_25cad519-3c40-48ad-be57-df893087fa36.webp" },
];

const sections = [
  { title: "Popular searches", links: ["Table", "Chairs", "Lamp"] },
  { title: "Popular collections", links: ["Beds", "Chairs", "Benches", "Lightning"] },
  {
    title: "Useful links",
    links: ["Tables", "Chairs", "Stools", "Benches", "Storage", "Decor", "TV Cabinets", "Armchairs", "Wardrobes and bookcases"],
  },
];

export default function SearchBar() {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="w-full overflow-auto md:overflow-hidden bg-white text-neutral-900"
    >
      <div className=" px-10 md:px-80 py-12 h-lvh">
      <h2 className="text-center font-sans mb-2 md:mb-5 text md:text-[21px]">Trending searches</h2>

      <div className="flex flex-col gap-3 md:flex-row">
        {/* Left: popular products */}
        <div className="flex-1">
          <h3 className="mb-3 font-sans text-[17px] ">Popular products</h3>
          <motion.div
          className="grid grid-cols-1 md:grid-cols-2 w-190 gap-x-0 gap-y-7">
            {products.map((p) => (
              <motion.a 
              initial={{ opacity: 0 , y:20}}
                  whileInView={{ opacity: 1, y:0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration:0.7, ease: 'easeOut', delay: 0.4}}
              key={p.name} href="#" className="group flex items-center gap-5">
                <div className="h-22.5 w-22.5 shrink-0 bg-neutral-100">
                  <img src={p.img} alt={p.name} className="h-full w-full object-contain" />
                </div>
                <div>
                  <p className="text-xs uppercase text-neutral-400 group-hover:text-blue-400">
                    {p.brand}
                  </p>
                  <p className="text-base group-hover:text-blue-600">{p.name}</p>
                  <p className="text-base">{p.price}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right: link lists */}
        <div
        
        className="w-50 md:w-117.5 border-l px-10 border-neutral-200">
          {sections.map((s, i) => (
            <div
              key={s.title}
              className={i > 0 ? "mt-5 border-t border-neutral-200 pt-5" : " font-sans"}
            >
              <h3 className="mb-2 text-base">{s.title}</h3>
              <motion.ul            
              className="space-y-1.5">
                {s.links.map((l) => (
                  <motion.li
                  initial={{ opacity: 0 , y:20}}
                  whileInView={{ opacity: 1, y:0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4}}
                  key={l}>
                    <a href="#" className="text-neutral-700 hover:underline">
                      {l}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          ))}
        </div>
      </div>
      </div>
    </motion.div>
  );
}