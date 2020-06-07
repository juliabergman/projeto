import React, { Component } from 'react';

import './perfilVisitante.css';
export default class PerfilVisitante extends Component{
    render(){
        return(
            <div className="visitaGeral">
            <div className="visitaPerfil"></div>
            <button>Opinar</button>
            <button>Depoimento</button>
            </div>

        );
    }
}