
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <main>
      <section className="relative min-h-[700px] flex items-center overflow-hidden bg-[#0B0912]">

        {/* Navbar */}
        <Navbar />

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://image.tmdb.org/t/p/original/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg')",
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0912] via-[#0B0912]/80 to-transparent"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-8 py-24">

          <span className="inline-block text-purple-400 text-sm font-semibold tracking-[3px] mb-5">
            YOUR NEXT FAVORITE MOVIE STARTS HERE
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-white max-w-3xl leading-tight">
            Discover Movies.
            <br />
            Experience
            <span className="text-purple-400"> Stories.</span>
          </h1>

          <p className="text-gray-300 text-lg max-w-xl mt-6 leading-8">
            Explore thousands of movies and TV shows, discover new
            favorites, and find your next unforgettable watch.
          </p>

          <div className="flex flex-wrap gap-4 mt-9">

            <Link
              to="/explore"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition duration-300"
            >
              Explore Movies →
            </Link>

            <Link
              to="/top-rated"
              className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold transition duration-300"
            >
              Top Rated Movies
            </Link>

          </div>
        </div>
      </section>
    </main>
  );
}
