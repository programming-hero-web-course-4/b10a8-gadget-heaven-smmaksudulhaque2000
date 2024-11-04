import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Statistics from './components/Statistics/Statistics';
import CartList from './components/CartList/CartList';
import WishList from './components/WishList/WishList';
import AllProduct from './components/AllProduct/AllProduct';
import Laptops from './components/Laptops/Laptops';
import Phones from './components/Phones/Phones';
import Accessories from './components/Accessories/Accessories';
import SmartWatches from './components/SmartWatches/SmartWatches';
import Macbook from './components/Macbook/Macbook';
import Iphone from './components/Iphone/Iphone';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        children: [
          {
            path:'/',
            element: <AllProduct></AllProduct>,
            loader: () => fetch('../public/fakeData.json'),
          },
          {
            path: 'laptops',
            element: <Laptops></Laptops>,
            loader: () => fetch('../public/fakeData.json'),
          },
          {
            path: 'phones',
            element: <Phones></Phones>
          },
          {
            path: 'accessories',
            element: <Accessories></Accessories>
          },
          {
            path: 'smartwatches',
            element: <SmartWatches></SmartWatches>
          },
          {
            path: 'macbook',
            element: <Macbook></Macbook>
          },
          {
            path: 'iphone',
            element: <Iphone></Iphone>
          },
        ]
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: 'cartlist',
        element: <CartList></CartList>
      },
      {
        path: 'wishlist',
        element: <WishList></WishList>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
