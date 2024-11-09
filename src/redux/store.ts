import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/auth";

const store = configureStore({
    reducer:{
      authReducer
    }
})

export default store;