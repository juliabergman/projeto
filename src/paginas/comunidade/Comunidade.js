import React from 'react';
import './comunidade.css';
import Header from '../../components/header/Header';
import Taylor from '../../assets/images/taylor.jpg';
import Footer from '../../components/footer/Footer'
import {Link} from 'react-router-dom';
import Foto10 from '../../assets/images/Galeria/11.png';


function Comunidade(){

    return(


        <div>
             <Header />
             <body>
            <div id="geralComunidade">
            <img src={Foto10} alt="Foto da Taylor Swift em quarentena" />
            <div className="bioBranca"></div>
                <div className="nomeTitulo2">
            <h1>EU SOU ANALOVER</h1>
            </div>
            <div className="membros">
            <p>1000000.888 membros</p>  
            </div>       
            
            <div className="forumBio"></div>
            <div className="textobio">
                <div className="nomeTitulo">
            <h1>EU SOU ANALOVER</h1>
            </div>
                <div className="esquerdo">             
                <p>IDIOMA:pt,br</p>
                <p>CATEGORIA:fama</p>
                <p> TIPO:publico</p>
                </div>
                <div className="direito">
               
                <p>CRIADA EM:12/06-2020</p>
                <p>LOCAL: zl</p>
                </div>
                </div>

            <div className="bioBoa">
                <p> Essa comunidade foi feita
                     para todos os Analovers pelo
                     mundo. <br/>SE VC EH UM DESSES 
                     SE SINTA EM KASAH! *----*</p>
            </div>

            <div className="tituloforum">
                <h1>FÓRUM</h1>
            </div>


           {/** ITENS DO FORUM!!!!!!! */}
            <div className="caixinhadoforum"> 


            <div className="Pergunta">
            <Link to = '/forum1'>A ana brigou com a pablo??</Link>
            </div>
            <div className="data">
                <p>12 de junho de 2020</p>
            </div>
            <div className="respostas"> 
            <p>2 respostas</p></div>

            <div className="Pergunta">
            <Link to = '/forum2'>Como que usa isso????????</Link>
            </div>
            <div className="data">
                <p>12 de junho de 2020</p>
            </div>
            <div className="respostas"> 
            <p>2 respostas</p></div>

            <div className="Pergunta">
            <Link to = '/forum3'>Qual o melhor look da ana??</Link>
            </div>
            <div className="data">
                <p>12 de junho de 2020</p>
            </div>
            <div className="respostas"> 
            <p>2 respostas</p></div>

            <div className="Pergunta">
            <Link to = '/forum4'>o paiiii ta ooonnnn chama</Link>
            </div>
            <div className="data">
                <p>12 de junho de 2020</p>
            </div>
            <div className="respostas"> 
            <p>2 respostas</p></div>

            <div className="Pergunta">
            <Link to = '/forum5'>Quem eh a mais famosinhah?</Link>
            </div>
            <div className="data">
                <p>12 de junho de 2020</p>
            </div>
            <div className="respostas"> 
            <p>2 respostas</p></div>

            <div className="Pergunta">
            <Link to = '/forum6'>Vc acham que a anitah esta...</Link>
            </div>
            <div className="data">
                <p>12 de junho de 2020</p>
            </div>
            <div className="respostas"> 
            <p>2 respostas</p></div>

            <div className="Pergunta">
            <Link to = '/forum7'>Quando sai novo cd?????? *0*</Link>
            </div>
            <div className="data">
                <p>12 de junho de 2020</p>
            </div>
            <div className="respostas"> 
            <p>2 respostas</p></div>

            <div className="Pergunta">
            <Link to = '/forum8'>Devo tatuar o rosto da ana...</Link>
            </div>
            <div className="data">
                <p>12 de junho de 2020</p>
            </div>
            <div className="respostas"> 
            <p>2 respostas</p></div>



            </div>
          

           
              {/** ITENS DO FORUM!!!!!!! */}



            
                          
            </div>
            <Footer/>
            </body>

        </div>
    );
}

export default Comunidade;