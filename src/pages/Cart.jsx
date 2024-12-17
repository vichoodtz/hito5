import React, { useState } from 'react';


const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increaseCount = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decreaseCount = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.count, 0);

  return (
    <div className="cart">
      <h3>Detalle del Pedido</h3>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.img} alt={item.name} className="cart-image" />
            <h3>{item.name}</h3>
            <p>Precio: ${item.price}</p>
            <p>Cantidad: {item.count}</p>
            <button onClick={() => increaseCount(item.id)}>+</button>
            <button onClick={() => decreaseCount(item.id)}>-</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${calculateTotal()}</h3>
    </div>
  );
};

export default Cart;
