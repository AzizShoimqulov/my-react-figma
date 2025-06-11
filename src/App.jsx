import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductGrid from "./pages/ProductGrid";
import ProductDetail from "./pages/ProductDetail";
import Error from "./pages/Error";
import Categoreis from "./pages/Categoreis";
import Login from "./pages/context/Login";
import { WishlistProvider } from "./pages/context/WishlistContext";

const App = () => {
  return (
    <WishlistProvider>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<ProductGrid />} />
            <Route path="/products/:category" element={<ProductGrid />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/categories" element={<Categoreis />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </WishlistProvider>
  );
};

export default App;