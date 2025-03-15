import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TransactionProvider from './services/context/transactionsContext.jsx'

createRoot(document.getElementById('root')).render(
 
  <StrictMode>
     <TransactionProvider>
       <App />
    </TransactionProvider>
  </StrictMode>,
)
