import { configureStore } from "@reduxjs/toolkit"
import searchReducer from './features/SearchSlice'
import userReducer from './features/UserSlice'
import accommodationReducer from './features/AccommodationSlice'
import utilReducer from './features/UtilSlice'

export const store = configureStore({
    reducer:{
        search: searchReducer,
        user: userReducer,
        accommodation: accommodationReducer,
        util: utilReducer,
    }
})