import { createSlice } from "@reduxjs/toolkit";

 const counrerSlice = createSlice({
    name:"counter",
    initialState:10,
    reducers:{
        increaseBy1:(state)=> state + 1, // ye action hai
        increaseBy10:(state)=> state + 10,
        dicreaseBy1:(state)=> state - 1,
        dicreaseBy10:(state)=> state - 10,

    },
})

export const {increaseBy1,increaseBy10,dicreaseBy1,dicreaseBy10} = counrerSlice.actions;
export default counrerSlice.reducer;