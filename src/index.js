import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { store } from './app/store';
import { Provider } from 'react-redux';
//router
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import Header from './components/UI/Header';
import FlyTicketScreen from './screens/FlyTicketScreen';
import LoginScreen from './screens/LoginScreen';
import FlyingDetailScreen from './screens/FlyingDetailScreen';
import RegisterScreen from './screens/RegisterScreen';
import PaymentScreen from './screens/PaymentScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import UserTicketScreen from './screens/UserTicketScreen';

const router = createBrowserRouter([
  {
    path: '/home',
    element: <HomeScreen />,
  },
  {
    path: '/',
    element: <LoginScreen />,
  },
  {
    path: '/Details',
    element: <FlyingDetailScreen />,
  },
  {
    path: '/ticket',
    element: <FlyTicketScreen />,
  },
  {
    path: '/mytickets',
    element: <UserTicketScreen/>,
  },
  {
    path: '/login',
    element: <LoginScreen />,
  },
  {
    path: '/register',
    element: <RegisterScreen />,
  },
  {
    path: '/payment',
    element: <PaymentScreen />,
  },
  {
    path: '/profile',
    element: <UserProfileScreen />,
  },
  {
    path: '*',
    element: (
      <div className=' flex flex-col items-center'>
        <h1 className=' text-3xl mt-8  lg:text-5xl font-bold'>
          404 page not found
        </h1>
        <Link
          className='text-white bg-red-400 text-2xl mt-8 rounded-xl px-4 py-2'
          to='/login'
        >
          Homepage
        </Link>
      </div>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Header />
    <RouterProvider router={router} />
  </Provider>
);
