import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Rutas/Home';
import Cine from './Rutas/Cine';
import Television from './Rutas/Television';
import Musica from './Rutas/Musica';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/cine" component={Cine} />
                    <Route path="/television" component={Television} />
                    <Route path="/musica" component={Musica} />
                </Switch>
            </BrowserRouter>
        )
    }
}
