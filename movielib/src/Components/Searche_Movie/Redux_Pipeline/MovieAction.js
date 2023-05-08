const MovieAction = (movieData, dispatch) => {
  dispatch({
    type: "MOVIE",
    payload: movieData,
  });
};

export default MovieAction;
