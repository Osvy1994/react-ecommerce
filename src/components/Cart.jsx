/* eslint-disable react/prop-types */
import { useState } from 'react'
import './Cart.css'
import { useCart } from '../hooks/useCart'
import { ClearCartIcon } from './Icons'

function CartItem({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <div className='product-container'>
      <img src={thumbnail} alt={title} />
      <div className='product-price'>
        <span>{title} - </span>
        <span>${price}</span>
      </div>
      <div className='quantity'>
        <p>Qty: {quantity}</p>
        <button onClick={addToCart}>+</button>
      </div>
    </div>
  )
}

export function Cart() {
  const [showCart, setShowCart] = useState(false)
  const { cart, clearCart, addToCart } = useCart()

  const handleShowCart = () => {
    setShowCart(!showCart)
  }

  return (
    <div className='cart-section'>
      <button onClick={handleShowCart}>🛒</button>
      <div className='cart' style={{ display: showCart ? 'flex' : 'none' }}>
        <h1>Cart</h1>
        <ul>
          {cart.map(item => (
            <CartItem
              key={item.id}
              {...item}
              addToCart={() => addToCart(item)}
            />
          ))}
        </ul>
        <footer>
          <button onClick={() => clearCart()}>
            <ClearCartIcon />
          </button>
        </footer>
      </div>
    </div>
  )
}
