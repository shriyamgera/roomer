import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import CardsContainer from '../components/CardsContainer'
import RoomerDesc from '../components/RoomerDesc'
import Search from '../components/Search'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthenticated } from '../store/features/UserSlice'
import api from '../config/api'

const Home = () => {
    


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