import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearchView: false,
    gptTmdbMovies: null,
    gptMovieNames: null,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.gptSearchView = !state.gptSearchView;
    },
    addGptMovieResults: (state, action) => {
      const { gptMovieNames, gptTmdbMovies } = action.payload;
      state.gptMovieNames = gptMovieNames;
      state.gptTmdbMovies = gptTmdbMovies;
    },
  },
});

export const { toggleGptSearch, addGptMovieResults } = gptSlice.actions;

export default gptSlice.reducer;
