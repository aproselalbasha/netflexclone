import { createSlice } from "@reduxjs/toolkit";

const gptsearchslice = createSlice({
  name: "gpt",
  initialState: {
    showgptsearch: false,
  },
  reducers: {
    togglegptsearchview: (state) => {
      state.showgptsearch = !state.showgptsearch;
    },
  },
});
export const { togglegptsearchview } = gptsearchslice.actions;
export default gptsearchslice.reducer;
