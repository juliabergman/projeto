import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './paginas/home/Index';
// import './paginas/Home/style.css'
import Login from './paginas/login/Login';
// import './paginas/Login/Login.css'
import HomeVisitante from './paginas/homeVisitante/index';
import QuemSomos from './paginas/quemsomos/QuemSomos';

function Routes() {
    return (

        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/homeVisitante" component={HomeVisitante} />
                <Route path="/quemSomos" component={QuemSomos} />
            </Switch>
        </BrowserRouter>

    );
}

export default Routes;
