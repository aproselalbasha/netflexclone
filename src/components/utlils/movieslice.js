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
    addpopluarmovies: (state, action) => {
      state.popluarmovies = action.payload;
    },
    addtrailervideo: (state, action) => {
      state.trailervideos = action.payload;
    },
    addupcomming: (state, action) => {
      state.upcomming = action.payload;
    },
  },
});
export const {
  addnowpalyingmovies,
  addtrailervideo,
  addpopluarmovies,
  addupcomming,
} = movieslice.actions;
export default movieslice.reducer;
