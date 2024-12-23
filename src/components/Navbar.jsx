import React, { useEffect, useState } from 'react'
import { FaUser } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const AuthenticatedComponent = ()=>{
        return (
            <div className='flex gap-4 items-center'>
                            <Link to='/signup' className='cursor-default hover:text-yellow-300'>SignUp</Link>
            <Link to='/login' className=' bg-white text-black rounded-3xl px-5 py-2 hover:bg-yellow-300 cursor-default'>Login</Link>
            </div>
        )
    }
    const authenticated = useSelector(state=> state.user.authenticated)
    
  return (
    <nav className='flex justify-between p-3 text-white font-coolvetica '>
        <Link to='/' className='text-2xl font-bold cursor-default hover:text-yellow-300'>
            Roomer
        </Link>
        <div>
            {authenticated ? <Link to={'/profile'}><FaUser className='size-8 hover:text-yellow-300 cursor-default'/> </Link>: <AuthenticatedComponent/>}
        </div>
        
    </nav>
  )
}

export default Navbar