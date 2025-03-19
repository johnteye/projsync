import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Homepage = () => {
  return (
    <div className='w-full h-screen flex'>
      <div className='hidden sm:w-[20%] sm:flex sm:justify-center p-4' >
        <Sidebar />
      </div>
      <div className='w-full sm:w-[80%] bg-gray-100 p-4'>
        <Navbar />

      </div>
    </div>
  )
}

export default Homepage