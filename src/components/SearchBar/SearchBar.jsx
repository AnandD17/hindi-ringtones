import React from 'react'
import {FiSearch} from 'react-icons/fi'
const SearchBar = ({className}) => {
  return (
    <div className={`w-full border border-2 border-blue1 bg-white h-[40px] flex pl-3 rounded-lg ${className}`}>
        <input type="text" className='border-none outline-none focus:outline-none w-full' />
        <div className='w-[80px] flex items-center justify-center bg-blue1 float-right'>
            <FiSearch className='text-blue4 w-[20px]'/>
        </div>
    </div>
  )
}

export default SearchBar