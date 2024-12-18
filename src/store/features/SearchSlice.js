import { createSlice } from "@reduxjs/toolkit"

export const searchSlice = createSlice({
    name: 'search',
    initialState:{
        searchText:'',
        filter:{gender:[], type:[]}
    },

    reducers:{
        updateFilter: (state, action) => {
            const { category, type } = action.payload
            const isAlreadySelectedFitler = state.filter[category].includes(type)
            console.log((isAlreadySelectedFitler ))
            isAlreadySelectedFitler
                ? state.filter[category] =  state.filter[category].filter((item)=>item !== type)
                : state.filter[category].push(type)
        },

        updateSearchText: (state, action) => {
            state.searchText = action.payload
        }
    }
})

export const {updateFilter, updateSearchText} = searchSlice.actions
export default searchSlice.reducer