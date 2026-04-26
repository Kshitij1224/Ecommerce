import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios'
import { toast } from 'react-toastify';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(backendUrl + '/api/user/register', { name, email, password })
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        } else {
          toast.error(response.data.message)
        }
      } else {
        const response = await axios.post(backendUrl + '/api/user/login', { email, password })
        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        }else{
          toast.error(response.data.message)
        }
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  };

  useEffect(()=>{
    if(token){
      navigate('/')
    }
  },[token])

  return (
  <form
    onSubmit={onSubmitHandler}
    className='flex flex-col items-center w-[90%] sm:max-w-md m-auto mt-20 gap-5 text-gray-800 bg-white p-8 rounded-2xl shadow-lg'
  >

    {/* Heading */}
    <div className='inline-flex items-center gap-3 mb-2'>
      <p className='prata-regular text-3xl'>{currentState}</p>
      <hr className='border-none h-[2px] w-10 bg-gray-800 rounded' />
    </div>

    {/* Name (only for signup) */}
    {
      currentState !== 'Login' && (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder='Your Name'
          className='w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-black transition'
          required
        />
      )
    }

    {/* Email */}
    <input
      onChange={(e) => setEmail(e.target.value)}
      value={email}
      type="email"
      placeholder='Email Address'
      className='w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-black transition'
      required
    />

    {/* Password */}
    <input
      onChange={(e) => setPassword(e.target.value)}
      value={password}
      type="password"
      placeholder='Password'
      className='w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-black transition'
      required
    />

    {/* Links */}
    <div className='w-full flex justify-between text-sm text-gray-600'>
      <p className='cursor-pointer hover:text-black transition'>
        Forgot your password?
      </p>

      {
        currentState === 'Login'
          ? (
            <p
              onClick={() => setCurrentState('Sign Up')}
              className='cursor-pointer hover:text-black transition font-medium'
            >
              Create Account
            </p>
          )
          : (
            <p
              onClick={() => setCurrentState('Login')}
              className='cursor-pointer hover:text-black transition font-medium'
            >
              Login Here
            </p>
          )
      }
    </div>

    {/* Button */}
    <button
      className='w-full bg-black text-white font-medium py-2 rounded-lg mt-3 hover:bg-gray-800 active:scale-95 transition-all duration-200'
    >
      {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
    </button>

  </form>
)
}

export default Login
