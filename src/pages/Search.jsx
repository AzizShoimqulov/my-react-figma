import React from 'react'

const Search = () => {
  return (
    <div>
      <h1>Onlayn Store</h1>
      <div className="flex items-center gap-3 p-4">
        <input
          type="text"
          placeholder="Izlash..."
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">
          Search
        </button>
      </div>
    </div> // ❗️Bu yopuvchi `div` sizning `return` blokini to‘liq tugatadi
  )
}

export default Search
