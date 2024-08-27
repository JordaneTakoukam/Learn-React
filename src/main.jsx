import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import router from './route.jsx'

import {
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer />

    <RouterProvider router={router} />
  </StrictMode>,
)
