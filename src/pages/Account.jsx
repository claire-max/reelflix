
import React from 'react';
import SavedShows from '../components/SavedShows';

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
        <img
          className='w-full h-[500px] object-cover'
          src='https://images.pexels.com/photos/5082566/pexels-photo-5082566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt='/'
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px] rounded-md'></div>
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-2xl md:text-4xl font-bold'>My Shows</h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
};

export default Account;