import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import AboutPage from '../screens/AboutPage/AboutPage';
import MainPage from '../screens/MianPage/MainPage';

function Routing() {
    return (
        <div>
           
            <BrowserRouter>
            <div>
                <Link to="/">Main</Link>
                <Link to="/about">About</Link>
            </div>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/about' element={<AboutPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing
