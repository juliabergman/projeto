import React from 'react';

import Taylor from '../../assets/images/taylor.jpg'
import HeaderVisitante from '../../components/headervisitante/HeaderVisitante'
import Footer from '../../components/footer/Footer'
import Amigo1 from '../../assets/images/amigos/1.png'
import Amigo2 from '../../assets/images/amigos/2.png'
import Amigo3 from '../../assets/images/amigos/3.png'
import Amigo4 from '../../assets/images/amigos/4.png'
import Amigo5 from '../../assets/images/amigos/5.png'
import Amigo6 from '../../assets/images/amigos/6.png'
import Amigo7 from '../../assets/images/amigos/7.png'
import Amigo8 from '../../assets/images/amigos/8.png'
import Amigo9 from '../../assets/images/amigos/9.png'
import Amigo10 from '../../assets/images/amigos/10.png'
import Amigo11 from '../../assets/images/amigos/11.png'


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
           
                <div className="listaAmigos2">
                
                    {/* <h1 className="amigoslistadeamigos"> AMIGOS </h1> */}
                    <div className="imagensamigos2">

                    <img src={Amigo1} alt="amigo" />
                    <img src={Amigo2} alt="amigo" />
                    <img src={Amigo3} alt="amigo" />
                    <img src={Amigo4} alt="amigo" />
                    <img src={Amigo5} alt="amigo" />
                    <img src={Amigo6} alt="amigo" />

                    </div>
                    <div className="imagensamigos22">

                    <img src={Amigo7} alt="amigo" />
                    <img src={Amigo8} alt="amigo" />
                    <img src={Amigo9} alt="amigo" />
                    <img src={Amigo10} alt="amigo" />
                    <img src={Amigo11} alt="amigo" />
                    <img src={Amigo11} alt="amigo" />

                    </div>


                    

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