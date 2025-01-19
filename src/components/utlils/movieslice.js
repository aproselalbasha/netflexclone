import { createSlice } from "@reduxjs/toolkit";

const movieslice = createSlice({
  name: "movie",
  initialState: {
    nowplaying: null,
    trailervideos: null,
  },
  reducers: {
    addnowpalyingmovies: (state, action) => {
      state.nowplaying = action.payload;
    },
    addtrailervideo: (state, action) => {
      state.trailervideos = action.payload;
    },
  },
});
export const { addnowpalyingmovies, addtrailervideo } = movieslice.actions;
export default movieslice.reducer;
