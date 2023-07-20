import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { store } from './app/store';
import { Provider } from 'react-redux';
//router
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import FlyListScreen from "./screens/FlyListScreen";
import HomeScreen from './screens/HomeScreen';
import Header from './components/UI/Header';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/flylist",
    element: <FlyListScreen />,
  },
  {
    path: "*",
    element: (
      <div className=" flex flex-col items-center">
        <h1 className=" text-3xl mt-8  lg:text-5xl font-bold">
          404 page not found
        </h1>
        <Link
          className="text-white bg-red-400 text-2xl mt-8 rounded-xl px-4 py-2"
          to="/"
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
