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
    

    const liStyle = 'p-2'
    const liStyleSelected = 'bg-blue-300 p-2 rounded-full'

  return (
    <div className='flex items-center justify-center flex-col gap-4 my-4'>
        <div className='flex justify-between border border-blue-950 p-2 items-center md:mt-4 my-2 md:gap-2 rounded-2xl md:w-[40%] pr-4'>
            <input className='px-2 w-full outline-none bg-transparent' value={searchValue} onChange={(e) => setsearchValue(e.target.value)} placeholder='Enter Name or Location.....'/>
           <FaSearch className='text-blue-700'/>
        </div>
        <ul className='flex items-center justify-center gap-4 cursor-default md:text-2xl text-blue-950 font-bold'>
            <li className={`${filter.type.includes('PG') ? liStyleSelected : liStyle} hover:scale-110 duration-150`} onClick={()=>onHandleClick('type', 'PG')}>PG</li>
            <li className={`${filter.type.includes('Hostel') ? liStyleSelected : liStyle} hover:scale-110 duration-150`} onClick={()=>onHandleClick('type', 'Hostel')}>Hostel</li>
            <li className={`${filter.type.includes('Flat') ? liStyleSelected : liStyle} hover:scale-110 duration-150`} onClick={()=>onHandleClick('type', 'Flat')}>Flat</li>
            <li className={`${filter.gender.includes('Male') ? liStyleSelected : liStyle} hover:scale-125 duration-150`} onClick={()=>onHandleClick('gender', 'Male')}><FaMale/></li>
            <li className={`${filter.gender.includes('Female') ? liStyleSelected : liStyle} hover:scale-125 duration-150`} onClick={()=>onHandleClick('gender', 'Female')}><FaFemale/></li>
        </ul>
    </div>
  )
}

export default Search