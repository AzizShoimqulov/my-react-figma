import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useWishlist } from "../pages/context/WishlistContext";

const Card = ({ product }) => {
  const { wishlist, toggleWishlist } = useWishlist();
  const liked = wishlist.some((item) => item.id === product.id);

  return (
    <div className="bg-[#020817] text-white border border-gray-700 rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.title} className="w-full h-[330px] object-cover" />
        </Link>
        <button
          onClick={() => toggleWishlist(product)}
          className="absolute top-2 right-2 bg-black/30 hover:bg-white/20 p-2 rounded-full transition-all"
        >
          {liked ? <FaHeart className="text-red-500 text-xl" /> : <FaRegHeart className="text-white text-xl" />}
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg truncate">{product.title}</h3>
        <p className="text-sm text-gray-400 mt-1 line-clamp-2">{product.description}</p>
        <div className="mt-4">
          <span className="font-bold text-xl">${product.price}</span>
          <button className="bg-blue-600 w-full mt-4 hover:bg-blue-700 rounded-md px-4 py-2 text-white">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
