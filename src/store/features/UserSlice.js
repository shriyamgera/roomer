import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: 'user',
    initialState: {
        authenticated:false,
        name:'',
        wishlist:[]
    },
    reducers: {
        setAuthenticated: (state, action) => {
            state.authenticated = action.payload
        },
        insertUser: (state, action) => {
            const {name, wishlist} = action.payload
            state.name = name
            state.wishlist = wishlist
        },
        insertWishlist: (state, action) => {
            state.wishlist = action.payload
        }
    }
})

export const {insertUser, insertWishlist, setAuthenticated} = userSlice.actions
export default userSlice.reducer