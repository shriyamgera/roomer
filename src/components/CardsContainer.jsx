import React, { useCallback, useEffect, useState } from 'react'
import Cards from './Cards'
import api from '../config/api'
import { useDispatch, useSelector } from 'react-redux'
import { insertAccommodations } from '../store/features/AccommodationSlice'
import { setLoading } from '../store/features/UtilSlice'

const CardsContainer = () => {
    const [allData, setallData] = useState([])
    const [filterdData, setFilteredData] = useState([])

    const dispatch = useDispatch()
    const storeAccommodations = useSelector(state=> state.accommodation.accommodations)
    const fetchAccomodations = useCallback(async()=>{
        if(storeAccommodations && storeAccommodations?.length > 0){
            setallData(storeAccommodations)
            setFilteredData(storeAccommodations)
            return
        }
        try {
            dispatch(setLoading(true))
            const data = await fetch(api.accommodation)
            const res = await data.json()
            dispatch(insertAccommodations(res))
            setallData(res)
            setFilteredData(res)
            dispatch(setLoading(false))
        } catch (error) {
            console.error(error)
        }
        
    },[dispatch])

    useEffect(() => {
      fetchAccomodations()
    }, [])

    const searchText = useSelector((state) => state.search.searchText)
    const filter = useSelector((state) => state.search.filter)

    useEffect(() => {
        if(searchText || filter?.type.length > 0 || filter?.gender.length > 0){
            const newFilteredData = allData.filter((item) => 
                (item?.name?.toLowerCase().includes(searchText.toLowerCase()) || 
                    item?.location?.toLowerCase().includes(searchText.toLowerCase())) &&
                ((filter.type.length === 0 || filter.type.includes(item.type)) && (filter.gender.length === 0 || item.gender.some(item=> filter.gender.includes(item))))
            )
            setFilteredData(newFilteredData)
        }else{
            setFilteredData(allData)
        }
        
    },[searchText, filter, allData])
    
  return (
    <div className='md:m-10 md:p-10 min-h-[100vh]'>
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