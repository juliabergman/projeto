import React from 'react'
import './style.css'
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/SideBar'
import Opinar from '../../components/opinar/Opinar';
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





function Home(){
    return(
        <div>
        <Header />
        <body>
        <div id="feed">
        <Sidebar/>
        <div className="emojiSorte">
            <div className="conteudo">
            <h1>Sorte do dia</h1>
            <div className="frase">
                <p>“que dia lindo para usar um fio dental”</p>
            </div>
         </div>
         </div>
      
                <Opinar/>
                <div className="amigostituloopa">
                        <h1>Amigos</h1>
                    </div>
                <div className="listaAmigos">''
                
                    {/* <h1 className="amigoslistadeamigos"> AMIGOS </h1> */}
                    <div className="imagensamigos">

                    <img src={Amigo1} alt="amigo" />
                    <img src={Amigo2} alt="amigo" />
                    <img src={Amigo3} alt="amigo" />
                    <img src={Amigo4} alt="amigo" />
                    <img src={Amigo5} alt="amigo" />
                    <img src={Amigo6} alt="amigo" />

                    </div>
                    <div className="imagensamigos2">

                    <img src={Amigo7} alt="amigo" />
                    <img src={Amigo8} alt="amigo" />
                    <img src={Amigo9} alt="amigo" />
                    <img src={Amigo10} alt="amigo" />
                    <img src={Amigo11} alt="amigo" />
                    <img src={Amigo11} alt="amigo" />

                    </div>


                    

                </div>
                
        
            
        </div>
        </body>
        <Footer/>
        </div>
        

    );

}

export default Home;
