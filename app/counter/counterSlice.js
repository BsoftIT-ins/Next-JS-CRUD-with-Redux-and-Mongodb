import { createSlice } from "@reduxjs/toolkit";

//Create Slice



const counterSlice = createSlice({
    name: "counter",
    initialState:{
        count: 0,
    },
    reducers: {},

});

// selector

//action
export const {} = counterSlice.reducer;
//reducer
export default counterSlice.reducer;