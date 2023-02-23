import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const { user, logIn } = UserAuth();
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('')
      try {
        await logIn(email, password)
        navigate('/')
      } catch (error) {
        console.log(error);
        setError(error.message)
      }
    };
  return (
    <div className='w-full h-screen'>
    <img
      className='hidden sm:block absolute w-full h-full object-cover'
      src='https://plus.unsplash.com/premium_photo-1675237624880-da169dd82f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9wY29ybnxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'
      alt='/'
    />
    <br/><br/>
    <div className='bg-gray/60 fixed top-0 left-0 w-full h-screen '></div>
    <div className='fixed w-full px-4 py-24 z-50 '>
      <div className='max-w-[450px] h-[600px] mx-auto bg-neutral-800/75 text-white rounded-md'>
        <div className='max-w-[320px] mx-auto py-16'>
          <h1 className='text-3xl font-bold'>Login</h1>
          {error ? <p className='p-3 my-2'>{error}</p> : null}
          <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className='p-3 my-2 bg-gray-700 rounded-md'
              type='email'
              placeholder='Email'
              autoComplete='email'
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className='p-3 my-2 bg-gray-700 rounded-md'
              type='password'
              placeholder='Password'
              autoComplete='current-password'
            />
            <button className=' bg-pink-600/75 py-3 my-6 rounded font-bold'>
              Login
            </button>
            <div className='flex justify-between items-center text-sm text-white-400'>
              <p>
                <input className='mr-2' type='checkbox' />
                Remember me
              </p>
              <p>Need Help?</p>
            </div>
            <p className='py-8'>
              <span className='text-pink-600 '>New to Reelflix?</span>{' '}
              <Link to='/signup'>Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
);
};

export default Login;