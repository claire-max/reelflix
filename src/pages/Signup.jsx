import React from 'react'

const Signup = () => {
  return (
    <>
    <div className='w-full h-screen'>
       <img className='hidden sm:block absolute w-full h-full object-cover' src="https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=600" alt='backimage'></img>
       <div className='bg-black/50 fixed top-0 left-0 w-full h-screen'></div>
       <div className='fixed w-full px-4 py-24 z-50'> 
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
                <h1 className='text-3xl font-bold'> Sign Up</h1>
                <form className='w-full flex flex-col py-4'>
                    <input className='p-3 my-2 rounded-md' type='email' placeholder='Email' autoComplete='email'/>
                    <input className='p-3 my-2 rounded-md' type='password' placeholder='Password' autoComplete='current-password' />
                    <button className='bg-green-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                </form>
            </div>
          </div>
       </div>
    </div>
    </>
  )
}

export default Signup