import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers/index";

const favourites = configureStore({
  // reducer
  reducer: mainReducer,
});
export default favourites;
