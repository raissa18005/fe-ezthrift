import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        products: null,
        product: [],
        quantity: 0,
        total: 0,
        isFetching: false,
        error: false,
    },
    reducers: {
        // addProduct: (state, action) => {
        //     state.quantity += 1;
        //     state.products.push(action.payload);
        //     state.total += action.payload.price;
        // },

        addProductCartStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },

        addProductCartSuccess: (state, action) => {
            state.isFetching = false;
            state.quantity += 1;
            state.products = action.payload;
            state.total += action.payload.price;
        },
        addProductCartFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        getProductCartSuccess: (state, action) => {
            state.product.push(action.payload);
        },
    },
});

export const {
    addProduct,
    addProductCartStart,
    addProductCartSuccess,
    addProductCartFailure,
    getProductCartSuccess,
} = cartSlice.actions;
export default cartSlice.reducer;
