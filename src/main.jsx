import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { 
  createBrowserRouter, 
  RouterProvider 
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
import Details from './components/Details/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        children: [
          {
            path: '/',
            element: <AllProduct />,
            loader: () => fetch('../public/fakeData.json'),
          },
          {
            path: 'laptops',
            element: <Laptops />,
            loader: () => fetch('../public/fakeData.json'),
          },
          {
            path: 'phones',
            element: <Phones />,
            loader: () => fetch('../public/fakeData.json'),
          },
          {
            path: 'accessories',
            element: <Accessories />,
            loader: () => fetch('../public/fakeData.json'),
          },
          {
            path: 'smartwatches',
            element: <SmartWatches />,
            loader: () => fetch('../public/fakeData.json'),
          },
          {
            path: 'macbook',
            element: <Macbook />,
            loader: () => fetch('../public/fakeData.json'),
          },
          {
            path: 'iphone',
            element: <Iphone />,
            loader: () => fetch('../public/fakeData.json'),
          },
        ]
      },
      {
        path: 'statistics',
        element: <Statistics />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
          {
            path: 'cartlist',
            element: <CartList />,
          },
          {
            path: 'wishlist',
            element: <WishList />,
          },
        ]
      },
      {
        path: 'details/:id',
        element: <Details />,
        loader: () => fetch('../public/fakeData.json'),
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
