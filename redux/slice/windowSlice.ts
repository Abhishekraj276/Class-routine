"use client" 
import {createSlice} from '@reduxjs/toolkit' 
const initialState =  { 
    status:null
};

const windowSlice = createSlice({
    name:'window',
    initialState:initialState,
    reducers : { 
        setStatus(state,value) {
            state.status = value.payload; 
        }
    }
});

export const {setStatus } = windowSlice.actions;
export default windowSlice.reducer;