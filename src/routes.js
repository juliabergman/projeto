import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './paginas/home/Index';
// import './paginas/Home/style.css'
import Login from './paginas/login/Login';
// import './paginas/Login/Login.css'
import HomeVisitante from './paginas/homeVisitante/index';
import QuemSomos from './paginas/quemsomos/QuemSomos';
import Galeria from './paginas/galeria/Galeria';
import Recados from './paginas/recados/Recados';
import Comunidade from './paginas/comunidade/Comunidade';

function Routes() {
    return (

        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/homeVisitante" component={HomeVisitante} />
               <Route path="/quemSomos" component={QuemSomos} /> 
               <Route path="/galeria" component={Galeria} />
               <Route path="/recados" component={Recados} />
               <Route path="/comunidade" component={Comunidade} />
               
                
            </Switch>
        </BrowserRouter>

    );
}

export default Routes;
