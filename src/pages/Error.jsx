import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/Без названия (1).jpg'

const Error = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-[#020817] px-4 text-center">
      <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">404 - Page Not Found</h2>
      <div className="w-32 h-1 bg-gray-300 mb-6"></div>
      <img 
        src={img} 
        alt="404" 
        className="max-w-xs md:max-w-md w-full mb-6 object-contain"
      />
      <p className="text-lg text-white mb-6">Siz noto‘g‘ri yo‘ldasiz</p>
      <Link 
        to="/" 
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded transition duration-300"
      >
        Go Back Home
      </Link>
    </section>
  )
}

export default Error