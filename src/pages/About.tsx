import React from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'
import '../App.css';

export function About() {
  const {orders} = useShoppingCart();
  return (
    <>
    <h1>About</h1>
    <h3 style={{textAlign: "center", marginBottom: "30px", color: "black"}}>Orders: </h3>
    {orders.map(order => {
      return (
      <div className="orders-container">
      <h2>ID: {order.id}</h2>
      <h2>Price: {order.price}</h2>
      <h2>Date Ordered: {new Date().toString().split(" ").slice(0, 4).join(" ")}</h2>
      </div>
      )
      
    })}
    </>
  )
}

