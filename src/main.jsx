import React from 'react'
import { createRoot } from 'react-dom/client'
import { useQuery } from '@tanstack/react-query';

import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
