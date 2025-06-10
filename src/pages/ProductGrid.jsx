import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "../pages/Card";
import Search from "./Search";

export default function ProductGrid() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState(category || "");

  useEffect(() => {
    const selectedCategory = decodeURIComponent(activeCategory || "");
    const url = selectedCategory
      ? `https://fakestoreapi.com/products/category/${selectedCategory}`
      : `https://fakestoreapi.com/products`;

    fetch(url)
      .then((res) => res.json())
      .then(setProducts)
      .catch((err) => console.error("API error:", err));
  }, [activeCategory]);

  const handleCategoryChange = (newCategory) => {
    setActiveCategory(newCategory);
    if (newCategory) {
      navigate(`/products/${encodeURIComponent(newCategory)}`);
    } else {
      navigate(`/`);
    }
  };

  const handleSearch = (text) => {
    setSearchTerm(text.toLowerCase());
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="bg-[#020817] min-h-screen">
      <Search onCategoryChange={handleCategoryChange} onSearch={handleSearch} />
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
