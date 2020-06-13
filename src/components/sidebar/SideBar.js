import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './sidebar.css';

import Foto26 from '../../assets/images/Galeria/27.png';

export default class Sidebar extends Component {
  render() {
    return (
    
        <div className="sidebar-container">

          <img src={Foto26} alt="Foto da Taylor Swift em quarentena" />


          <div className="info">
            <h3>Ana Ono</h3>
            <p>
              Feminino, <br/>
              Namorando,<br/>
              Paris
            </p>

            <span><br/>"perigoh do recalk"</span>
          </div>

          {/* <button>opinar</button> */}
          <Link className="linkperfil" to='/recados' title="Página de recados"> Depoimento</Link>
          <Link className="linkperfil" to='/perfil' title="Perfil ana"> PERFIL </Link>
          <Link className="linkperfil" to='/' title="sair do site">Sair </Link>
        </div>
      

    );
  }
}