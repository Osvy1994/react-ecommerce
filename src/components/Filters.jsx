import { useFilters } from '../hooks/useFilters'
import { useId } from 'react'

export function Header() {
  const { setFilters, filters } = useFilters()
  const priceId = useId()
  const categoryId = useId()

  const handlePriceChange = e => {
    setFilters(prevState => ({
      ...prevState,
      price: e.target.value,
    }))
  }

  const handleCategoryChange = e => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value,
    }))
  }

  return (
    <>
      <h1>Shopping Cart</h1>
      <div className='filters-container'>
        <div className='price-filter'>
          <label htmlFor={priceId}></label>
          <input
            id={priceId}
            type='range'
            defaultValue={0}
            min={0}
            max={1000}
            onChange={handlePriceChange}
          />
          <span> ${filters.price}</span>
        </div>
        <div>
          <label htmlFor={categoryId}></label>
          <select
            name='categories'
            id={categoryId}
            onChange={handleCategoryChange}
          >
            <option value='all'>All</option>
            <option value='smartphones'>Smartphones</option>
            <option value='laptops'>Laptops</option>
            <option value='fragrances'>Fragances</option>
            <option value='skincare'>Skin Care</option>
          </select>
        </div>
      </div>
    </>
  )
}
