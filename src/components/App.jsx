import { useFilters } from '../hooks/useFilters'
import { Header } from './Filters'
import { Products } from './Products'
import { Cart } from './Cart'
import { CartProvider } from '../context/cartContext'
import { useEffect, useState } from 'react'

export function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://dummyjson.com/products')
      const json = await res.json()
      setProducts(json.products)
    }

    fetchData()
    
  }, [])

  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Cart />
      <Header />
      <Products filteredProducts={filteredProducts} />
    </CartProvider>
  )
}
