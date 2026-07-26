import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import App from '@src/App'
import '@src/styles/main.scss'

const container = document.getElementById('app')!
hydrateRoot(container,
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
