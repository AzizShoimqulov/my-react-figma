import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <footer className='bg-[#0D1526]'>
      <div className='flex'>
        <div>
          <h3 className='text-white'>Store</h3>
          <p className='text-[#94a3b8]'>Your one-stop shop for all your shopping <br /> needs. Quality products, competitive <br /> prices, and exceptional service.</p>
          <div className='text-[#94a3b8] flex'>
            <FaFacebookSquare/>
            <FaInstagram />
            <FaTwitter/>
            <IoLogoYoutube/>
          </div>
        </div>
        <div>
          <h3 className='text-white'>Shop</h3>
          <p className='text-[#94a3b8]'>All Products</p>
          <p className='text-[#94a3b8]'>Categories</p>
          <p className='text-[#94a3b8]'>Wishlist</p>
          <p className='text-[#94a3b8]'>Cart</p>
        </div>
        <div>
          <h3 className='text-white'>Account</h3>
          <p className='text-[#94a3b8]'>Login</p>
          <p className='text-[#94a3b8]'>Register</p>
          <p className='text-[#94a3b8]'>My Account</p>
          <p className='text-[#94a3b8]'>Order History</p>
        </div>
        <div>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer