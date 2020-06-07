import React from 'react';

import HeaderVisitante from '../../components/headervisitante/HeaderVisitante';
import Taylor from '../../assets/images/taylor.jpg';
import Footer from '../../components/footer/Footer'
import {Link} from 'react-router-dom';


function Forum1(){

    return(


        <div>
             <HeaderVisitante />
             <body>
            <div id="geralforum">
            <img src={Taylor} alt="Foto da Taylor Swift em quarentena" />
            <div className="bioBrancaf"></div>
                <div className="nomeTitulo2f">
            <h1>EU SOU ANALOVER</h1>
            </div>
            <div className="membrosf">
            <p>1000000.888 membros</p>  
            </div>   




        
            <div className="forumBiof"> </div>
            
            <div className="textobiof">
          
                <div className="nomeTitulof">
            <h1>lulu</h1>
            <p> <br/>Essa comunidade foi feita
                     para todos os Analovers pelo
                     mundo.SE VC EH UM DESSES 
                     SE SINTA EM KASAH! *----*</p>
            </div>
               
               
                </div>

            <div className="forumconversaf">
                <p> Essa comunidade foi feita
                     para todos os Analovers pelo
                     mundo.SE VC EH UM DESSES 
                     SE SINTA EM KASAH! *----*</p>
            </div>

            <div className="tituloforumf">
                <h1>RESPOSTAS</h1>
            </div>


           {/** ITENS DO FORUM!!!!!!! */}
            <div className="caixinhadoforumf">
                




            <div className="outronome">
            <h1>aninha da quebrada</h1>
            </div>
            <div className="Pergunta1">
             <p>Essa comunidade foi feita
                     para todos os Analovers pelo
                     mundo.SE VC EH UM DESSES 
                     SE SINTA EM KASAH! *----*</p>      
            </div>
            </div>

            <div className="caixinhadoforumf2">

                <div className="outronome2">
                    <h1>Mc juju</h1>
                    </div>
                    <div className="Pergunta2">
                        <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    </div>
               
            </div>
{/** ITENS DO FORUM!!!!!!! */}



            
                          
            </div>
            <Footer/>
            </body>

        </div>
    );
}

export default Forum1;