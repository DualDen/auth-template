import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import React from "react";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { useAppSelector } from "../hooks/hooks";

const {isAuth} = useAppSelector(state => state.authSlice);
const isAuthCheck = () => {
 return isAuth ? [
  {
    path:  "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  }
] :
[
  {
    path:  "login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Navigate to="login" />,
  }
]
}

export const router =  createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: isAuthCheck(),
  },
]);