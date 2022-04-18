import React from "react";
import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Configuracao from './pages/Configuracao';

export default function Myfunc() {
    return (
        // <BrowserRouter>
        <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/configuracao" element={<Configuracao />} />
                {/* <Route exact path="/sobre">
                    <div>Página de Sobre</div>
                </Route> */}
            </Routes>
        // </BrowserRouter>
    );
}