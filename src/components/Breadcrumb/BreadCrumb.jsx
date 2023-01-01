import React from 'react'

const BreadCrumb = ({className}) => {
  return (
    <div className={`w-full flex justify-end ${className}`}>
        Home {'>'} NCP {'>'} <span className='text-blue6'>Warriyo Mortals</span>
    </div>
  )
}

export default BreadCrumb