import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        quantity: 0,
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
            state.cart.push(action.payload);
            // state.isFetching = false;
            // state.products = action.payload;
            // state.total += action.payload.price;
        },
        addProductCartFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        getProductCartSuccess: (state, action) => {
            state.product.push(action.payload);
        },

        getProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        addQuantity: (state, num) => {
            state.quantity = num;
        },
        getProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products = action.payload;
        },
        getProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const {
    addProduct,
    addProductCartStart,
    addProductCartSuccess,
    addProductCartFailure,
    getProductCartSuccess,
    addQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
