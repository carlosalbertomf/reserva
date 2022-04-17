import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Configuracao from './pages/Configuracao';

export default function Myfunc() {
    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/configuracao">
                <Configuracao/>
            </Route>
            <Route exact path="/sobre">
                Página de Sobre
            </Route>
        </Switch>
    );
}