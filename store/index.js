import { configureStore } from "@reduxjs/toolkit";
import cart from "./slices/cart.slice";
import updateinfo from './slices/updateinfo.slice';

const store = configureStore({
    reducer:{
        cart,
        updateinfo
    }
})

export  default store;