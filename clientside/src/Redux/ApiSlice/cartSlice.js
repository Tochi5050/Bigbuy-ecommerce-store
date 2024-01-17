import { createSlice } from "@reduxjs/toolkit";

const configureNum = (num) => {
  return Math.round(Number(num)).toFixed(2);
};

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [], shippingAddress: {}, paymentMethod: "Paypal" };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existingItem = state.cartItems.find(
        (product) => product._id === item._id
      );

      if (existingItem) {
        state.cartItems = state.cartItems.map((product) =>
          product._id === existingItem._id ? item : product
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      state.totalPrice = configureNum(
        state.cartItems.reduce(
          (acc, product) => acc + product.price * product.quantity,
          0
        )
      );
      state.taxAmount = configureNum(0.03 * state.totalPrice);
      state.shippingPrice = configureNum(state.totalPrice < 100 ? 10 : 0);
      state.totalAmountPayable = (
        Number(state.totalPrice) +
        Number(state.taxAmount) +
        Number(state.shippingPrice)
      ).toFixed(2);
      localStorage.setItem("cart", JSON.stringify(state));
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
      state.totalPrice = configureNum(
        state.cartItems.reduce(
          (acc, product) => acc + product.price * product.quantity,
          0
        )
      );
      state.taxAmount = configureNum(0.03 * state.totalPrice);
      state.shippingPrice = configureNum(state.totalPrice < 100 ? 10 : 0);
      state.totalAmountPayable = (
        Number(state.totalPrice) +
        Number(state.taxAmount) +
        Number(state.shippingPrice)
      ).toFixed(2);
      localStorage.setItem("cart", JSON.stringify(state));
    },

    shippingToUser: (state, action) => {
      state.shippingAddress = action.payload;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, removeFromCart, shippingToUser } = cartSlice.actions;
