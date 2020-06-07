import React, {Component} from 'react';
import './header.css';
import {Link} from 'react-router-dom';

class Header extends Component {
 render(){
    return(
         <header>
             <nav>
                 <ul>
                 <Link to='/home' title="Home do site"> INICIO </Link>
                 <Link to='/recados' title="/recados do site"> RECADOS </Link>
                 <Link to='/comunidade' title="comunidade do site"> COMUNIDADE </Link>
                 <Link to='/galeria' title="galeria do site"> GALERIA </Link>
                 <Link to='/quemsomos' title="pagina quem somos">QUEM SOMOS </Link>
                 </ul>
             </nav>

         </header>      

    );

    }

}

export default Header;