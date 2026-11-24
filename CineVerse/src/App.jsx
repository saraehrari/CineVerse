
import { Route, Routes } from "react-router-dom";
import Home from'./Pages/Home'
import Aboutus from'./Pages/Aboutus'
import Explore from'./Pages/Explore'
import MovieDetails from'./Pages/MovieDetails'
import Toprated from'./Pages/Toprated'
import TVShows from'./Pages/TVShows'
import Watchlist from'./Pages/Watchlist'
import Navbar from "./Components/Navbar";

function App(){

  return(
    <div>
      <Navbar/>
     <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Explore" element={<Explore />} />
           <Route path="/MovieDetails.id" element={<MovieDetails />} />
            <Route path="/Toprated" element={<Toprated />} />
             <Route path="/TVShows" element={<TVShows />} />
              <Route path="/Watchlist" element={<Watchlist />} />
      </Routes>
    </div>
  )




}
export default App;