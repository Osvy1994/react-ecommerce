/* eslint-disable react/prop-types */
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import './Products.css'
import { useCart } from '../hooks/useCart'

export function Products({ filteredProducts }) {
  const { addToCart, removeFromCart, cart } = useCart()

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <div className='products-section'>
      <ul>
        {filteredProducts.map(product => {
          const isProductInCart = checkProductInCart(product)

          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={`${product.title} image`} />
              <div>
                <span>{product.title} - </span>
                <span>${product.price}</span>
              </div>
              <button
                style={{ backgroundColor: isProductInCart ? 'red' : 'blue' }}
                className='product-icon'
                onClick={() =>
                  isProductInCart ? removeFromCart(product) : addToCart(product)
                }
              >
                {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
