import React, { useEffect, useState } from 'react'
import { FaSearch, FaMale, FaFemale } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter, updateSearchText } from '../store/features/SearchSlice'
import useDebounce from '../hooks/useDebounce';

const Search = () => {
    const dispatch = useDispatch()
    const filter = useSelector((state) => state.search.filter)

    const [searchValue, setsearchValue] = useState('')
    const debouncedSearch = useDebounce(searchValue, 300)
    const handleSearch = () => {
        dispatch(updateSearchText(searchValue))
    }
    useEffect(() => {
      handleSearch()
    }, [debouncedSearch])
    

    const onHandleClick = (category, type) => {
        dispatch(updateFilter({category, type}))
    }
    

    const liStyle = 'p-2 hover:scale-110 duration-150'
    const liStyleSelected = ' p-2 rounded-xl bg-yellow-400 backdrop-blur-xl hover:scale-110 duration-150 bg-opacity-60'

  return (
    <div className='flex items-center justify-center flex-col my-4'>
        
        <ul className='flex items-center justify-center gap-4 cursor-default md:text-2xl text-white bg-white font-bold bg-opacity-10 backdrop-blur-lg p-1 rounded-2xl relative top-4 shadow-lg'>
            <li className={`${filter.type.includes('PG') ? liStyleSelected : liStyle} `} onClick={()=>onHandleClick('type', 'PG')}>PG</li>
            <li className={`${filter.type.includes('Hostel') ? liStyleSelected : liStyle} `} onClick={()=>onHandleClick('type', 'Hostel')}>Hostel</li>
            <li className={`${filter.type.includes('Flat') ? liStyleSelected : liStyle} `} onClick={()=>onHandleClick('type', 'Flat')}>Flat</li>
            <li className={`${filter.gender.includes('Male') ? liStyleSelected : liStyle} text-blue-400`} onClick={()=>onHandleClick('gender', 'Male')}><FaMale/></li>
            <li className={`${filter.gender.includes('Female') ? liStyleSelected : liStyle} text-pink-400`} onClick={()=>onHandleClick('gender', 'Female')}><FaFemale/></li>
        </ul>
        <div className='flex justify-between bg-white p-2 items-center w-full md:gap-2 rounded-2xl md:w-[60%] lg:w-[40%] pr-4 mb-5 pt-5'>
            <input className='px-2 w-full outline-none text-xl font-coolvetica' value={searchValue} onChange={(e) => setsearchValue(e.target.value)} placeholder='Enter Name or Location.....'/>
           <FaSearch className='text-yellow-700 text-2xl'/>
        </div>
    </div>
  )
}

export default Search