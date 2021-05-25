import { createSlice } from "@reduxjs/toolkit";


export const CounterSlice = createSlice({
    name: "Counter",
    initialState : {
        count: 0 
    },
    reducers: {
        increment: (state)=>{
            state.count++;
        },
        decrement: (state)=>{
            state.count--;
        },
        incrementByAmount: (state,action)=>{
            state.count += action.payload
        },
    }
})

export const {increment,decrement,incrementByAmount} = CounterSlice.actions
export default CounterSlice.reducer