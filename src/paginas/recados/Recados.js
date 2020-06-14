import React from 'react';
import './recados.css';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/SideBar'
import Depoimento from '../../components/depoimento/Depoimento';




function Recados(){

    return(
                <div>
                      <Header />
                <div id="geralRecados">
                <div className="emojiSorte">
            <div className="conteudo">

             
            <h1>Sorte do dia</h1>
            <div className="frase">
                <p>“que dia lindo para usar um fio dental”</p>
            </div>
          </div>
         </div>
                    
                <Sidebar/>

                <Depoimento/>
            
                
                                   
                </div>
                </div>
            

    );
}


export default Recados;