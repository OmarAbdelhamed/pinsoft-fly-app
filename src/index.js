import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
//router
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import FlyListScreen from "./screens/FlyListScreen";
import Navbar from "./components/UI/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Navbar />
      <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
