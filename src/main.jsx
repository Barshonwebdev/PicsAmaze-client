import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Home from './routes/Homepage/Home';
import Login from './routes/AuthenticationRoutes/Login';
import Register from './routes/AuthenticationRoutes/Register';
import AuthProvider from './providers/AuthProvider';

const router= createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      }
    ]
  },

  {
    path: '/login',
    element:<Login></Login>
  },
  {
    path:'/register',
    element:<Register></Register>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider ><RouterProvider router={router}></RouterProvider></AuthProvider>
  </React.StrictMode>,
)
