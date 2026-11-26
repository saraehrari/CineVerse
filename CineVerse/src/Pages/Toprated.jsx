

import { useEffect, useState } from "react";

export default function TopRated() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopRated = async () => {
      try {
        const response = await fetch(
          "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZmJlNDRkMmY0NmJlMGJlNDU1ZDljN2Y1NjJhNzQ2ZiIsIm5iZiI6MTc5NTY2OTE5NC4zNzY5OTk5LCJzdWIiOiI2YjA3YmNjYTEzZDhmODg1ZDMxMWRhZDgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.FxagpDMigyYRU0KBNRE9W-LZZW5KRVnNcoQNqT9uNlU",
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
              accept: "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch top rated movies");
        }

        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopRated();
  }, []);

  return (
    <section className="min-h-screen bg-[#0B0912] px-8 py-12">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-white mb-3">
          Top Rated <span className="text-purple-500">Movies</span>
        </h1>

        <p className="text-gray-400 mb-10">
          Discover the highest-rated movies of all time.
        </p>

        {loading ? (
          <p className="text-white">Loading top rated movies...</p>
        ) : (

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

            {movies.map((movie) => (
              <div
                key={movie.id}
                className="bg-[#100D18] rounded-xl overflow-hidden border border-white/10 hover:border-purple-500 transition duration-300"
              >

                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : "https://placehold.co/500x750/100D18/FFFFFF?text=No+Poster"
                  }
                  alt={movie.title}
                  className="w-full h-72 object-cover"
                />

                <div className="p-4">
                  <h3 className="text-white font-semibold truncate">
                    {movie.title}
                  </h3>

                  <div className="flex justify-between mt-3">
                    <span className="text-yellow-400 text-sm">
                      ⭐ {movie.vote_average.toFixed(1)}
                    </span>

                    <span className="text-gray-400 text-xs">
                      {movie.release_date?.slice(0, 4)}
                    </span>
                  </div>
                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </section>
  );
}
