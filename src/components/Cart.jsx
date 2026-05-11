import React from 'react';
function Cart({ cartItems }) {

  return (
    <div>
      <h2>Cart</h2>

      {cartItems.map((item, index) => (
        <p key={index}>
          {item.name} is in your cart.
        </p>
      ))}
    </div>
  );
}

export default Cart;