import React from 'react';

import HeaderVisitante from '../../components/headervisitante/HeaderVisitante';
import Footer from '../../components/footer/Footer'
import Foto10 from '../../assets/images/Galeria/11.png';
import {Link} from 'react-router-dom';


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
      <h1>lulu</h1>
      <p> <br/>A ana brigou com a pablo????????</p>
      </div>
         
         
          </div>

      <div className="tituloforumf">
          <h1>RESPOSTAS</h1>
      </div>


     {/** ITENS DO FORUM!!!!!!! */}
      <div className="caixinhadoforumf">
          




      <div className="outronome">
      <h1>Vitinho do sus</h1>
      </div>
      <div className="Pergunta1">
       <p>Naum sei mas eu prefrio a anah</p>      
      </div>
      </div>

      <div className="caixinhadoforumf2">

          <div className="outronome2">
              <h1>Mc juju</h1>
              </div>
              <div className="Pergunta2">
                  <p>Soh boatos gatah</p>
              </div>
               
              <div className="botoeslindos3">
         
         <Link className="botaoforum" to='/comunidadevisitante' title="Voltar para comunidade">Comunidade</Link>
         <Link className="botaoforum" to='/forum2visitante' title="Forum 2">Próximo </Link>
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