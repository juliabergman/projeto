import React from 'react'
import HeaderVisitante from '../../components/headervisitante/HeaderVisitante';
import Opinar from '../../components/opinar/Opinar';
import Footer from '../../components/footer/Footer'
import PerfilVisitante from '../../components/perfilvisitante/PerfilVisitante'

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
            
        </div>
        <Footer/>
        </div>

    );
}

export default HomeVisitante;