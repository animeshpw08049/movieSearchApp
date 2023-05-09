import Searchmovie from "./Components/Searche_Movie/Searchmovie";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Movielibrary from "./Components/Movie_Library/Movielibrary";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Nav/>
      
    
      
     <Routes>
     <Route path="/home" element={<Searchmovie/> }></Route>
        <Route path="/movielibrary" element={<Movielibrary />} />
      </Routes>

     
    </div>
  );
}

export default App;
