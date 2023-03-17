import React, {useState,useEffect} from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { login } from "../../store/reducers/AC";
import "../../App.css"
import { Button, Form } from "antd";
import Input from "antd/es/input/Input";
import {redirect} from "react-router-dom"
export const Login = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const {user, isAuthLoading,isAuth} = useAppSelector(state => state.authSlice);
    useEffect(() => {
        isAuth &&  redirect("/")
        console.log(isAuth)
    },[isAuth])
    const dispatch = useAppDispatch()
    const handleUsername = (e:any) => {
        setUsername(e.target.value)
    }
    const handlePassword = (e:any) => {
        setPassword(e.target.value)
    }
    const handleLogin = () => {
        dispatch(login({username: username,password: password}));
    }
    return (
        <div className="container">
          <Form>
            <Form.Item rules={[{ required: true, message: 'Please input your username!' }]} label="Username"
      name="username">
                <Input value={username} onChange={handleUsername} type="text"/>
            </Form.Item>
            <Form.Item rules={[{ required: true, message: 'Please input your password!' }]} label="Password"
      name="password">
                <Input value={password} onChange={handlePassword} type="password"/>
            </Form.Item>
          </Form>
            <Button loading={isAuthLoading} onClick={handleLogin}>Login</Button>
        </div>
    )
}