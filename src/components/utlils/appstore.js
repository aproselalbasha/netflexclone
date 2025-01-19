import { configureStore } from "@reduxjs/toolkit";
import userreducer from "./userslice";
import moviereducer from "./movieslice";

const appstore = configureStore({
  reducer: {
    user: userreducer,
    movies: moviereducer,
  },
});
export default appstore;
