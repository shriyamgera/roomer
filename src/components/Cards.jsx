import React, { useCallback, useEffect, useState } from 'react'
import { FaHeart, FaMale, FaFemale, } from "react-icons/fa";
import api from '../config/api';
import { useDispatch, useSelector } from 'react-redux';
import { insertWishlist } from '../store/features/UserSlice'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

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
        
    },[_id,dispatch])

    const handleCardClick =useCallback(()=>{
        if(authenticated){
            console.log(cardItem);
            
            navigate(`/details/${_id}`, {state: cardItem})
        }else{
            toast(<h1 className='text-xl p-5'>Please Login first to check details of this {type}.</h1>,{
                position:'top-center',
                hideProgressBar:true
            })
        }
    },[authenticated, cardItem, navigate, _id, type])
    
  return (
    <div className='w-[70%] md:w-[30%] lg:w-[20%] lg:h-[250px] h-[300px] md:h-[220px] bg-cover bg-center rounded shadow-lg flex flex-col justify-between hover:scale-110 duration-150 text-white' 
    style={{backgroundImage:`url(${img})`}}
    onClick={handleCardClick}
    >

        <div className='w-full h-[15%] bg-blue-800 flex justify-between p-2 items-center rounded glassmorphism'>
            <div className='flex gap-3 items-center'>
        <div className='flex'>
                {gender.includes('Male') && <FaMale className='text-blue-900 text-xl'/>} 
                {gender.includes('Female') && <FaFemale className='text-pink-400 text-xl'/>}
            </div>
            <div>
                {type}
            </div>
            </div>
            <div>
                <FaHeart className='hover:scale-150 duration-150' onClick={handleWishlist} fill={isWishlisted ? "red" : "white"}/>
            </div>
        </div>
        <div className='w-full h-[30%] bg-blue-800 flex items-center justify-center rounded glassmorphism'>
            {name}
            <br/>
            {location}
        </div>
    </div>
  )
}

export default Cards