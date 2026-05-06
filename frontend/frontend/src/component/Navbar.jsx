// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/contact">Contact</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
};

export default Navbar;
