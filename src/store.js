/* eslint-disable*/
import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js';
import cartData from './store/cartSlice.js';


export const { changeName, increaseAge} = user.actions;
export const { countPlus, countMinus, order, deleteItem } = cartData.actions;

export default configureStore({
  reducer: {
    user : user.reducer,
    cartData : cartData.reducer
   }
}) 