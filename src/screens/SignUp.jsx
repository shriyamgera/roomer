import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router'
import api from '../config/api'
import { toast } from 'react-toastify'

const SignUp = () => {
    const labelClassName = 'text-start mt-2'
    const [signUpDetails, setsignUpDetails] = useState({})
    const navigate = useNavigate()

    const handleChange = (e) =>{
        const {name,value} = e.target
        const detailsCopy = {...signUpDetails}
        detailsCopy[name] = value
        setsignUpDetails(detailsCopy)
    }

    console.log(signUpDetails)
    
    const handleSubmit = async(e)=>{
        e.preventDefault()
        if(signUpDetails.name && signUpDetails.email && signUpDetails.password){
            try {
                const apiData = await fetch(api.signup,
                    {
                        method:'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(signUpDetails)
                    }
                )
                const res = await apiData.json()
                if(res?.success){
                    toast.success(res?.message)
                    setTimeout(() => {
                        navigate('/login')
                    }, 1000);
                }else{
                    if(res?.error?.details?.[0]?.message){
                        toast.error(res?.error?.details?.[0]?.message)
                    }else{
                        toast.error(res?.message)
                    }
                }
            } catch (error) {
                toast.error(error)
            }
            
        }else{
            toast.error("Fill all the fields")
        }
        
        
    }
  return (
    <>
        <Navbar/>
        <div className='flex flex-col items-center'>
        <h1 className='text-5xl font-bold'>SignUp</h1>
        <form className='flex flex-col bg-amber-200 w-fit p-5 mt-10'>
            <label className={labelClassName}>Name</label>
            <input autoFocus type='text' placeholder='Enter Name' name='name' onChange={handleChange} value={signUpDetails.name || ''}></input>
            <label className={labelClassName}>Email</label>
            <input type="email" placeholder='Enter Email' name='email' onChange={handleChange} value={signUpDetails.email || ''}></input>
            <label className={labelClassName}>Password</label>
            <input type='password' placeholder='Enter Password' name='password' onChange={handleChange} value={signUpDetails.password || ''}></input>
            <button type='submit' className='mt-5 bg-green-300' onClick={handleSubmit}>Create Account</button>
            <p className='mt-5'>Already have an account? <span className='underline'><Link to={'/login'}>Login</Link></span></p>
        </form>
        </div>
    </>
  )
}

export default SignUp