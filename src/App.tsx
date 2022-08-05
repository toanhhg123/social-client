import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import PrivateRoute from './components/Privates/PrivateRoute';
import Home from './Pages/Home';
import Profile from './Pages/profile/Profile';

type Props = {};

const App = (props: Props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PrivateRoute />}>
                    <Route path="/login" element={<Login />}></Route>
                </Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
