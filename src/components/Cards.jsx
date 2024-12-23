import React, { useCallback, useEffect, useState } from 'react'
import { FaHeart, FaMale, FaFemale, } from "react-icons/fa";
import api from '../config/api';
import { useDispatch, useSelector } from 'react-redux';
import { insertWishlist } from '../store/features/UserSlice'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { setLoading } from '../store/features/UtilSlice';
import { HiLocationMarker } from 'react-icons/hi';

const Cards = ({cardItem}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {img, gender,type,name,location, _id} = cardItem
    const wishlist = useSelector((state) => state.user.wishlist)
    const [isWishlisted, setisWishlisted] = useState(false)

    useEffect(() => {
        if(wishlist){
            wishlist?.includes(_id) ? setisWishlisted(true) : setisWishlisted(false)
        }
    }, [wishlist, _id])
    const authenticated = useSelector(state=> state.user.authenticated)
    
    const handleWishlist = useCallback(async(e) => {
        e.stopPropagation()
        dispatch(setLoading(true))
            try {
                const apiData = await fetch(api.wishlist,
                    {
                        method: 'post',
                        headers:{
                            'authorization': localStorage.getItem('token'),
                            'Content-Type': 'application/json'
                        },
                        body:JSON.stringify({
                            accommodationID:_id
                        })
                    }
                )
                const res = await apiData.json()
                if(res?.success){
                    console.log(res?.wishlist);
                    dispatch(insertWishlist(res?.wishlist))
                    toast.success(res?.message)
                }else{
                    toast.error("Please Login to wishlist")
                }
                
            } catch (error) {
                console.error(error)
            }
            dispatch(setLoading(false))
        
    },[_id,dispatch])

    const handleCardClick =useCallback(()=>{
        if(authenticated){
            setTimeout(() => {
                navigate(`/details/${_id}`, {state: cardItem})
            }, 100);
            
        }else{
            toast(<h1 className='text-xl p-5'>Please Login first to check details of this {type}.</h1>,{
                position:'top-center',
                hideProgressBar:true
            })
        }
    },[authenticated, cardItem, navigate, _id, type])
    
  return (
    <div className='w-[80%] h-[200px] sm:w-[70%] md:w-[40%] md:h-[220px] xl:w-[30%] 2xl:h-[350px] bg-cover bg-center rounded-2xl shadow-lg flex flex-col justify-between hover:scale-110 duration-150 text-white' 
    style={{backgroundImage:`url(${img})`}}
    onClick={handleCardClick}
    >
<div className='flex flex-col justify-between h-full w-full'>
        <FaHeart className='hover:scale-150 duration-150 m-5 mt-3 text-xl self-end ' onClick={handleWishlist} fill={isWishlisted ? "red" : "white"}/>
        <div className='h-[30%] bg-white glassmorphism m-2 rounded-2xl px-2 flex items-center justify-between'>
        <div>
            <p className='font-bold'>{name}</p>
            <div className='flex items-center gap-2'><HiLocationMarker/> {location}</div>
        </div>
        <div className='text-2xl font-semibold flex flex-col items-center'>
        <div className='flex'>
                {gender.includes('Male') && <FaMale className='text-blue-400'/>} 
                {gender.includes('Female') && <FaFemale className='text-pink-400'/>}
            </div>
            <div className='text-lg'>
                {type}
            </div>
        </div>
        
        </div>
        </div>
    </div>
  )
}

export default Cards