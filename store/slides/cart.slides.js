import { createSlice } from "@reduxjs/toolkit"

const CartSlides =createSlice ({
    name: 'cart',
    initialState: [],
    reducers:{
        addProductG: (state, action) => [...state, action.payload],  
    }
})

export const {addProductG} = CartSlides.actions;

export default CartSlides.reducer
