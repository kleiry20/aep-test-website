import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import UserForm from "./components/UserForm";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/userForm" element={<UserForm />} />
      </Routes>
    </>
  );
}

export default App;
