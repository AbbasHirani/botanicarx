"use client";
import React, { useEffect, useState } from "react";
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
      {/* Main CTA button */}
      <button
        onClick={() => setIsModalOpen(true)}
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition-all duration-300",
          "bg-white text-black border border-black",
          "hover:bg-black hover:text-white",
          "group",
          className
        )}
        {...props}
      >
        <span className="flex items-center gap-2">
          {text}
          <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </button>

      {/* Modal */}
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
                    className="w-full text-black border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  {/* Notify Me button - no border */}
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
