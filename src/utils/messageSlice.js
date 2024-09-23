import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_OFFSET } from "./Helper";


const messageSlice=createSlice({
    name:"chat",
    initialState:{
        messages:[],
    },
    reducers:{
        addMessages:(state,action)=>{
            state.messages.splice(LIVE_CHAT_OFFSET,1);
            state.messages.push(action.payload);
        }
    }
});

export const {addMessages } = messageSlice.actions;
export default messageSlice.reducer;