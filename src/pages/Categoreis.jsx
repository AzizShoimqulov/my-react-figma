import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
  { title: "Electronics", key: "electronics" },
  { title: "Jewelery", key: "jewelery" },
  { title: "Men's Clothing", key: "men's clothing" },
  { title: "Women's Clothing", key: "women's clothing" }
];


const Categoreis = () => {
  const navigate = useNavigate();

  const handleView = (category) => {
    navigate(`/products/${encodeURIComponent(category)}`);
  };

  return (
    <main className='bg-[#020817]'>
      <div className='max-w-[1450px] mx-auto pt-8 pb-10 px-4 sm:px-6 lg:px-8'>
        <h1 className='text-3xl pb-8 font-bold text-white'>Categories</h1>
        <div className='flex flex-wrap gap-6 justify-between'>
          {categories.map(({ title, key }) => (
            <div key={key} className='bg-[#020817] border border-gray-700 rounded-lg shadow-lg p-5 w-[320px] text-white'>
              <h3 className='text-2xl mt-2 mb-2 font-bold'>{title}</h3>
              <p className='text-[#94a3b8] mb-2'>Browse all {title.toLowerCase()} products</p>
              <button
                onClick={() => handleView(key)}
                className='bg-[#020817] border border-gray-700 w-full mt-4 hover:bg-blue-900 rounded-md px-4 py-2 text-white'
              >
                View Products
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Categoreis;
