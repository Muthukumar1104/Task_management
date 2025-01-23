import { createSlice } from "@reduxjs/toolkit";

const taskslice = createSlice({
    name:"task",
    initialState:{
        item:[],
    },
    reducers:{
        addItem:(state,action)=>{
            state.item.push(...action.payload)
        }
    }
})