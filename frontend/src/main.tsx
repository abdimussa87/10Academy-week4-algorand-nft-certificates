import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/main.css'
import ErrorBoundary from './components/ErrorBoundary'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Admin from './components/Admin'
import Trainee from './components/Trainee'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'admin',
    element: <Admin />,
  },
  {
    path: 'trainee',
    element: <Trainee />,
  },
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <ErrorBoundary>
      <App />
    </ErrorBoundary> */}
  </React.StrictMode>,
)
