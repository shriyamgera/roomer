import { createSlice } from "@reduxjs/toolkit";

const utilSlice = createSlice({
    name:'util',
    initialState:{
        loading:false
    },
    reducers:{
        setLoading:(state, action)=>{
            state.loading = action.payload
        }
    }
})

export const {setLoading} = utilSlice.actions
export default utilSlice.reducer