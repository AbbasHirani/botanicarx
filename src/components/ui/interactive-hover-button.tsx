"use client";
import React, { use, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Be Part of the Future", className, ...props }, ref) => {
   const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      const formData = new FormData(form);
      // You can handle form submission here, e.g., send formData to an API
      setIsSubmitted(true);
    };

     useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
          if (e.key === "Escape") {
            setIsModalOpen(false);
            setIsSubmitted(false);
          }
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
      }, []);
      
  return (
    <>
    <button
      onClick={() => setIsModalOpen(true)}
      ref={ref}
      className={cn(
        "group relative inline-flex items-center justify-center min-w-[10rem] w-auto cursor-pointer overflow-hidden rounded-full border bg-white text-black px-5 py-2 text-center font-semibold transition-colors duration-300",
        className,
      )}
      {...props}
    >
      <span className="inline-block translate-x-0 transition-all duration-300 group-hover:-translate-x-full group-hover:opacity-0 text-black group-hover:text-white whitespace-nowrap">
        {text}
      </span>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-full items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <span className="text-white whitespace-nowrap">{text}</span>
        <ArrowRight />
      </div>
      <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-primary/20 transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-primary" />
    </button>
    {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 text-center relative">
            <h2 className="text-2xl font-bold mb-4 text-black">Join the Future</h2>
            {!isSubmitted ? (
              <>
                <p className="text-gray-600 mb-6">
                  Sign up to be first in line when Botanicarx launches.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="w-full text-black border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                  <button
                    type="submit"
                    className="bg-white text-black hover:bg-black hover:text-white font-semibold py-3 rounded-lg transition"
                  >
                    Notify Me
                  </button>
                </form>
              </>
            ) : (
              <p className="text-green-600 font-semibold">
                🎉 Thanks for signing up! We’ll be in touch.
              </p>
            )}
            <button
              onClick={() => {
                setIsModalOpen(false);
                setIsSubmitted(false);
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>  
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
