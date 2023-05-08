let initialAddData = {
  addMovieData: [],
};

const addReducers = (state = initialAddData, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        addMovieData: [...state.addMovieData, action.payload],
      };

      break;

    case "REMOVE":
      console.log(action.payload);
   
      state = {
        ...state,
        addMovieData: state.addMovieData.filter(
          (value) => value.imdbID !== action.payload
        ),
      };

      break;
    default:
      break;
  }
  return state;
};

export default addReducers;
