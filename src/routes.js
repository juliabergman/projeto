import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './paginas/home/Index';
import Login from './paginas/login/Login';
import QuemSomos from './paginas/quemsomos/QuemSomos';
import Galeria from './paginas/galeria/Galeria';
import Recados from './paginas/recados/Recados';
import Comunidade from './paginas/comunidade/Comunidade';
import Perfil from './paginas/perfil/Perfil'
import HomeVisitante from './paginas/homeVisitante/HomeVisitante'
import RecadosVisitante from './paginas/recadosVisitante/RecadosVisitante'
import GaleriaVisitante from'./paginas/galeriavisitante/GaleriaVisitante';
import ComunidadeVisitante from './paginas/comunidadevisitante/ComunidadeVisitante';
import Forum1 from   './paginas/forum1/Forum1'
import Forum1Visitante from   './paginas/forum1visitante/Forum1Visitante'
import Forum2 from   './paginas/forum2/Forum2'
import Forum2Visitante from   './paginas/forum2visitante/Forum2Visitante'
import Forum3 from   './paginas/forum3/Forum3'
import Forum3Visitante from   './paginas/forum3visitante/Forum3Visitante'
import Forum4 from   './paginas/forum4/Forum4'
import Forum4Visitante from   './paginas/forum4visitante/Forum4Visitante'
import Forum5 from './paginas/forum5/Forum5'
import Forum5Visitante from './paginas/forum5visitante/Forum5Visitante'
import Forum6 from './paginas/forum6/Forum6'
import Forum6Visitante from './paginas/forum6visitante/Forum6Visitante'
import Forum7 from './paginas/forum7/Forum7'
import Forum7Visitante from './paginas/forum7visitante/Forum7Visitante'
import Forum8 from './paginas/forum8/Forum8'
import Forum8Visitante from './paginas/forum8visitante/Forum8Visitante'
import QuemSomosVisitante from './paginas/quemsomosvisitante/QuemSomosVisitante';
import PerfilVisitante from './paginas/perfilvisitante/PerfilVisitante'

function Routes() {
    return (

        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/home" component={Home} />
               <Route path="/quemSomos" component={QuemSomos} /> 
               <Route path="/galeria" component={Galeria} />
               <Route path="/recados" component={Recados} />
               <Route path="/comunidade" component={Comunidade} />
               <Route path="/comunidadevisitante" component={ComunidadeVisitante} />              
               <Route path="/perfil" component={Perfil} />
               <Route path="/homevisitante" component={HomeVisitante} />
               <Route path="/recadosvisitante" component={RecadosVisitante} />
               <Route path="/galeriavisitante" component={GaleriaVisitante} />
               <Route path="/forum1" component={Forum1} />
               <Route path="/forum1visitante" component={Forum1Visitante} />
               <Route path="/forum2" component={Forum2} />
               <Route path="/forum2visitante" component={Forum2Visitante} />
               <Route path="/forum3" component={Forum3} />
               <Route path="/forum3visitante" component={Forum3Visitante} />
               <Route path="/forum4" component={Forum4} />
               <Route path="/forum4visitante" component={Forum4Visitante} />
               <Route path="/forum5" component={Forum5} />
               <Route path="/forum5visitante" component={Forum5Visitante} />
               <Route path="/forum6" component={Forum6} />
               <Route path="/forum6visitante" component={Forum6Visitante} />
               <Route path="/forum7" component={Forum7} />
               <Route path="/forum7visitante" component={Forum7Visitante} />
               <Route path="/forum8" component={Forum8} />
               <Route path="/forum8visitante" component={Forum8Visitante} />
               <Route path="/quemsomosvisitante" component={QuemSomosVisitante} /> 
               <Route path="/perfilvisitante" component={PerfilVisitante} /> 
               
               
               
                
            </Switch>
        </BrowserRouter>

    );
}

export default Routes;
