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

        <div className='flex flex-col md:flex-row md:justify-between pt-11 px-2 pb-11 gap-8'>

          <div className='flex-1'>
            <h3 className='text-white font-bold text-2xl mb-3'>Store</h3>
            <p className='text-[#94a3b8] mb-3 text-[17px]'>
              Your one-stop shop for all your shopping <br /> needs. Quality products, competitive <br /> prices, and exceptional service.
            </p>
            <div className='text-[#94a3b8] flex mt-5 gap-2 cursor-pointer'>
              <FaFacebookSquare size={21} />
              <FaInstagram size={21} />
              <FaTwitter size={21} />
              <IoLogoYoutube size={21} />
            </div>
          </div>

          <div className='flex-1'>
            <h3 className='text-white font-bold text-2xl mb-3'>Shop</h3>
            {['All Products', 'Categories', 'Wishlist', 'Cart'].map(item => (
              <p key={item} className='text-[#94a3b8] text-[17px] hover:text-white cursor-pointer'>{item}</p>
            ))}
          </div>

          <div className='flex-1'>
            <h3 className='text-white font-bold text-2xl mb-3'>Account</h3>
            {['Login', 'Register', 'My Account', 'Order History'].map(item => (
              <p key={item} className='text-[#94a3b8] text-[17px] hover:text-white cursor-pointer'>{item}</p>
            ))}
          </div>

          <div className='flex-1'>
            <h3 className='text-white font-bold text-2xl mb-3'>Contact</h3>
            <p className='text-[#94a3b8] flex items-start gap-2 text-[17px] mb-2 hover:text-white cursor-pointer'>
              <FaLocationDot className='mt-[6px]' /> 123 Shopping Street, Retail City, 10001
            </p>
            <p className='text-[#94a3b8] flex items-start gap-2 text-[17px] mb-2 hover:text-white cursor-pointer'>
              <FiPhone className='mt-[6px]' /> (123) 456-7890
            </p>
            <p className='text-[#94a3b8] flex items-start gap-2 text-[17px] mb-2 hover:text-white cursor-pointer'>
              <CgMail className='mt-[6px]' /> info@store.com
            </p>
          </div>
        </div>

        <div className="w-full h-[1.4px] bg-gray-800"></div>

        <div className='flex flex-col md:flex-row mt-9 pb-12 justify-between px-2 gap-4 md:gap-0'>
          <p className='text-[#94a3b8] text-center md:text-left'>
            © 2023 Store. All rights reserved.
          </p>
          <div className='flex flex-col sm:flex-row gap-2 sm:gap-7 text-center sm:text-left'>
            <p className='text-[#94a3b8] hover:text-white cursor-pointer'>Privacy Policy</p>
            <p className='text-[#94a3b8] hover:text-white cursor-pointer'>Terms of Service</p>
            <p className='text-[#94a3b8] hover:text-white cursor-pointer'>Shipping Policy</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
