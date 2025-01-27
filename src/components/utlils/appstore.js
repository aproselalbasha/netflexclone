import { configureStore } from "@reduxjs/toolkit";
import userreducer from "./userslice";
import moviereducer from "./movieslice";
import gptreducer from "./gptsearchSlice";
import configreducer from "./configslice";

const appstore = configureStore({
  reducer: {
    user: userreducer,
    movies: moviereducer,
    gpt: gptreducer,
    config: configreducer,
  },
});
export default appstore;
