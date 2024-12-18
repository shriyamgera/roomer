import React, { useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router'
import Navbar from '../components/Navbar'
import { useDispatch } from 'react-redux'
import { clearUser, setAuthenticated } from '../store/features/UserSlice'

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
        dispatch(setAuthenticated(false))
        dispatch(clearUser())
        setTimeout(() => {
            navigate('/')
        }, 1000)
    }
    
  return (
    <div className='h-[100vh]'>
    <Navbar/>
    <div className='flex justify-center flex-col gap-10 text-blue-950 items-center'>
        <h1 className='font-bold text-4xl mt-10'>Welcome <span className='text-blue-800'>{userDetails}</span></h1>
        <div className='flex justify-center items-center  w-64 gap-5 m-10'>
          <Link to={'/wishlist'}><h1 className='font-bold text-2xl text-red-500 flex justify-center items-center gap-4'><span><FaHeart fill='red'/></span>Wishlist</h1></Link>
          <button className='bg-blue-900 text-white p-2' onClick={handleLogOut}>Logout</button>
        </div>
    </div>
    </div>
    
  )
}

export default Profile