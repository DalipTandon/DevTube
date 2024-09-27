import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";
import SearchSlice from "./SearchSlice";
import messageReducer from "./messageSlice";
import ThemeSlice from "./ThemeSlice";


const Store=configureStore({
        reducer:{
            app:AppSlice,
            search:SearchSlice,
            chat:messageReducer,
            theme:ThemeSlice,
        },
});


export default Store;