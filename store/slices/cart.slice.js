import { createSlice } from "@reduxjs/toolkit"

const CartSlides = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addProductG: (state, action) => [...state, action.payload],
        deleteProductG: (state, action) => {
            return state.filter(product => product.bar_code !== action.payload)
        },
        updateProductG: (state, action) => {
            return state.map(product => {
                if (product.bar_code === action.payload.bar_code) {
                    return action.payload
                }
                return product
            })
        }
    }
})

export const { addProductG, deleteProductG, updateProductG } = CartSlides.actions;

export default CartSlides.reducer
