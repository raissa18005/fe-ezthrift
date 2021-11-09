import { publicRequest, userRequest } from "../requestMethods";
import {
    loginFailure,
    loginStart,
    loginSuccess,
    registerFailure,
    registerStart,
    registerSuccess,
    updateUserFailure,
    updateUserStart,
    updateUserSuccess,
} from "./userRedux";
import { addOrderFailure, addOrderStart, addOrderSuccess } from "./orderRedux";
import {
    addProductCartStart,
    addProductCartSuccess,
    addProductCartFailure,
    getProductCartSuccess,
} from "./cartRedux";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};
export const register = async (dispatch, user) => {
    dispatch(registerStart());
    try {
        const res = await publicRequest.post("/auth/register", user);
        dispatch(registerSuccess(res.data));
    } catch (err) {
        dispatch(registerFailure());
    }
};

export const addOrder = async (order, dispatch) => {
    dispatch(addOrderStart());
    try {
        const res = await userRequest.post(`/orders`, order);
        dispatch(addOrderSuccess(res.data));
    } catch (err) {
        dispatch(addOrderFailure());
    }
};

export const addProductCart = async (userId, productId, dispatch) => {
    dispatch(addProductCartStart());
    try {
        const res = await userRequest.put(`/carts/add/${userId}`, productId);
        dispatch(addProductCartSuccess(res.data));
    } catch (err) {
        dispatch(addProductCartFailure());
    }
};

export const updateUser = async (id, userinfo, dispatch) => {
    dispatch(updateUserStart());
    try {
        // update
        const res = await userRequest.put(`/users/${id}`, userinfo);
        dispatch(updateUserSuccess(res.data));
    } catch (err) {
        dispatch(updateUserFailure());
    }
};

export const getProductCart = async (productId, dispatch) => {
    try {
        const res = await userRequest.get("/products/find/" + productId);
        dispatch(getProductCartSuccess(res.data));
    } catch (err) {}
};
