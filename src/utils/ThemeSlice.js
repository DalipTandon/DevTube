import { createSlice } from "@reduxjs/toolkit";


const ThemeSlice=createSlice({
    name:"theme",
    initialState:{
        isDark:false,
    },
    reducers:{
        toggleTheme:(state)=>{
           state.isDark=!state.isDark; 
        }
    }
})

export const{toggleTheme}=ThemeSlice.actions;
export default ThemeSlice.reducer;