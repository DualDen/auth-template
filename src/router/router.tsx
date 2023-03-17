import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import React from "react";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";


export const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        path:  "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      }
    ],
  },
]);