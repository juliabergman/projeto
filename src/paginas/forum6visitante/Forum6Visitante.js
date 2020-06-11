import React from 'react';

import HeaderVisitante from '../../components/headervisitante/HeaderVisitante';
import Taylor from '../../assets/images/taylor.jpg';
import Footer from '../../components/footer/Footer'
import {Link} from 'react-router-dom';
import Foto10 from '../../assets/images/Galeria/11.png';


function Forum1(){

    return(


        <div>
             <HeaderVisitante />
             <body>
            <div id="geralforum">
            <img src={Foto10} alt="Foto da Taylor Swift em quarentena" />
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
            <h1>pablo vittar</h1>
            <p> <br/>vc acham que a anitah esta com inveja?</p>
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
            <h1>Plinio</h1>
            </div>
            <div className="Pergunta1">
             <p>pablo vilar eu te odeio </p>      
            </div>
            </div>

            <div className="caixinhadoforumf2">

                <div className="outronome2">
                    <h1>Samira close</h1>
                    </div>
                    <div className="Pergunta2">
                        <p>olha mana cuidado pra não ser canceladah... quem ta vendo da stream na minha nova música #ajudaamadrinha #naoqueroflopar #militei</p>
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