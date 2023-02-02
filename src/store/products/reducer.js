
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const options = {
  headers: {
    accept: 'application/json',
    'X-API-KEY': process.env.API_KEY
  }
};

export const fetchProducts = createAsyncThunk("products/fetchProducts", async() => {
  try {
    const response = await fetch('https://api.chimoney.io/v0.2/info/assets', options);
    const { data } = await response.json();

    const products = await data.giftCardsRLD.content;
    return products;
  } catch(err) {
      return err.message;
  }
})

const initialState = {
  products: [],
  status: 'idle',
  error: null
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // setProducts(state, action) {
    //   state.push({
    //     id: action.payload.id,
    //     text: action.payload.text,
    //     completed: false
    //   })
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = [...action.payload];
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
    }
})

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;