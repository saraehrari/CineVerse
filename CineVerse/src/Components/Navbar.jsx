import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
   <nav className="absolute top-0 left-0 w-full z-50 bg-gradient-to-b from-[#0B0912]/90 to-transparent px-8 py-5">
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
            { name: "Favorite", path: "/Favorite" },
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