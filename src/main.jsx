import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TransactionProvider from './services/context/transactionsContext.jsx'
import CategoriesProvider from './services/context/categoriesContext.jsx'

createRoot(document.getElementById('root')).render(
 
  <StrictMode>
     <TransactionProvider>
      <CategoriesProvider>
        <App />
      </CategoriesProvider>
    </TransactionProvider>
  </StrictMode>,
)
