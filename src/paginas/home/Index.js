import React from 'react'
import './style.css'
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/SideBar'
import Opinar from '../../components/opinar/Opinar';
import Footer from '../../components/footer/Footer'



function Home(){
    return(
        <div>
        <Header />
        <body>
        <div id="feed">
        <Sidebar/>

        <div className="emojiSorte">
            <div className="conteudo">

            <button>Legal</button>
            <button>Confiável</button>
            <button>Sexy</button>
            <h1>Sorte do dia</h1>
            <div className="frase">
                <p>“que dia lindo para usar um fio dental”</p>
            </div>
         </div>
         </div>
      
                <Opinar/>
        
                <div className="listaAmigos">
                    <h1> AMIGOS </h1>
                    

                </div>
                
        
            
        </div>
        </body>
        <Footer/>
        </div>
        

    );

}

export default Home;
