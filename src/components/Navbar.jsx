import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-center py-5 gap-3">
      <a href="/">Home</a>
      <a href="./products">Products</a>
      {/* <a href="./contactForm">Contact Form</a> */}
      <a href="./userForm">User Form</a>
    </nav>
  );
};

export default Navbar;
