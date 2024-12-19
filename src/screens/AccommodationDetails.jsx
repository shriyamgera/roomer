import React from 'react'
import { useLocation } from 'react-router'
import { FaStar } from 'react-icons/fa'
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
  
  

  return (
    <div className='text-blue-950 min-h-[100vh] '>
      <Navbar />
      <div className='flex gap-10 px-20 py-10 flex-wrap justify-center'>
        <div className='flex items-center'>
          <img
            src={`/${accommodation.img}`}
            alt={`${accommodation.type}`}
            className='rounded shadow-lg md:w-[600px] h-auto'
          />
        </div>

        <div className='flex-1 flex flex-col gap-5 p-5 border shadow-lg rounded'>
          <div>
            <h1 className='md:text-4xl text-2xl font-bold'>{accommodation.name}</h1>
            <h2 className='md:text-xl  text-lg'>{accommodation.location}</h2>
          </div>
          <div className='flex flex-col items-start gap-2 md:text-3xl text-xl text-blue-500 font-bold'>
            <p><span className='font-bold mr-2 text-blue-950 '>Type:</span> {accommodation.type}</p>
            <p><span className='font-bold mr-2 text-blue-950'>For:</span> {accommodation.gender.join(', ')}</p>
            <p>
            <span className='font-bold mr-2 text-blue-950'>Rent:</span> ₹{accommodation.rentAmount} {accommodation.paymentFrequency}
            </p>
            <p><span className='font-bold mr-2 text-blue-950'>Address:</span> {accommodation.address}</p>
            <p>
            <span className='font-bold mr-2 text-blue-950'>Contact Numbers:</span> {accommodation.contactNumbers.join(', ')}
            </p>
          </div>
        </div>
      </div>


      <div className='px-20 py-5'>
        <div className='p-5 border rounded shadow-lg'>
          <h3 className='text-2xl font-bold mb-10'>Amenities</h3>
          <div className='flex items-center justify-center gap-10 flex-wrap'>
            {accommodation.amenities && accommodation.amenities.length > 0 ? (
              accommodation.amenities.map((amenity, index) => (
                <div key={index} className='flex flex-col items-center'>
                <p>{amenityIcons[amenity] || <FaShieldAlt />}</p>
                <p>{amenity}</p>
              </div>
              ))
            ) : (
              <p>No amenities listed</p>
            )}
          </div>
        </div>
      </div>

    <div className='px-20 py-5 flex items-stretch justify-center gap-5'>
      <div className=' flex-1'>
        <div className='p-5 border rounded shadow-lg h-full'>
          <h3 className='text-2xl font-bold mb-2'>Food Details</h3>
          <p>Included: {accommodation.food?.included ? 'Yes' : 'No'}</p>
          {accommodation.food?.included && (
            <>
              <p>Type: {accommodation.food.type}</p>
              <p>Meals per Day: {accommodation.food.mealFrequency}</p>
            </>
          )}
        </div>
      </div>

      <div className='flex-1'>
        <div className='p-5 border rounded shadow-lg  h-full'>
          <h3 className='text-2xl font-bold mb-2'>Room Details</h3>
          <p>Seater: {accommodation.roomDetails?.seater}</p>
          <p>
            Attached Bathroom:{' '}
            {accommodation.roomDetails?.attachedBathroom ? 'Yes' : 'No'}
          </p>
        </div>
      </div>
      </div>

      <div className='px-1'>
        <div className='p-5 border rounded shadow-lg'>
          <h3 className='text-2xl font-bold mb-5'>Reviews</h3>
          {accommodation.reviews && accommodation.reviews.length > 0 ? (
            <div className='flex gap-5 flex-wrap justify-center'>
              {accommodation.reviews.map((review, index) => (
                <div
                  key={index}
                  className='p-4 border rounded shadow-md bg-gray-100'
                >
                  <div className='flex justify-between items-center'>
                    <p className='font-semibold'>User: {review.userId}</p>
                    <div className='flex'>
                      {Array.from({ length: 5 }, (_, i) => (
                        <FaStar
                          key={i}
                          fill={i < review.rating ? 'yellow' : 'gray'}
                          className='mx-1'
                        />
                      ))}
                    </div>
                  </div>
                  <p className='mt-2'>{review.comment || 'No comment provided'}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No reviews available</p>
          )}
        </div>
      </div>
    </div>
    
  )
}

export default AccommodationDetails
