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
import ForgetPass from './routes/AuthenticationRoutes/ForgetPass';
import ExplorePage from './routes/Explore/ExplorePage';
import PrivateRoute from './routes/PrivateRoute/PrivateRoute';
import DashboardHome from './routes/Dashboard/DashboardHome';

const router= createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/explore',
        element:<PrivateRoute><ExplorePage></ExplorePage></PrivateRoute>
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
  },
  {
    path:'/forget',
    element:<ForgetPass></ForgetPass>
  },
  {
    path:'/dashboard',
    element:<PrivateRoute><DashboardHome></DashboardHome></PrivateRoute>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider ><RouterProvider router={router}></RouterProvider></AuthProvider>
  </React.StrictMode>,
)
