import { createSlice } from "@reduxjs/toolkit";

const accommodationSlice = createSlice({
    name:'accommodation',
    initialState:{
        accommodations:[]
    },
    reducers:{
        insertAccommodations:(state,action)=>{
            state.accommodations = action.payload
        }
    }
})

export const {insertAccommodations} = accommodationSlice.actions
export default accommodationSlice.reducer