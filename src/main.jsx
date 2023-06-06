import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Navbar from './pages/shared/navbar/Navbar'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-lg mx-auto'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
