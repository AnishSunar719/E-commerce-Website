import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../features/slices/SliderSlice";
import productsReducer from "../features/slices/ProductsSlice";
import cartReducer from "../features/slices/CartSlice";
import authReducer from "../features/slices/authSlice";
import wishReducer from "../features/slices/wishSlice";

const store = configureStore({
    reducer: {
        slider: sliderReducer,
        products: productsReducer,
        cart: cartReducer,
        authUser: authReducer,
        wishList: wishReducer,
    }
});

export default store;