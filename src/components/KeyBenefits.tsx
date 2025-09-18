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
    </section>
  );
}
