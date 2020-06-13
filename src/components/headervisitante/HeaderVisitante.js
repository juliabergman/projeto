import React, {Component} from 'react';
import './headerVisitante.css';
import {Link} from 'react-router-dom';
import Logo from '../../assets/images/logoana.png'

class HeaderVisitante extends Component {
 render(){
    return(
         <header>
             <nav>
                 <ul>
                 <img src={Logo } alt="logo do site" />
                 <Link to='/homevisitante' title="Home do site"> INICIO </Link>
                 <Link to='/recadosvisitante' title="/recados do site"> RECADOS </Link>
                 <Link to='/comunidadevisitante' title="comunidade do site"> COMUNIDADE </Link>
                 <Link to='/quemsomosvisitante' title="pagina quem somos">QUEM SOMOS </Link>
                 </ul>
             </nav>

         </header>      

    );

    }

}

export default HeaderVisitante;