import React from 'react'
import "../components/navbar.css"

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100]'>
        <h1 className='text-green-600 text-4xl font-bold cursor-pointer'>Reelflix</h1>
        <div>
            <button className='text-white pr-4'>Login In</button>
            <button className='bg-green-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar