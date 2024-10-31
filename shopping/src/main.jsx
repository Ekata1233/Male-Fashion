import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './context/auth.jsx'
import { SearchProvider } from './context/search.jsx'
import { CartProvider } from './context/cart.jsx'
import { HeartProvider } from './context/heartlist.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <SearchProvider>
      <CartProvider>
        <HeartProvider>
        <App />
        </HeartProvider>
      </CartProvider>
    </SearchProvider>
    
    
  </AuthProvider>,
)
