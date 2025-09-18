"use client";

import { useState, useEffect } from "react";

export default function App() {
  const [isAtDetails, setIsAtDetails] = useState(false);

  // Sync arrow with scroll position
  useEffect(() => {
    const handleScroll = () => {
      const details = document.getElementById("details");
      if (details) {
        const rect = details.getBoundingClientRect();
        const inView = rect.top <= window.innerHeight / 2;
        setIsAtDetails(inView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans text-gray-900">
      {/* Hero Section */}
      <section
        id="hero"
        className="h-screen bg-cover bg-center relative flex flex-col justify-between"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Top Bar */}
        {/* <header className="absolute top-0 left-0 right-0 flex justify-between items-center px-8 py-6 z-20">
          <h1 className="text-2xl font-bold tracking-wide text-white">
            BotanicaRx <span className="text-emerald-500">.</span>
          </h1>
          <a
            href="mailto:you@example.com"
            className="bg-emerald-600 text-white hover:bg-black hover:text-white font-semibold py-2 px-6 rounded-lg shadow transition"
          >
            Contact
          </a>
        </header> */}

        {/* Hero Text */}
        <div className="relative z-10 flex-1 flex items-center">
          <div className="text-left text-white max-w-2xl px-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Redefining the Future of Crops
            </h2>
            <p className="text-lg md:text-xl mb-8">
              Something new is coming.
              <br />
              Something that will change how we think about crops, resilience,
              and growth.
            </p>
            <button
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-xl shadow transition text-lg"
            >
                <a href="#details">
                    Explore!    
                </a>          
            </button>
          </div>
        </div>

        {/* Scroll Arrow */}
        <div className="relative z-10 flex justify-center pb-6">
          <button
            onClick={() => {
              const target = document.getElementById(isAtDetails ? "hero" : "details");
              target?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            aria-label="Scroll toggle"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/90 hover:bg-white text-gray-900 shadow-lg transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`w-6 h-6 transform transition-transform duration-500 ${
                isAtDetails ? "rotate-180" : "rotate-0"
              }`}
            >
              <path
                fillRule="evenodd"
                d="M12 3.75a.75.75 0 01.75.75v12.19l4.72-4.72a.75.75 0 111.06 1.06l-6 6a.75.75 0 01-1.06 0l-6-6a.75.75 0 111.06-1.06l4.72 4.72V4.5a.75.75 0 01.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}
