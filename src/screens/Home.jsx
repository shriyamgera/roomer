import React from 'react'
import Navbar from '../components/Navbar'
import CardsContainer from '../components/CardsContainer'
import RoomerDesc from '../components/RoomerDesc'
import Search from '../components/Search'
const Home = () => {
    


    return (
        <div className='font-coolvetica'>
        <div className='bg-bannerImg bg-cover m-5 rounded-2xl'>
            <div className='flex flex-col bg-blackOverlay p-2 min-h-[50vh] rounded-2xl'>
            <Navbar />
            <div className='flex flex-col justify-end flex-1'>

            <RoomerDesc />

            <Search />
            </div>
            </div>
            
            </div>
            <CardsContainer />
        </div>
    )
}

export default Home