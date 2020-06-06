import React, {Component} from 'react';
import './header.css';

class Header extends Component {
 render(){
    return(
         <header>
             <nav>
                 <ul>
                    <li>INICIO </li> 
                    <li>RECADOS</li>
                    <li>COMUNIDADE</li>                 
                    <li>GALERIA</li>
                    <li>QUEM SOMOS</li>
                 </ul>
             </nav>

         </header>      

    );

    }

}

export default Header;