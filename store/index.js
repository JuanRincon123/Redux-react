import { configureStore } from "@reduxjs/toolkit";
import cart from "./slides/cart.slides";


const store = configureStore({
    reducer:{
        cart,
    }
})

export  default store;