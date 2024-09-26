import { createSlice } from "@reduxjs/toolkit";

//Create Slice



const counterSlice = createSlice({
    name: "counter",
    initialState:{
        count: 0,
    },
    reducers: {
        increment: (state, action)=>{
            state.count ++;
        },
        decrement: (state, action)=>{
            state.count --;
        },
    },

});

// selector
export const selectCount = (state) => state.counter;
//action
export const { increment, decrement } = counterSlice.actions;
//reducer
export default counterSlice.reducer;