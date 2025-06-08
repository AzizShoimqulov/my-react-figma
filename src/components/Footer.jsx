import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { CgMail } from "react-icons/cg";

const Footer = () => {
  return (
    <footer className='bg-[#0D1526]'>
      <div className='max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between pt-11 pr-2 pl-2 pb-11'>
          <div>
            <h3 className='text-white font-bold text-2xl mb-3'>Store</h3>
            <p className='text-[#94a3b8] mb-3 text-[17px]'>Your one-stop shop for all your shopping <br /> needs. Quality products, competitive <br /> prices, and exceptional service.</p>
            <div className='text-[#94a3b8] flex mt-5 gap-2'>
              <FaFacebookSquare size={21}/>
              <FaInstagram size={21}/>
              <FaTwitter size={21}/>
              <IoLogoYoutube size={21}/>
            </div>
          </div>
          <div>
            <h3 className='text-white font-bold text-2xl mb-3'>Shop</h3>
            <p className='text-[#94a3b8] text-[17px]'>All Products</p>
            <p className='text-[#94a3b8] text-[17px]'>Categories</p>
            <p className='text-[#94a3b8] text-[17px]'>Wishlist</p>
            <p className='text-[#94a3b8] text-[17px]'>Cart</p>
          </div>
          <div>
            <h3 className='text-white font-bold text-2xl mb-3'>Account</h3>
            <p className='text-[#94a3b8] text-[17px]'>Login</p>
            <p className='text-[#94a3b8] text-[17px]'>Register</p>
            <p className='text-[#94a3b8] text-[17px]'>My Account</p>
            <p className='text-[#94a3b8] text-[17px]'>Order History</p>
          </div>
          <div>
            <h3 className='text-white font-bold text-2xl mb-3'>Contact</h3>
            <p className='text-[#94a3b8] flex text-[17px]'><p><FaLocationDot/></p>123 Shopping Street, Retail City, 10001</p>
            <p className='text-[#94a3b8] flex text-[17px]'>p<FiPhone/>(123) 456-7890</p>
            <p className='text-[#94a3b8] flex text-[17px]'><CgMail/>info@store.com</p>
          </div>
        </div>
        <div className="w-[1000px] h-[1.7px] bg-[#020817]"></div>
        <div>
          <p className='text-white'>© 2023 Store. All rights reserved.</p>
          <div className='flex gap-7'>
            <p className='text-[#94a3b8]'>Privacy Policy</p>
            <p className='text-[#94a3b8]'>Terms of Service</p>
            <p className='text-[#94a3b8]'>Shipping Policy</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer