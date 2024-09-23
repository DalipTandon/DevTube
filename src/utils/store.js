import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";
import SearchSlice from "./SearchSlice";
import messageReducer from "./messageSlice";


const Store=configureStore({
        reducer:{
            app:AppSlice,
            search:SearchSlice,
            chat:messageReducer,
        },
});


export default Store;