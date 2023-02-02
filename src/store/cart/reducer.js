import { createSlice } from '@reduxjs/toolkit';


let initialState = {
  cart: [],
};

if (localStorage.getItem('cartProducts')) {
  initialState = {
    cart: [...JSON.parse(localStorage.getItem('cartProducts'))]
  }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartProduct(state, action) {
      state.cart.push({
        productId: action.payload,
        count: 1
      })
    },
    removeCartProduct(state, action) {
      state.cart.splice(state.cart.findIndex((item) => item.payloadId === action.payload), 1);
    },
    increaseCartProductCount(state, action) {
      const productItem = state.cart.find((item) => item.productId === action.payload);
      if (productItem) {
        productItem.count = productItem.count < 99 ? productItem.count + 1 : productItem.count;
      }
    },
    decreaseCartProductCount(state, action) {
      const productItem = state.cart.find((item) => item.productId === action.payload); 
      if (productItem.count === 1) {
        state.cart.splice(state.cart.findIndex((item) => item.payloadId === action.payload), 1);
      } else {
        productItem.count -= 1;
      }
    },
    clearCart(state) {
      localStorage.setItem('cartProducts', null);
      state.cart = []
    },
    setCartGoods(state, action) {
      state.cart = action.payload
    }
  }
});

export const { 
  addCartProduct, 
  removeCartProduct, 
  clearCart, 
  setCartGoods, 
  increaseCartProductCount, 
  decreaseCartProductCount
} = cartSlice.actions;
export default cartSlice.reducer;