import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Shop.css";

export default function Shop() {
  const { addToCart } = useContext(CartContext);

  // Fake product catalog (later from DB)
  const products = [
    {
      id: 1,
      name: "Nike Sneakers",
      price: 1200,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 900,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 3,
      name: "Headphones",
      price: 600,
      image: "https://via.placeholder.com/200",
    },
  ];

  return (
    <div className="shop-container">
      <h1 className="shop-title">🛍 Shop Products</h1>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>
            <p>R {product.price}</p>

            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
