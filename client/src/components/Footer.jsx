import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-12 my-10 mt-30 text-sm'>
                <div>
                    <img src={assets.logo} className='mt-1 w-32' alt="" />
                    <p className='w-full md:w-2/3 text-gray-600 mt-3'>
                        Forever — Your trusted destination for the latest collections, exclusive offers, and timeless quality.
                    </p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li className='hover:text-black cursor-pointer'>Home</li>
                        <li className='hover:text-black cursor-pointer'>About us</li>
                        <li className='hover:text-black cursor-pointer'>Delivery</li>
                        <li className='hover:text-black cursor-pointer'>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li className='hover:text-black cursor-pointer'>+1-212-456-7890</li>
                        <li className='hover:text-black cursor-pointer'>contact@foreveru.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2026@ forever.com - All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer
