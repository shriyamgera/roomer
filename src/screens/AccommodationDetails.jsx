import React from 'react'
import { useLocation } from 'react-router'
import { FaFemale, FaMale, FaStar } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import { FaWifi, FaSoap, FaParking, FaSnowflake, FaUtensils, FaDumbbell, FaBook, FaVideo, FaShieldAlt, FaBolt } from 'react-icons/fa'


const AccommodationDetails = () => {
  const location = useLocation()
  const accommodation = location.state
  const iconClassName = 'text-[60px] '

  const amenityIcons = {
    WiFi: <FaWifi className={iconClassName} />,
    Laundry: <FaSoap className={iconClassName} />,    
    Parking: <FaParking className={iconClassName} />,
    AC: <FaSnowflake className={iconClassName} />,
    Meals: <FaUtensils className={iconClassName} />,
    Gym: <FaDumbbell className={iconClassName} />,
    "Study Room": <FaBook className={iconClassName} />,
    CCTV: <FaVideo className={iconClassName} />,
    "24x7 Security": <FaShieldAlt className={iconClassName} />,
    "Power Backup": <FaBolt className={iconClassName} />,
  };

  const bgGlassmorphism = 'rounded-3xl bg-opacity-10 backdrop-blur-xl p-5 shadow-lg  bg-orange-200'
  
  

  // return (
  //   <div className='text-yellow-950 '>
  //               <div className='bg-bannerImg bg-no-repeat bg-cover '>
  //               <div className='bg-blackOverlay '>
  //     <Navbar />
  //     </div>
  //     </div>

  //     <div className='flex gap-10 px-20 py-10 flex-wrap justify-center'>
  //       <div className='flex flex-col gap-5 items-center rounded-2xl'>
  //         <img
  //           src={`/${accommodation.img}`}
  //           alt={`${accommodation.type}`}
  //           className='rounded-2xl shadow-lg md:w-[600px] h-auto'
  //         />
  //                   <div className={`flex gap-5 flex-wrap items-center justify-center md:text-3xl text-xl text-yellow-900 font-bold ${bgGlassmorphism}`}>
  //           <p className=' text-4xl'> {accommodation.gender == "Male" ? <FaMale className='text-blue-400'/> : accommodation.gender == "Female" ? <FaFemale className='text-pink-400'/> : <div className='flex'><FaMale className='text-blue-400'/><FaFemale className='text-pink-400'/></div>}</p>
  //           <p> ₹{accommodation.rentAmount} {accommodation.paymentFrequency}</p>
  //         </div>
  //       </div>

  //       <div className={`flex-1 flex flex-col gap-5 items-start`}>
  //         <div className='flex flex-col items-start'>
  //           <h1 className='md:text-4xl text-2xl font-bold'>{accommodation.name}</h1>
  //           <h2 className='md:text-xl  text-lg'>{accommodation.type}</h2>
  //         </div>


  //         {/* <h3 className='text-2xl font-bold mt-5'>Amenities</h3> */}

  //       <div className={`p-5 rounded shadow-lg ${bgGlassmorphism}`}>

  //         <div className='flex items-center justify-center gap-10 flex-wrap'>
  //           {accommodation.amenities && accommodation.amenities.length > 0 ? (
  //             accommodation.amenities.map((amenity, index) => (
  //               <div key={index} className='flex flex-col items-center'>
  //               <p className='text-yellow-900' >{amenityIcons[amenity] || <FaShieldAlt/>}</p>
  //               <p>{amenity}</p>
  //             </div>
  //             ))
  //           ) : (
  //             <p>No amenities listed</p>
  //           )}
  //         </div>
  //       </div>

  //     </div>

  //   <div className='px-20 py-5 flex items-stretch justify-center gap-5 '>
  //     <div className=' flex-1'>
  //       <div className={`p-5 rounded shadow-lg h-full ${bgGlassmorphism}`}>
  //         <h3 className='text-2xl font-bold mb-2'>Food Details</h3>
  //         <p>Included: {accommodation.food?.included ? 'Yes' : 'No'}</p>
  //         {accommodation.food?.included && (
  //           <>
  //             <p>Type: {accommodation.food.type}</p>
  //             <p>Meals per Day: {accommodation.food.mealFrequency}</p>
  //           </>
  //         )}
  //       </div>
  //     </div>

  //     <div className='flex-1'>
  //       <div className={`p-5 rounded shadow-lg  h-full ${bgGlassmorphism}`}>
  //         <h3 className='text-2xl font-bold mb-2'>Room Details</h3>
  //         <p>Seater: {accommodation.roomDetails?.seater}</p>
  //         <p>
  //           Attached Bathroom:{' '}
  //           {accommodation.roomDetails?.attachedBathroom ? 'Yes' : 'No'}
  //         </p>
  //       </div>
  //     </div>
  //     </div>

  //     <h3 className='text-2xl font-bold mt-5'>Address and Contact Details</h3>
  //         <div className='flex flex-col items-start text-2xl gap-2'>
  //         <p>{accommodation.address}</p>
  //         <p> {accommodation.contactNumbers.join(', ')}</p>
  //         </div>
  //     </div>

      // <div className='px-1 my-10'>
      //   {/* <div className={`p-5 shadow-lg ${bgGlassmorphism}`}> */}
      //     <h3 className='text-2xl font-bold mb-5'>Reviews</h3>
      //     {accommodation.reviews && accommodation.reviews.length > 0 ? (
      //       <div className='flex gap-5 flex-wrap justify-center'>
      //         {accommodation.reviews.map((review, index) => (
      //           <div
      //             key={index}
      //             className='p-4 border shadow-md bg-orange-50 rounded-3xl'
      //           >
      //             <div className='flex items-center flex-col'>
      //               <div className='w-full flex -mb-8'>
      //               <p className='text-8xl font-coolvetica'>"</p>
      //               </div>
      //               <p className='font-semibold'>User: {review.userId}</p>
                    
                  
      //             <p className='mt-2'>{review.comment || 'No comment provided'}</p>
      //             <div className='flex mt-2'>
      //                 {Array.from({ length: 5 }, (_, i) => (
      //                   <FaStar
      //                     key={i}
      //                     fill={i < review.rating ? '#face21' : 'gray'}
      //                     className='mx-1'
      //                   />
      //                 ))}
      //               </div>
      //               </div>
      //           </div>  
      //         ))}
      //       </div>
      //     ) : (
      //       <p>No reviews available</p>
      //     )}
      //   </div>
  //     {/* </div> */}
  //   </div>

  // )

  return(
        <div className='text-yellow-950 '>
                <div className='bg-bannerImg bg-no-repeat bg-cover '>
                <div className='bg-blackOverlay '>
      <Navbar />
      </div>
      </div>

   <div className='flex gap-10 px-20 py-10 flex-wrap justify-center'>
    <div className='flex flex-col gap-5 items-center rounded-2xl'>
      <img
            src={`/${accommodation.img}`}
            alt={`${accommodation.type}`}
            className='rounded-2xl shadow-lg md:w-[600px] h-auto'
          />
                    <div className={`flex gap-5 flex-wrap items-center justify-center md:text-3xl text-xl text-yellow-900 font-bold ${bgGlassmorphism}`}>
            <p className=' text-4xl'> {accommodation.gender == "Male" ? <FaMale className='text-blue-400'/> : accommodation.gender == "Female" ? <FaFemale className='text-pink-400'/> : <div className='flex'><FaMale className='text-blue-400'/><FaFemale className='text-pink-400'/></div>}</p>
            <p> ₹{accommodation.rentAmount} {accommodation.paymentFrequency}</p>
          </div>
        </div>

        <div className={`flex-1 flex flex-col gap-5 items-start`}>
         <div className='flex flex-col items-start'>
           <h1 className='md:text-4xl text-2xl font-bold'>{accommodation.name}</h1>
          <h2 className='md:text-xl  text-lg'>{accommodation.type}</h2>
        </div>


         <h3 className='text-2xl font-bold mt-5'>Amenities</h3>
      <div className={`p-5 rounded shadow-lg w-full ${bgGlassmorphism}`}>

       <div className='flex items-center justify-center gap-10 flex-wrap'>
         {accommodation.amenities && accommodation.amenities.length > 0 ? (
              accommodation.amenities.map((amenity, index) => (
                <div key={index} className='flex flex-col items-center'>
                <p className='text-yellow-900' >{amenityIcons[amenity] || <FaShieldAlt/>}</p>
                <p>{amenity}</p>
              </div>
              ))
            ) : (
              <p>No amenities listed</p>
            )}
          </div>
        </div>
        <div className='flex w-full gap-4'>
      <div className={`p-5 rounded shadow-lg flex-1 ${bgGlassmorphism}`}>
       <h3 className='text-2xl font-bold mb-2'>Food Details</h3>
         <p>Included: {accommodation.food?.included ? 'Yes' : 'No'}</p>
         {accommodation.food?.included && (
            <>
              <p>Type: {accommodation.food.type}</p>
              <p>Meals per Day: {accommodation.food.mealFrequency}</p>
            </>
          )}
        </div>

  <div className={`p-5 rounded shadow-lg flex-1 ${bgGlassmorphism}`}>
          <h3 className='text-2xl font-bold mb-2'>Room Details</h3>
          <p>Seater: {accommodation.roomDetails?.seater}</p>
           <p>
             Attached Bathroom:{' '}
             {accommodation.roomDetails?.attachedBathroom ? 'Yes' : 'No'}
           </p>
         </div>
         </div>


         <div className='flex w-full gap-4'>

         <div className={`p-5 rounded shadow-lg flex-1 ${bgGlassmorphism}`}>
         <h3 className='text-2xl font-bold mb-2'>Address</h3>
          <div>
           <p>{accommodation.address}</p>
           </div>
           
          </div>

          <div className={`p-5 rounded shadow-lg flex-1 ${bgGlassmorphism}`}>
         <h3 className='text-2xl font-bold mb-2'>Contact Details</h3>
          <div>
           <p> {accommodation.contactNumbers.join(', ')}</p>
           </div>
           
          </div>


          </div>

          
       </div>

       
       </div>
       <div className='px-1 my-10'>
        {/* <div className={`p-5 shadow-lg ${bgGlassmorphism}`}> */}
          <h3 className='text-2xl font-bold mb-5'>Reviews</h3>
          {accommodation.reviews && accommodation.reviews.length > 0 ? (
            <div className='flex gap-5 flex-wrap justify-center'>
              {accommodation.reviews.map((review, index) => (
                <div
                  key={index}
                  className='p-4 border shadow-md bg-orange-50 rounded-3xl'
                >
                  <div className='flex items-center flex-col'>
                    <div className='w-full flex -mb-8'>
                    <p className='text-8xl font-coolvetica'>"</p>
                    </div>
                    <p className='font-semibold'>User: {review.userId}</p>
                    
                  
                  <p className='mt-2'>{review.comment || 'No comment provided'}</p>
                  <div className='flex mt-2'>
                      {Array.from({ length: 5 }, (_, i) => (
                        <FaStar
                          key={i}
                          fill={i < review.rating ? '#face21' : 'gray'}
                          className='mx-1'
                        />
                      ))}
                    </div>
                    </div>
                </div>  
              ))}
            </div>
          ) : (
            <p>No reviews available</p>
          )}
        </div>
      </div>

  )
}

export default AccommodationDetails
