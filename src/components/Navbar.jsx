import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-center py-5 gap-3">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/userForm">User Form</Link>
    </nav>
  );
};

export default Navbar;
