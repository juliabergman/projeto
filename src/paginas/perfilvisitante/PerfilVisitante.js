import React from 'react';

import Taylor from '../../assets/images/taylor.jpg'
import HeaderVisitante from '../../components/headervisitante/HeaderVisitante'
import Footer from '../../components/footer/Footer'


function Perfil(){

    return(

        <div>
            <HeaderVisitante/>
         <main>
        <div id="geralPerfil">
            <div className="capa">
            <img src={Taylor} alt="capa" />
            </div>
            <div className="perfil">
            <img src={Taylor} alt="capa" />
            </div>
            <div className="oNomeDaAna">
                <h1>Ana Ono</h1>
            </div>
            <div className="listaAmigosPerfil">
                    <h1> AMIGOS </h1>
                     </div>
            <div className="sobreMim">
                <h1>SOBRE MIM</h1>
                <p>sou uma menina bem gatinha e famosa que amo meus fas *--*</p>
            </div>
        
        </div>
        </main>   
        <Footer/>
        </div>
    );
}


export default Perfil;