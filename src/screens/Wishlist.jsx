import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Cards from '../components/Cards'

const Wishlist = () => {
  const wishlist = useSelector(state=> state.user.wishlist)
  const accommodations = useSelector(state=> state.accommodation.accommodations)
  const [wishlistedAccomms, setwishlistedAccomms] = useState([])

  useEffect(() => {
    const wishlistedAccommodations = accommodations?.filter(item => {
      if(wishlist?.includes(item._id)) return item
    })
    setwishlistedAccomms(wishlistedAccommodations)
  }, [])
  console.log("asdasd", wishlist, accommodations, wishlistedAccomms);
  
  
  return (
    <div className='m-10 p-10'>
      <h1>Wishlist</h1>
    {wishlistedAccomms?.length > 0 ? <div className='flex gap-10 padding-[20px] flex-wrap justify-center'>
        {wishlistedAccomms?.map((item)=>{
            return (
                <Cards cardItem={item} />
            )
        })}
    </div> : <h1>Empty Wishlist</h1>}
</div>
  )
}

export default Wishlist