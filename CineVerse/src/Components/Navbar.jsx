import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#100d18] border-b border-white/10 px-8 py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <Link to="/" className="text-3xl font-bold text-white">
          Cine<span className="text-purple-500">Verse</span>.
        </Link>

        <div className="flex items-center gap-8">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Explore", path: "/explore" },
            { name: "Top Rated", path: "/top-rated" },
            { name: "TV Shows", path: "/tv-shows" },
            { name: "Watchlist", path: "/watchlist" },
          ].map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-300 hover:text-purple-400 ${
                  isActive ? "text-purple-400" : "text-gray-300"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

      </div>
    </nav>
  );
}