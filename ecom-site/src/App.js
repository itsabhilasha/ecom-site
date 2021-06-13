import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [items, setItems] = React.useState([
    { name: "Lilac Love", price: 300, qty: 0, stock: 10 },
    { name: "Blueberry Parfait", price: 250, qty: 0, stock: 10 },
    { name: "Two-Vivacious", price: 300, qty: 0, stock: 10 },
  ]);

  const addCart = (index) => {
    var temp = items.map((i) => i);
    if (temp[index].qty < 10) temp[index].qty += 1;
    setItems(temp);
  };

  const subCart = (index) => {
    var temp = items.map((i) => i);
    if (temp[index].qty > 0) temp[index].qty -= 1;
    setItems(temp);
  };
  return (
    <div className="App">
      <div className="nav-bar">
        <h3>Home</h3>
        <h2>Gifting Solutions by Abhilasha </h2>
        <h3>Cart</h3>
      </div>
      <table className="items-table">
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
        {items.map((item, index) => (
          <tr className="item-row">
            <td>{item.name}</td>
            <td>₹{item.price}</td>
            <td className="item-quantity">
              <button onClick={() => subCart(index)}>-</button>
              <div>{item.qty}</div>
              <button onClick={() => addCart(index)}>+</button>
            </td>
          </tr>
        ))}
      </table>
      <h3>
        Your total is: &nbsp; ₹
        {items.map((i, index) => i.price * i.qty).reduce((a, b) => a + b)}
      </h3>
      &emsp;&emsp;
      <button>Checkout and Pay</button>
    </div>
  );
}

export default App;
