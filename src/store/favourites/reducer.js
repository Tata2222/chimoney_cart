import { createSlice } from '@reduxjs/toolkit';


let initialState = {
  favourites: [],
};

if (localStorage.getItem('favouriteProducts')) {
  initialState = {
    favourites: [...JSON.parse(localStorage.getItem('favouriteProducts'))]
  }
}

const favSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addFavProduct(state, action) {
      state.favourites.push(action.payload)
    },
    removeFavProduct(state, action) {
      state.favourites.splice(state.favourites.findIndex((item) => item === action.payload), 1);
    },
    clearFavourites(state) {
      state.favourites = []
    },
  }
});

export const { 
  addFavProduct, 
  removeFavProduct,
  clearFavourites
} = favSlice.actions;
export default favSlice.reducer;