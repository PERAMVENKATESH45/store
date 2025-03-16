import React from "react";

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">Shopping Store</h1>
      <button onClick={onCartClick} className="bg-white text-blue-500 px-4 py-2 rounded">
        Cart ({cartCount})
      </button>
    </nav>
  );
};

export default Navbar;
