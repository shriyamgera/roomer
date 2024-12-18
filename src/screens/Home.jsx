import React from 'react'
import Navbar from '../components/Navbar'
import CardsContainer from '../components/CardsContainer'
import RoomerDesc from '../components/RoomerDesc'
import Search from '../components/Search'
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