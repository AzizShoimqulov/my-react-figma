import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function Card({ product }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-[#020817] border-1 border-gray-700 rounded-lg overflow-hidden shadow-lg text-white">
      <div className="relative w-full h-64">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-[330px] object-cover"
        />
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-2 right-2 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all"
        >
          {liked ? (
            <FaHeart className="text-red-500 text-xl" />
          ) : (
            <FaRegHeart className="text-white text-xl" />
          )}
        </button>
      </div>
      <div className="p-4 mt-17">
        <h3 className="font-semibold text-lg truncate">
          {product.title}
        </h3>
        <p className="text-sm text-gray-400 mt-1 line-clamp-2">
          {product.description}
        </p>
        <div className=" mt-4">
          <span className="font-bold flex text-xl">${product.price}</span>
          <button className="bg-blue-600 w-full mt-4 hover:bg-blue-700 rounded-md px-4 py-2 text-white">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}