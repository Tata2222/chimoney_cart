import { configureStore } from '@reduxjs/toolkit';
import logger from "redux-logger";
import thunk from "redux-thunk";
import productReducer from "./products/reducer";
import cartReducer from "./cart/reducer";
import favReducer from "./favourites/reducer";


export default configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    favourites: favReducer,
    middleware: [thunk, logger],
  }
})