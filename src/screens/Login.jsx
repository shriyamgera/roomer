import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import api from '../config/api'
import { useDispatch } from 'react-redux'
import { insertUser, setAuthenticated } from '../store/features/UserSlice'
import { setLoading } from '../store/features/UtilSlice'

const Login = () => {
  const dispatch = useDispatch()

  const labelClassName = 'text-start mt-3 font-bold mb-1 text-yellow-300'
  const inputClass = 'bg-transparent outline-none border-b-[1px] text-white placeholder:text-yellow-100'

  const [loginDetails, setloginDetails] = useState({})
  const navigate = useNavigate()

  const handleChange = (e) => {
    const {name,value} = e.target
    const copyDetails = {...loginDetails}
    copyDetails[name] = value
    setloginDetails(copyDetails)
  }


  const handleSubmit = async(e) =>{
    e.preventDefault()
    dispatch(setLoading(true))
    if(loginDetails.email && loginDetails.password){
      try {
        const apiData = await fetch(api.login,{
          method: 'POST',
          headers:{
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginDetails)
        }
        )
        const res = await apiData.json()        
        if(res?.success){
          localStorage.setItem('token', res?.token)
          localStorage.setItem('username', res?.name)
          dispatch(insertUser(res))
          dispatch(setAuthenticated(true))
          toast.success(res?.message)
          setTimeout(() => {
            navigate('/')
            dispatch(setLoading(false))
          }, 1000);
        }else{
          if(res?.error?.details){
            toast.error(res?.error?.details?.[0]?.message)
            dispatch(setLoading(false))
        }else{
            toast.error(res?.message)
            dispatch(setLoading(false))
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
    <div className='bg-bannerImg bg-no-repeat bg-cover '>
      <div className='bg-blackOverlay h-screen '>
      <Navbar/>
      <div className='flex flex-col items-center'>
        <h1 className='text-5xl font-bold text-yellow-300 mt-5'>Log In</h1>
        <form className='flex flex-col bg-blue-200 w-fit p-5 mt-10 glassmorphism rounded shadow-lg my-5'>
          <label className={labelClassName}>Email</label>
          <input type="email" placeholder='Enter Email' name='email' value={loginDetails.email || ''} onChange={handleChange} className={inputClass}></input>
          <label className={labelClassName}>Password</label>
          <input type='password' placeholder='Enter Password' name='password' value={loginDetails.password || ''} onChange={handleChange} className={inputClass}></input>
          <button type='submit'  onClick={handleSubmit} className='mt-5 bg-yellow-500 text-white p-2  rounded-md  '>Login</button>
          <p className='mt-5 text-white'>Don't have an account? <span className='underline text-yellow-200'><Link to={'/signup'}>Sign Up</Link></span></p>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Login