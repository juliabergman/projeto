import React from 'react';
import {Link} from 'react-router-dom';
import HeaderVisitante from '../../components/headervisitante/HeaderVisitante';
import Footer from '../../components/footer/Footer'
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
            <h1>mc gui</h1>
            <p> <br/>qual o melhor look da ana?? *----*</p>
            </div>
               
               
                </div>

            <div className="tituloforumf">
                <h1>RESPOSTAS</h1>
            </div>


           {/** ITENS DO FORUM!!!!!!! */}
            <div className="caixinhadoforumf">
                




            <div className="outronome">
            <h1>euamoaana</h1>
            </div>
            <div className="Pergunta1">
             <p>gosto daqueleh maio que ela usou com a gloria gruvis no clip</p>      
            </div>
            </div>

            <div className="caixinhadoforumf2">

                <div className="outronome2">
                    <h1>Aliceh</h1>
                    </div>
                    <div className="Pergunta2">
                        <p>todas pois ela eh um iconeh de modah</p>
                    </div>
               
                    <div className="botoeslindos3">
         
         <Link className="botaoforum" to='/comunidadevisitante' title="Voltar para comunidade">Comunidade</Link>
         <Link className="botaoforum" to='/forum2visitante' title="Forum 2">Anterior</Link>
         <Link className="botaoforum" to='/forum4visitante' title="Forum 4">Próximo </Link>
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