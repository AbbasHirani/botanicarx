import Navbar from "./navbar";

export default function LandingSection() {
  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-start bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Gradient overlay for improved readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 z-0" aria-hidden="true"></div>
      <Navbar />
      <div className="z-10 flex flex-col items-start justify-center text-white rounded-lg p-6 sm:p-10 w-full mt-24 sm:mt-20 mx-2 mb-50">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-left drop-shadow-lg">
          Welcome to Botanic World
        </h1>
        <p className="text-base sm:text-lg md:text-2xl mb-6 sm:mb-8 text-left drop-shadow-lg">
          Exploring nature and knowledge together
        </p>
        <a
          href="#explore"
          className="inline-block bg-gradient-to-r from-green-500 via-lime-500 to-emerald-600 hover:from-emerald-600 hover:to-green-500 focus:from-green-700 focus:to-emerald-700 text-white font-bold py-2 sm:py-3 px-8 sm:px-10 rounded-full shadow-xl transition-all duration-300 text-base sm:text-lg ring-4 ring-green-400/40 focus:ring-8 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-green-300 animate-pulse"
          style={{ boxShadow: "0 4px 24px 0 rgba(34,197,94,0.25)" }}
        >
          Explore Now
        </a>
      </div>
    </div>
  );
}