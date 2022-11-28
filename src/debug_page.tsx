import React from 'react'
import ReactDOM from 'react-dom/client'
import { Debug } from './Debug'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Debug />
  </React.StrictMode>
)
