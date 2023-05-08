import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Movielibrary.css";
import { removeAction } from "../Searche_Movie/Redux_Pipeline/AddAction";

function Movielibrary(props) {
  const allData = useSelector((state) => state.add.addMovieData);
  const [data, setData] = useState([]);
  console.log(data);
  const dispatch = useDispatch();

  useEffect(() => {
    setData(allData);
  }, [allData]);

  const sorted = (e) => {
    const sortedData = e.target.value;
    let arr = [...data];
    if (sortedData === "asc") {
      let sortedFile = arr.sort((a, b) => {
        const titleA = a.Title.toLowerCase();
        const titleB = b.Title.toLowerCase();
        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
        return 0;
      });
      setData(sortedFile);
      console.log(arr);
    } else if (sortedData === "dsc") {
      let sortedFile = arr.sort((a, b) => {
        const titleA = a.Title.toLowerCase();
        const titleB = b.Title.toLowerCase();
        if (titleA > titleB) {
          return -1;
        }
        if (titleA < titleB) {
          return 1;
        }
        return 0;
      });
      setData(sortedFile);

      console.log(arr);
    } else {
      setData(allData);
    }
  };

  const sortedYear = (e) => {
    const sortedDatas = e.target.value;
    let arr = [...data];
    if (sortedDatas === "htl") {
      let sortingYear = arr.sort((a, b) => {
        const yearA = a.Year;
        const yearB = b.Year;
        if (yearA < yearB) {
          return -1;
        }
        if (yearA > yearB) {
          return 1;
        }
        return 0;
      });
      setData(sortingYear);
      console.log(arr);
    } else if (sortedDatas === "lth") {
      let sortingYear = arr.sort((a, b) => {
        const yearA = a.Year;
        const yearB = b.Year;
        if (yearA > yearB) {
          return -1;
        }
        if (yearA < yearB) {
          return 1;
        }
        return 0;
      });
      setData(sortingYear);

      console.log(arr);
    } else {
      setData(allData);
    }
  };

  return (
    <>
      <div className="selectContainer">
        <h4 className="h4Tag">Sort By Title</h4>
        <select
          className="slct"
          onChange={(e) => {
            sorted(e);
          }}
        >
          <option value="all">ALL</option>
          <option value="asc">A To Z</option>
          <option value="dsc">Z to A</option>
        </select>

        <h4 className="h4Tags">Sort By Year</h4>
        <select
          className="slctd"
          onChange={(e) => {
            sortedYear(e);
          }}
        >
          <option value="all">ALL</option>
          <option value="htl">Old Year</option>
          <option value="lth">Recent Year</option>
        </select>
      </div>

      <div className="mains">
        {data.map((value, index) => {
          const { imdbID } = value;
          return (
            <div className="card" style={{ width: "18rem" }}>
              <div className="imgDiv">
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={value.Poster}
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{value.Title}</h5>
                <p className="card-text">Released Year:- {value.Year}</p>
                <button
                  style={{
                    marginRight: "5%",
                    backgroundColor: "crimson",
                    border: "none",
                  }}
                  className="btn btn-primary"
                >
                  Edit
                </button>

                <button
                  style={{ backgroundColor: "yellowgreen", border: "none" }}
                  className="btn btn-primary"
                  onClick={() => dispatch(removeAction(imdbID))}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Movielibrary;
