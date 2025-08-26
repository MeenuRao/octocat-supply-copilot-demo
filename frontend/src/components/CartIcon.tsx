import React from 'react';
import { Link } from 'react-router-dom';

const CartIcon: React.FC<{ itemCount: number }> = ({ itemCount }) => (
  <Link to="/cart" className="relative inline-block">
    <img src="/cart.png" alt="Cart" className="w-8 h-8" />
    {itemCount > 0 && (
      <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">
        {itemCount}
      </span>
    )}
  </Link>
);

export default CartIcon;
