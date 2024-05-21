import { useContext } from 'react'
import { FiltersContext } from '../context/filters'

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = products => {
    return products.filter(item => {
      return (
        item.price >= filters.price &&
        (filters.category === 'all' || item.category === filters.category)
      )
    })
  }

  return { setFilters, filterProducts, filters }
}
