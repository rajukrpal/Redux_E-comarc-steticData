import { configureStore  } from "@reduxjs/toolkit";
import counterSlice from "../features/counterSlice/counterSlice";
import cartSlice from "../features/cartSlice/cartSlice";

const store = configureStore({
    reducer:{
        Counter:counterSlice,
        Cart:cartSlice,
    }
});

export default store ;