import { configureStore } from "@reduxjs/toolkit";
import {cartReducers} from "./cartSlice.js";

export const store =configureStore({
  reducer:{
    cart: cartReducers
  }
})