import React from 'react';
import './recadosVisitante.css';
import HeaderVisitante from '../../components/headervisitante/HeaderVisitante';
import Depoimento from '../../components/depoimento/Depoimento';
import PerfilVisitante from '../../components/perfilvisitante/PerfilVisitante'

function RecadosVisitante(){
    return(
        <div>
        < HeaderVisitante />
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
      
                <Depoimento/>
            
        </div>
        </div>

    );
}

export default RecadosVisitante;