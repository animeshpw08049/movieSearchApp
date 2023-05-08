import React from "react";
import { useState } from "react";
import axios from "axios";
import "./Searchmovie.css";
import MovieAction from "./Redux_Pipeline/MovieAction";
import { addAction } from "./Redux_Pipeline/AddAction";
import { useDispatch } from "react-redux";

function Searchmovie(props) {
  const [text, setText] = useState("Search Movie");
  const [movies, setMovies] = useState([]);

  const dispatch = useDispatch();

  const changeText = (event) => {
    setText(event.target.value);
  };
  const getMovie = (e) => {
    e.preventDefault();
    axios
      .get(` https://www.omdbapi.com/?apikey=b6862c13&s=${text}`)

      .then((response) => {
        MovieAction(response.data.Search, dispatch);

        setMovies(response.data.Search);
      });
  };

  const getAdd = (index) => {
    const data = movies[index];
    console.log(data);
    addAction(data, dispatch);
  };

  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Search Movie"
        onChange={changeText}
      />
      <button onClick={getMovie} className="searchbtn">
        Search
      </button>

      <div className="mains">
        {/* <div className="row"> */}
        {movies.map((value, index) => {
          return (
            <div className="contain">
              <div className="card" style={{ width: "18rem" }}>
                <div className="imgDivs">
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={value.Poster}
                    class="card-img-top"
                    alt="..."
                  />
                </div>

                <div className="card-body">
                  <h5 className="card-title">{value.Title}</h5>
                  <p className="card-text">{value.Year}</p>
                  <p className="card-text">{value.Director}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      getAdd(index);
                    }}
                  >
                    Add to Movie Library
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Searchmovie;
