import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer'
import {Link} from 'react-router-dom';
import Foto10 from '../../assets/images/Galeria/11.png';


function Forum1(){

    return(


        <div>
             <Header />
             <body>
            <div id="geralforum">
            <img src={Foto10 } alt="Foto da Taylor Swift em quarentena" />
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
            <h1>lady gaga</h1>
            <p> <br/>quando sai o novo cd ???????? *0*</p>
            </div>
               
               
                </div>


            <div className="tituloforumf">
                <h1>RESPOSTAS</h1>
            </div>


           {/** ITENS DO FORUM!!!!!!! */}
            <div className="caixinhadoforumf">
                




            <div className="outronome">
            <h1>mc loma</h1>
            </div>
            <div className="Pergunta1">
             <p>quer saber pq???????? quer copiar ela de novo??? -___-</p>      
            </div>
            </div>

            <div className="caixinhadoforumf2">

                <div className="outronome2">
                    <h1>jorge</h1>
                    </div>
                    <div className="Pergunta2">
                        <p>so observoh #rekalc</p>
                    </div>

                    <div className="botoeslindos3">
         
         <Link className="botaoforum" to='/comunidade' title="Voltar para comunidade">Comunidade</Link>
         <Link className="botaoforum" to='/forum6' title="Forum 6">Anterior</Link>
         <Link className="botaoforum" to='/forum8' title="Forum 8">Próximo </Link>
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