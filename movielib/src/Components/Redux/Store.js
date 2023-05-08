import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import logger from "redux-logger";
import movieReducers from "../Searche_Movie/Redux_Pipeline/movieReducers";
import addReducers from "../Searche_Movie/Redux_Pipeline/addReducer";

const combinedReducers = combineReducers({
  moviess: movieReducers,
  add: addReducers,
});
const reduxStore = createStore(combinedReducers, applyMiddleware(logger));

export default reduxStore;
