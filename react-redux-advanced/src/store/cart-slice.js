import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    replace(state, action) {
      state.totalAmount = action.payload.totalAmount;
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    add(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.title === action.payload.title
      );
      if (itemIndex === -1) {
        state.items.push({ ...action.payload, quantity: 1 });
      } else {
        state.items[itemIndex].quantity += 1;
      }
      state.totalAmount += action.payload.price;
      state.totalQuantity += 1;
      state.changed = true;
    },
    remove(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.title === action.payload.title
      );
      state.items[itemIndex].quantity -= 1;
      if (state.items[itemIndex].quantity < 1) {
        state.items.splice(itemIndex, 1);
      }
      state.totalAmount -= action.payload.price;
      state.totalQuantity -= 1;
      state.changed = true;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
