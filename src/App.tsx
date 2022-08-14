import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/Privates/PrivateRoute';
import Home from './Pages/Home';
import Profile from './Pages/profile/Profile';
import PublicRoute from './components/public/PublicRoute';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';

type Props = {};

const App = (props: Props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PrivateRoute />}>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/profile" element={<Profile />}></Route>
                </Route>
                <Route
                    path="/login"
                    element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    }
                />
                <Route
                    path="/register"
                    element={
                        <PublicRoute>
                            <Register />
                        </PublicRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
