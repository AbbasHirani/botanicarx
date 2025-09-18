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
          className="inline-block bg-green-600 hover:bg-green-700 focus:bg-green-800 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full shadow-lg transition-all duration-200 text-base sm:text-lg ring-green-400/50 focus:ring-4 hover:scale-105 "
        >
          Explore Now
        </a>
      </div>
    </div>
  );
}