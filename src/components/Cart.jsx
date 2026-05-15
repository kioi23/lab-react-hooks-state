import React from "react";

function Cart({ cartItems }) {
  return (
    <div>
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <p key={item.id}>
            {item.name} is in your cart
            {item.quantity > 1 ? ` (x${item.quantity})` : ""}
          </p>
        ))
      )}
    </div>
  );
}

export default Cart;