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
        },
        clearUser: (state)=>{
            state.authenticated = false
            state.name = ''
            state.wishlist = []
        }
    }
})

export const {insertUser, insertWishlist, setAuthenticated, clearUser} = userSlice.actions
export default userSlice.reducer