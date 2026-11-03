"use client";

import React from 'react';
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, CircleUser, ShoppingCart, ArrowRight, X, Package } from "lucide-react"
import CountrySelector from '@/Data/countries'
import SearchBar from '@/Components/Navbar/Navbarfiles/SearchBar'
import { Menu } from 'lucide-react'



const LOGO_URL = "/Nook-logo.svg";



const NavbarOne = ({ showButton, onButtonClick }) => {
  const [focused, setFocused] = useState(false);
  const [sign, setSign] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartCount] = useState(0);
  return (
    <>
      <div>
        <header className="relative w-full top-0 bg-white">
          <div className={` mx-auto flex h-20 max-w-[1900px] items-center justify-${searchOpen ? 'center' : 'between'} gap-6 px-6 md:px-20`}>

            {/* Logo */}
            {!searchOpen && <div className='flex  gap-6'>
              {showButton && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={onButtonClick}
                  className="flex items-center gap-1 text-sm font-medium"
                >
                  <Menu size={24} />
                </motion.button>
              )}
              <Link href="/#" className="shrink-0">
                <img src={LOGO_URL} alt="Nook" className="h-9 w-24 lg:w-auto" />
              </Link>
            </div>
            }



            {/* Search bar (desktop) */}
            <motion.div

              onClick={() => setSearchOpen(true)}
              className={` ${!searchOpen ? 'hidden' : 'flex'} w-full max-w-170 items-center gap-4 rounded-full border bg-white px-7 py-3 md:flex`}
              animate={{
                borderColor: focused ? "#262626" : "#d4d4d4",
                boxShadow: focused
                  ? "0 4px 20px rgba(0,0,0,0.08)"
                  : "0 0 0 rgba(0,0,0,0)",
              }}
              transition={{ duration: 0.2 }}
            >
              <Search size={22} className="shrink-0 text-neutral-800" />
              <input
                type="text"
                placeholder="What can we help you find?"
                className="w-full bg-transparent text-neutral-800 outline-none placeholder:text-neutral-400"
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
              />

            </motion.div>
            {searchOpen && <button onClick={() => setSearchOpen(false)} className='text-3xl'>X</button>}


            {/* Right side */}
            {!searchOpen &&
              <div className="flex shrink-0 items-center gap-5">
                {/* Mobile search icon */}
                <button
                  onClick={() => setSearchOpen(true)}
                  className="md:hidden" aria-label="Search">
                  <Search


                    size={22} />


                </button>

                {/* Currency */}
                <CountrySelector className="hidden md:flex" />

                {/* Account */}
                <motion.button
                  onClick={() => setSign(true)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Account"
                >
                  <CircleUser size={28} strokeWidth={1.6} />
                </motion.button>

                {/* Cart */}
                <motion.button
                  className="relative"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Cart"
                >
                  <Link href="/cart"><ShoppingCart size={28} strokeWidth={1.6} /></Link>
                  {cartCount > 0 && (
                    <motion.span
                      key={cartCount}
                      initial={{ scale: 0.4 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 15 }}
                      className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-neutral-900 text-[11px] text-white"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </motion.button>
              </div>
            }
          </div>

          {searchOpen &&
            <div><SearchBar /></div>}
          {sign && <div className="w-full absolute top-5 right-3 md:right-7 z-40 max-w-95 rounded-3xl bg-white p-6 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-neutral-900">
                Sign in or create account
              </h2>
              <button onClick={() => setSign(false)} className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100">
                <X size={18} />
              </button>
            </div>

            {/* Sign up button -> /account/register */}
            <Link
              href="/acount/register"
              
              onClick={() => setSign(false)} 

              className="mt-5 flex h-12 w-full items-center justify-center rounded-xl bg-[#5433eb] text-base font-semibold text-white hover:bg-[#4526d1]"
            >
              Sign in with shop
            </Link>

            {/* Divider */}
            <div className="my-4 flex items-center gap-4 text-xs text-neutral-500">
              <span className="h-px flex-1 bg-neutral-200" />
              OR
              <span className="h-px flex-1 bg-neutral-200" />
            </div>

            {/* Email */}
            <div className="flex h-12 items-center rounded-xl border border-neutral-300 px-4">
              <input
                type="email"
                placeholder="Email"
                className="h-full flex-1 bg-transparent text-sm outline-none placeholder:text-neutral-500"
              />
              <ArrowRight size={18} className="text-neutral-500" />
            </div>

            <label className="mt-4 flex items-center gap-2 text-sm text-neutral-800">
              <input type="checkbox" className="h-4 w-4 accent-neutral-900" />
              Email me with news and offers
            </label>

            {/* Orders / Profile */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <Link
                href="/account/orders"
                className="flex h-12 items-center justify-center gap-2 rounded-xl border border-neutral-300 text-sm"
              >
                <Package size={16} />
                Orders
              </Link>
              <Link
                href="/account"
                className="flex h-12 items-center justify-center gap-2 rounded-xl border border-neutral-300 text-sm"
              >
                <CircleUser size={16} />
                Profile
              </Link>
            </div>
          </div>}
        </header>

      </div>
    </>
  )
}

export default NavbarOne