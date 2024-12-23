import React, { useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router'
import Navbar from '../components/Navbar'
import { useDispatch } from 'react-redux'
import { clearUser, setAuthenticated } from '../store/features/UserSlice'
import { setLoading } from '../store/features/UtilSlice'

const Profile = () => {
    const dispatch = useDispatch()
    const [userDetails, setuserDetails] = useState()
    useEffect(() => {
      const username = localStorage.getItem('username')
      setuserDetails(username)
    }, [])

    const navigate = useNavigate()
    const handleLogOut = () =>{
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        dispatch(setLoading(true))
        dispatch(setAuthenticated(false))
        dispatch(clearUser())
        setTimeout(() => {
            navigate('/')
            dispatch(setLoading(false))
        }, 1000)
    }
    
  return (
    <div className='h-[100vh]'>
          <div className='bg-bannerImg bg-no-repeat bg-cover '>
          <div className='bg-blackOverlay h-screen '>
    <Navbar/>
    <div className='flex items-center justify-center  mx-5 font-coolvetica'>
    <div className='flex justify-center flex-col gap-10 text-yellow-950 items-center bg-black glassmorphism w-fit p-5 rounded-3xl'>
        <h1 className='font-bold text-4xl mt-10'>Welcome <span className='text-yellow-500'>{userDetails}</span></h1>
        <div className='flex justify-center items-center  w-64 gap-5 m-10'>
          <Link to={'/wishlist'}><h1 className='font-bold text-2xl text-red-500 flex justify-center items-center gap-4'><span><FaHeart fill='red'/></span>Wishlist</h1></Link>
          <button className='bg-yellow-500 rounded-xl font-bold text-white p-2' onClick={handleLogOut}>Logout</button>
        </div>
    </div>
    </div>
    </div>
    </div>
</div>    
  )
}

export default Profile