import React, { useEffect, useState } from 'react'
import { FaUser } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const AuthenticatedComponent = ()=>{
        return (
            <Link to='/login'>Login/SignUp</Link>
        )
    }
    const authenticated = useSelector(state=> state.user.authenticated)
    
  return (
    <nav className='flex justify-between bg-blue-900 p-3 text-white'>
        <Link to='/' className='text-2xl font-bold'>
            Roomer
        </Link>
        <div>
            {authenticated ? <Link to={'/profile'}><FaUser className='size-8'/> </Link>: <AuthenticatedComponent/>}
        </div>
        
    </nav>
  )
}

export default Navbar