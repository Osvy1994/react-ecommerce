import { createRoot } from 'react-dom/client'
import '../index.css'
import { App } from './components/App'
import { FiltersProvider } from './context/filters'

const root = createRoot(document.getElementById('app'))
root.render(
  <FiltersProvider>
    <App />
  </FiltersProvider>,
)
