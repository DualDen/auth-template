import React, {useEffect} from 'react';
import './App.css';
import {Outlet, useLocation, redirect} from "react-router-dom";
import { Home } from './pages/Home/Home';

function App() {
  const loc = useLocation();
  const isAuthCheck = () => {
    if(!localStorage.getItem("isAuth") && loc.pathname !== "/login") {
      return redirect('/login');
    }
  }
  useEffect(() => {
    isAuthCheck()
  }, [])
  return (
    <div className="App">
      <Outlet/>
    </div>
  );
}

export default App;
