import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'

const PrivateComponent = ({element}) => {
    const authenticated = useSelector(state=> state.user.authenticated)
    return authenticated ? element : <Navigate to={'/login'} replace/>

}

export default PrivateComponent