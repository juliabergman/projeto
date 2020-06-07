import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './sidebar.css';

import Taylor from '../../assets/images/taylor.jpg';

export default class Sidebar extends Component {
  render() {
    return (
    
        <div className="sidebar-container">

          <img src={Taylor} alt="Foto da Taylor Swift em quarentena" />


          <div className="info">
            <h3>Ana Ono</h3>
            <p>
              Feminino, <br/>
              Namorando,<br/>
              Paris
            </p>

            <span><br/>"A Julia enche o meu saco"</span>
          </div>

          <button>opinar</button>
          <button>depoimento</button>
          <Link className="linkperfil" to='/perfil' title="Home do site"> PERFIL </Link>
        </div>
      

    );
  }
}