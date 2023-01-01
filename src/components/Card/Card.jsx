import React from 'react'

const Card = ({children, className}) => {
  return (
    <div className={`bg-white sm:p-[30px] p-[20px] sm:rounded-[20px] rounded-[15px] drop-shadow-xl ${className}`}>
        {children}
    </div>
  )
}

export default Card