import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductGrid from "./pages/ProductGrid";
import ProductDetail from "./pages/ProductDetail";
import Error from "./pages/Error";
import Categoreis from './pages/Categoreis';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductGrid />} />
        <Route path="/products/:category" element={<ProductGrid />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/categories" element={<Categoreis />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
