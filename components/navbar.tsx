"use client";   
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold text-green-400 tracking-tight">Botanicarx</span>
            </Link>
          </div>
          {/* Hamburger for mobile */}
          <div className="md:hidden flex items-center">
            <button
              className="text-white focus:outline-none hover:text-green-400 transition-colors duration-200"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
          {/* Center links (desktop) */}
          <div className="hidden md:flex flex-1 justify-center space-x-8">
            <Link href="#home" className="text-white hover:text-green-400 font-medium transition-colors duration-200 hover:underline underline-offset-4">Home</Link>
            <Link href="#about" className="text-white hover:text-green-400 font-medium transition-colors duration-200 hover:underline underline-offset-4">About</Link>
            <Link href="#projects" className="text-white hover:text-green-400 font-medium transition-colors duration-200 hover:underline underline-offset-4">Projects</Link>
          </div>
          {/* Contact Us button (desktop) */}
          <div className="hidden md:flex items-center">
            <Link href="#contact">
              <button className="bg-green-500 hover:bg-green-600 focus:bg-green-700 text-white font-semibold py-2 px-5 rounded-full shadow transition-all duration-200 ring-green-400/50 focus:ring-4 hover:scale-105">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center bg-black/90 rounded-b-lg py-4 gap-4 animate-fade-in-down">
            <Link href="#home" className="text-white hover:text-green-400 font-medium transition-colors duration-200 text-lg hover:underline underline-offset-4" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="#about" className="text-white hover:text-green-400 font-medium transition-colors duration-200 text-lg hover:underline underline-offset-4" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="#projects" className="text-white hover:text-green-400 font-medium transition-colors duration-200 text-lg hover:underline underline-offset-4" onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link href="#contact" className="w-full flex justify-center" onClick={() => setMenuOpen(false)}>
              <button className="bg-green-500 hover:bg-green-600 focus:bg-green-700 text-white font-semibold py-2 px-5 rounded-full shadow transition-all duration-200 w-full max-w-xs ring-green-400/50 focus:ring-4 hover:scale-105">
                Contact Us
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}