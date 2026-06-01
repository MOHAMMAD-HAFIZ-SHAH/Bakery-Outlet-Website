import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import { OutletProvider } from './context/OutletContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <OutletProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </OutletProvider>
    </AuthProvider>
  </StrictMode>,
)