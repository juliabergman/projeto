import React from 'react';
import './comunidade.css';
import Header from '../../components/header/Header';
import Taylor from '../../assets/images/taylor.jpg';


function Comunidade(){

    return(


        <div>
             <Header />
            <div id="geralComunidade">
            <img src={Taylor} alt="Foto da Taylor Swift em quarentena" />
            <div className="bioBranca">
            <h1>EU SOU ANALOVER</h1>
            <p>1000000.888 membros</p>         
            </div>
            <div className="forumBio">
            <h1>EU SOU ANALOVER</h1>
                <div className="esquerdo">             
                <p>IDIOMA:pt,br</p>
                <p>CATEGORIA:fama</p>
                <p> TIPO:publico</p>
                </div>
                <div className="direito">
               
                <p>CRIADA EM:12/06-2020</p>
                <p>LOCAL: zl</p>
                </div>

            <div className="bioBoa">
                <p> Essa comunidade foi feita
                     para todos oa analovers pelo
                     mundo. SE VC EH UM DESSES 
                     SE SINTA EM CASA!</p>
            </div>


            </div>
                          
            </div>

        </div>
    );
}

export default Comunidade;