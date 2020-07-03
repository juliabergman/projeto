import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './perfilVisitante.css';
export default class PerfilVisitante extends Component{
    render(){
        return(
            <div className="visitaGeral">
            <div className="visitaPerfil"></div>
            <button>Opinar</button>
            <button>Depoimento</button>
            <Link className="linkperfil" to='/' title="sair do site">Sair</Link>
            
            </div>

        );
    }


}

// observação: ao clicar pra sair, as vezes funciona e as vezes não