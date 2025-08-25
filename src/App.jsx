import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from "./components/Products";
import Home from "./components/Home";
import ContactForm from "./components/ContactForm";
import ProductDetail from "./components/ProductDetail";
import UserForm from "./components/UserForm";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/userForm" element={<UserForm />} />
          {/* <Route path="/contactForm" element={<ContactForm />} /> */}
          <Route path="/product/:id" element={<ProductDetail />} />
          {/* <Route path="/products" element={<Products />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
