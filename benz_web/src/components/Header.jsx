import React, { useState } from 'react'
import favicon from '../assets/favicon.ico'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
     
      <div className="bg-black text-white relative flex items-center p-4">
     
        <div className="hidden md:flex space-x-6 items-center">
          <span className="cursor-pointer">Deutisch</span>
          <span>|</span>
          <span className="cursor-pointer">English</span>
          <span className="cursor-pointer">Providers / privacy</span>
        </div>

     
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img src={favicon} alt="benzi logo" className="w-10 h-10" />
        </div>

        <div className="hidden md:flex space-x-6 items-center ml-auto">
          <input
            type="text"
            placeholder="search"
            className="w-64 rounded-md text-center text-black px-2 py-1"
          />
          <span className="flex items-center space-x-1 cursor-pointer">
            <span>Login</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </div>

     
        <button
          className="md:hidden ml-auto text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      
      <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden`}>
        <nav className="bg-zinc-950 text-white flex flex-col gap-4 p-3 text-sm">
          <span className="cursor-pointer">Deutisch</span>
          <span className="cursor-pointer">English</span>
          <span className="cursor-pointer">Providers / privacy</span>
          <input
            type="text"
            placeholder="search"
            className="w-full rounded-md text-center text-black px-2 py-1"
          />
          <span className="cursor-pointer">Vehicles</span>
          <span className="cursor-pointer">Art & culture</span>
          <span className="cursor-pointer">Sustainability</span>
          <span className="cursor-pointer">Design</span>
          <span className="cursor-pointer">Innovation</span>
          <span className="cursor-pointer">Exlusive</span>
          <span className="cursor-pointer">Login</span>
        </nav>
      </div>

     
      <div className="hidden md:block">
        <nav className="bg-zinc-950 text-white flex justify-center gap-6 p-3 text-base">
          <span className="cursor-pointer">Vehicles</span>
          <span className="cursor-pointer">Art & culture</span>
          <span className="cursor-pointer">Sustainability</span>
          <span className="cursor-pointer">Design</span>
          <span className="cursor-pointer">Innovation</span>
          <span className="cursor-pointer">Exlusive</span>
        </nav>
      </div>
    </>
  )
}

export default Header
