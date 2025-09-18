"use client";
import React from "react";

export default function KeyBenefits() {
  const benefits = [
    {
      title: "Saves Crops",
      desc: "Protects plants naturally without harsh chemicals.",
      icon: "🌱",
    },
    {
      title: "Boosts Profitability",
      desc: "Helps crops thrive and produce higher yields.",
      icon: "💰",
    },
    {
      title: "Sustainable",
      desc: "Designed to withstand drought and harsh conditions.",
      icon: "🌍",
    },
    {
      title: "Next-Gen Farming",
      desc: "Simple application and measurable benefits for growers.",
      icon: "🚀",
    },
  ];

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-black">
      <div className="mx-auto max-w-7xl px-4 text-center py-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white dark:text-white mb-4">Key Benefits</h2>
        <p className="mx-auto text-center text-neutral-300 max-w-3xl mb-8 text-base md:text-xl">Our farming solution helps growers protect crops, increase yields, and build sustainable, resilient operations.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 auto-rows-fr items-stretch">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="w-full max-w-[20rem] bg-white/95 dark:bg-neutral-900 shadow-lg rounded-lg p-6 flex flex-col justify-between items-center text-center h-full transform transition-all duration-300 md:hover:shadow-xl md:hover:scale-105 mx-auto"
            >
              {/* Icon */}
              <div className="mb-6 text-8xl w-20 h-20 flex items-center justify-center">{b.icon}</div>

              {/* Heading */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-3">{b.title}</h3>

              {/* Description */}
              <p className="text-lg md:text-base text-gray-600 dark:text-neutral-300 mt-3">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
      {/* layered overlay: gradient + backdrop blur + mask for smoother transition */}
      <div className="absolute bottom-[-9rem] left-0 w-full h-56 pointer-events-none z-30">
        {/* soft gradient to darken progressively */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90 opacity-95" />

        {/* backdrop blur layer to smooth pixels underneath */}
        <div className="absolute inset-0 backdrop-blur-3xl opacity-30" />

        {/* mask to feather the top of the overlay so the transition is smoother */}
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent_10%,black_85%)]" />
      </div>
    </section>
  );
}
