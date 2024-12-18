import React from 'react'
import { FaSearch, FaMale, FaFemale } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter, updateSearchText } from '../store/features/SearchSlice'

const Search = () => {
    const dispatch = useDispatch()
    const searchText = useSelector((state) => state.search.searchText)
    const filter = useSelector((state) => state.search.filter)

    const onHandleClick = (category, type) => {
        dispatch(updateFilter({category, type}))
    }
    const handleSearch = (e) => {
        dispatch(updateSearchText(e.target.value))
    }

    const liStyle = 'p-2'
    const liStyleSelected = 'bg-blue-300 p-2 rounded-full'

  return (
    <div className='flex items-center justify-center flex-col gap-4 my-4'>
        <div className='flex justify-between border p-2 items-center mt-4 gap-2 rounded-2xl w-[40%] pr-4'>
            <input className='px-2 w-full outline-none' value={searchText} onChange={(e) => handleSearch(e)} placeholder='Enter Name or Location.....'/>
           <FaSearch/>
        </div>
        <ul className='flex items-center justify-center gap-4 cursor-default'>
            <li className={filter.type.includes('PG') ? liStyleSelected : liStyle} onClick={()=>onHandleClick('type', 'PG')}>PG</li>
            <li className={filter.type.includes('Hostel') ? liStyleSelected : liStyle} onClick={()=>onHandleClick('type', 'Hostel')}>Hostel</li>
            <li className={filter.type.includes('Flat') ? liStyleSelected : liStyle} onClick={()=>onHandleClick('type', 'Flat')}>Flat</li>
            <li className={filter.gender.includes('male') ? liStyleSelected : liStyle} onClick={()=>onHandleClick('gender', 'male')}><FaMale/></li>
            <li className={filter.gender.includes('female') ? liStyleSelected : liStyle} onClick={()=>onHandleClick('gender', 'female')}><FaFemale/></li>
        </ul>
    </div>
  )
}

export default Search