import React from 'react';

const CartPage: React.FC = () => {
  // Placeholder for cart items, replace with context or state as needed
  type CartItem = { name: string; quantity: number };
  const cartItems: CartItem[] = [];

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, idx) => (
            <li key={idx} className="mb-2 p-2 border rounded">
              {/* Render item details here */}
              {item.name} - Qty: {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
