import React from 'react'

const Layout = (props) => {
  return (
    <div className=' min-h-screen container mx-auto sm:p-[40px] p-[20px] sm:py-[30px] py-[18px]'>
        {props.children}
    </div>
  )
}

export default Layout