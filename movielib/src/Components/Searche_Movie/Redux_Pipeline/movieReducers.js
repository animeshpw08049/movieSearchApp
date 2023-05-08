let initialData = {
  movie: [],
};

const movieReducers = (state = initialData, action) => {
  switch (action.type) {
    case "MOVIE":
      state = {
        ...state,
        movie: action.payload,
      };

      break;

    default:
      break;
  }
  return state;
};

export default movieReducers;
