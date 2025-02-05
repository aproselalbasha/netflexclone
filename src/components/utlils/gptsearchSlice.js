import { createSlice } from "@reduxjs/toolkit";

const gptsearchslice = createSlice({
  name: "gpt",
  initialState: {
    showgptsearch: false,
    moviename: null,
    movieresult: null,
  },
  reducers: {
    togglegptsearchview: (state) => {
      state.showgptsearch = !state.showgptsearch;
    },
    gptsearchmovies: (state, action) => {
      const { moviename, movieresult } = action.payload;
      state.moviename = moviename;
      state.movieresult = movieresult;
    },
  },
});
export const { togglegptsearchview, gptsearchmovies } = gptsearchslice.actions;
export default gptsearchslice.reducer;
