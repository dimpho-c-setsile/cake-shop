import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

export default function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1 className="cart-title">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <h2>Your cart is empty 😭</h2>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p>R {item.price}</p>
                </div>

                <div className="cart-qty">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Total: R {total}</h2>
            <button className="checkout-btn">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
