import React from 'react'
import HeaderVisitante from '../../components/headervisitante/HeaderVisitante';
import Opinar from '../../components/opinar/Opinar';
import Footer from '../../components/footer/Footer'
import PerfilVisitante from '../../components/perfilvisitante/PerfilVisitante'
import './homevisitante.css'
import Taylor from '../../assets/images/taylor.jpg';
import {Link} from 'react-router-dom';
function HomeVisitante(){
    return(

        <div>
        <HeaderVisitante/>
        <div id="feed">
            <PerfilVisitante/>
        <div className="emojiSorte">
            <div className="conteudo">
            <h1>Bem vindo(a)</h1>
            <div className="frase">
                <p>“que dia lindo para usar um fio dental”</p>
            </div>
         </div>
         </div>
      
                <Opinar/>
                <div className="niverdodia">
                    <h1 className="niverdodiatexto">ANIVERSARIANTE</h1>
                    <img src={Taylor} alt="Foto da Taylor Swift em quarentena" />
                    <Link className="linkperfil22" to='/perfilvisitante' title="perfil ana"> Ver perfil </Link>
                </div>
            
        </div>
        <Footer/>
        </div>

    );
}

export default HomeVisitante;