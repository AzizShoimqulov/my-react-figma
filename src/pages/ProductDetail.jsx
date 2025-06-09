import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-white p-8">Loading...</div>;
  if (!product) return <div className="text-white p-8">Product not found.</div>;

  return (
    <div className="bg-[#020817] text-white p-8 min-h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-full max-h-[500px] object-contain rounded-lg shadow-lg"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-400 mb-4">{product.description}</p>
          <div className="text-xl font-semibold mb-4">${product.price}</div>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
