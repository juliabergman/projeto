import React from 'react';
import './comunidadeVisitante.css';
import HeaderVisitante from '../../components/headervisitante/HeaderVisitante';
import Taylor from '../../assets/images/taylor.jpg';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer'


function Comunidade(){

    return(


        <div>
             <HeaderVisitante/>
             <body>
            <div id="geralComunidade">
            <img src={Taylor} alt="Foto da Taylor Swift em quarentena" />
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
<Link to = '/forum1visitante'>A ana brigou com a pablo??</Link>
</div>
<div className="data">
    <p>12 de junho de 2020</p>
</div>
<div className="respostas"> 
<p>5 respostas</p></div>

<div className="Pergunta">
<Link to = '/forum2visitante'>A ana brigou com a pablo??</Link>
</div>
<div className="data">
    <p>12 de junho de 2020</p>
</div>
<div className="respostas"> 
<p>5 respostas</p></div>

<div className="Pergunta">
<Link to = '/forum3visitante'>A ana brigou com a pablo??</Link>
</div>
<div className="data">
    <p>12 de junho de 2020</p>
</div>
<div className="respostas"> 
<p>5 respostas</p></div>

<div className="Pergunta">
<Link to = '/forum4visitante'>A ana brigou com a pablo??</Link>
</div>
<div className="data">
    <p>12 de junho de 2020</p>
</div>
<div className="respostas"> 
<p>5 respostas</p></div>

<div className="Pergunta">
<Link to = '/forum5visitante'>A ana brigou com a pablo??</Link>
</div>
<div className="data">
    <p>12 de junho de 2020</p>
</div>
<div className="respostas"> 
<p>5 respostas</p></div>

<div className="Pergunta">
<Link to = '/forum6visitante'>A ana brigou com a pablo??</Link>
</div>
<div className="data">
    <p>12 de junho de 2020</p>
</div>
<div className="respostas"> 
<p>5 respostas</p></div>

<div className="Pergunta">
<Link to = '/forum7visitante'>A ana brigou com a pablo??</Link>
</div>
<div className="data">
    <p>12 de junho de 2020</p>
</div>
<div className="respostas"> 
<p>5 respostas</p></div>

<div className="Pergunta">
<Link to = '/forum8visitante'>A ana brigou com a pablo??</Link>
</div>
<div className="data">
    <p>12 de junho de 2020</p>
</div>
<div className="respostas"> 
<p>5 respostas</p></div>



</div>



  {/** ITENS DO FORUM!!!!!!! */}




            
                          
            </div>
            <Footer/>
            </body>

        </div>
    );
}

export default Comunidade;