import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import api from '../config/api'
import { useDispatch, useSelector } from 'react-redux'
import { insertAccommodations } from '../store/features/AccommodationSlice'

const CardsContainer = () => {
    const [allData, setallData] = useState([])
    const [filterdData, setFilteredData] = useState([])

    const dispatch = useDispatch()

    const fetchAccomodations = async()=>{
        try {
            const data = await fetch(api.accommodation)
            const res = await data.json()
            dispatch(insertAccommodations(res))
            console.log(res);
            
            setallData(res)
            setFilteredData(res)
        } catch (error) {
            console.error(error)
        }
        
    }

    useEffect(() => {
      fetchAccomodations()
    }, [])

    const searchText = useSelector((state) => state.search.searchText)
    const filter = useSelector((state) => state.search.filter)

    useEffect(() => {
        const newFilteredData = allData.filter((item) => 
            (item?.name?.toLowerCase().includes(searchText.toLowerCase()) || 
                item?.location?.toLowerCase().includes(searchText.toLowerCase())) &&
            ((filter.type.length === 0 || filter.type.includes(item.type)) && (filter.gender.length === 0 || item.gender.some(item=> filter.gender.includes(item))))
        )
        setFilteredData(newFilteredData)
    },[searchText, filter])
    
  return (
    <div className='m-10 p-10'>
        <div className='flex gap-10 padding-[20px] flex-wrap justify-center'>
            {filterdData?.map((item)=>{
                return (
                    <Cards cardItem={item} />
                )
            })}
        </div>
    </div>
  )
}

export default CardsContainer