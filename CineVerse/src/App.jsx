import { Route, Routes } from "react-router-dom";
import Home from'./Pages/Home'
import Home from'./Pages/Aboutus'
import Home from'./Pages/Explore'
import Home from'./Pages/MovieDetails'
import Home from'./Pages/Toprated'
import Home from'./Pages/TVShows'
import Home from'./Pages/Watchlist'




function App(){

  return(
    <div>
     <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/" element={<Aboutus />} />
          <Route path="/" element={<Explore />} />
           <Route path="/" element={<MovieDetails />} />
            <Route path="/" element={<Toprated />} />
             <Route path="/" element={<TvShows />} />
              <Route path="/" element={<Watchlist />} />
      </Routes>
    </div>
  )




}
export default App;