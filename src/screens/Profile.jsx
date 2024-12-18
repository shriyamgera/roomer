import React, { useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router'

const Profile = () => {

    const [userDetails, setuserDetails] = useState()
    useEffect(() => {
      const username = localStorage.getItem('username')
      setuserDetails(username)
    }, [])

    const navigate = useNavigate()
    const handleLogOut = () =>{
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        setTimeout(() => {
            navigate('/')
        }, 1000)
    }
    
  return (
    <div className='flex justify-center flex-col gap-10'>
        <h1 className='font-bold text-2xl'>Welcome {userDetails}</h1>
        <button onClick={handleLogOut}>Logout</button>
        <Link to={'/wishlist'}><h1 className='font-bold text-2xl text-red-500 flex justify-center items-center gap-4'><span><FaHeart fill='red'/></span>Wishlist</h1></Link>
    </div>
  )
}

export default Profile