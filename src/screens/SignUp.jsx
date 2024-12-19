import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router'
import api from '../config/api'
import { toast } from 'react-toastify'
import { setLoading } from '../store/features/UtilSlice'
import { useDispatch } from 'react-redux'

const SignUp = () => {
    const labelClassName = 'text-start mt-3 font-bold mb-1 text-blue-950'
    const inputClass = 'bg-transparent outline-none border-b border-blue-950'
    const [signUpDetails, setsignUpDetails] = useState({})
    const dispatch = useDispatch()
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
        dispatch(setLoading(true))
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
                        dispatch(setLoading(false))
                    }, 1000);
                }else{
                    if(res?.error?.details?.[0]?.message){
                        toast.error(res?.error?.details?.[0]?.message)
                    }else{
                        toast.error(res?.message)
                    }
                    dispatch(setLoading(false))
                }
            } catch (error) {
                toast.error(error)
                dispatch(setLoading(false))
            }
            
        }else{
            toast.error("Fill all the fields")
            dispatch(setLoading(false))
        }
    }
  return (
    <div className='h-[100vh]'>
        <Navbar/>
        <div className='flex flex-col items-center'>
        <h1 className='text-5xl font-bold text-blue-950 mt-5'>SignUp</h1>
        <form className='flex flex-col bg-blue-200 w-fit p-5 mt-10 glassmorphism rounded shadow-lg my-5'>
            <label className={labelClassName}>Name</label>
            <input autoFocus type='text' placeholder='Enter Name' name='name' onChange={handleChange} value={signUpDetails.name || ''} className={inputClass}></input>
            <label className={labelClassName}>Email</label>
            <input type="email" placeholder='Enter Email' name='email' onChange={handleChange} value={signUpDetails.email || ''} className={inputClass}></input>
            <label className={labelClassName}>Password</label>
            <input type='password' placeholder='Enter Password' name='password' onChange={handleChange} value={signUpDetails.password || ''} className={inputClass}></input>
            <button type='submit' className='mt-5 bg-blue-900 text-white p-2' onClick={handleSubmit}>Create Account</button>
            <p className='mt-5'>Already have an account? <span className='underline'><Link to={'/login'}>Login</Link></span></p>
        </form>
        </div>
    </div>
  )
}

export default SignUp