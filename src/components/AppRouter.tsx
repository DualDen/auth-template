import React from 'react';
import {Navigate, Routes, Route } from 'react-router-dom';
import {useAppSelector} from "../hooks/hooks";
import {Home} from "../pages/Home/Home";
import {Login} from "../pages/Login/Login";

export const AppRouter = () => {
    const {isAuth} = useAppSelector(state => state.authSlice);
    const authCheck = () => {
        return isAuth ?
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path={"*"} element={<Navigate to="/"/>}/>
            </Routes>
             : <Routes>
                <Route path="/login" element={<Login/>}></Route>
                <Route path={"*"} element={<Navigate to="/login"/>}/>
            </Routes>
    }
    return (
        <div>
            {authCheck()}
        </div>
    );
};

