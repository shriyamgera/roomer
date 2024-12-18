import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import CardsContainer from '../components/CardsContainer'
import RoomerDesc from '../components/RoomerDesc'
import Search from '../components/Search'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthenticated } from '../store/features/UserSlice'
import api from '../config/api'

const Home = () => {
    const dispatch = useDispatch()

    const validateToken = async()=>{
        try {
            const apiData = await fetch (api.validateToken, {
                headers:{
                    'authorization': localStorage.getItem('token')
                }
            })
            const res = await apiData.json()
            if(res?.success){
                dispatch(setAuthenticated(true))
            }else{
                dispatch(setAuthenticated(false))
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            validateToken()
        }else{
            dispatch(setAuthenticated(false))
        }
    }, [])
    return (
        <>
            <Navbar />
            <RoomerDesc />
            <Search />
            <CardsContainer />
        </>
    )
}

export default Home