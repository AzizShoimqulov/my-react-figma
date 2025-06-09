import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductGrid from "./pages/ProductGrid";
import ProductDetail from "./pages/ProductDetail";
import Search from "./pages/Search";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Search/>
      <Routes>
        <Route path="/" element={<ProductGrid />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
