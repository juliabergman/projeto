import React from 'react';
import './quemsomos.css';
import Header from '../../components/header/Header';


function QuemSomos(){

    return(

        <div id="quemSomos">
              <Header/>

        <div className="geralQuemSomos">
            <div className="textoFofo">
                <div className="projeto">
                <h1>O PROJETO?</h1>
                <h4>
                Julia Bergman teve A brilhante (ou catastrófica) ideia<br/> de dar de presente para sua amiga Ana Ono uma versão futuristica do Orkut.
                O site foi inspirado em outras plataformas como o twitter e facebook.
                E é claro que,sem as outras pessoas que a ajudaram esse projeto não seria absolutamente nada</h4>
                </div>
                <h2>QUEM SOMOS?</h2>
                <div className="apresentacao">
                    <h5>Julia Bergman</h5>
                    <legend>Desenvolvedora e designer</legend>
                </div>
                <div className="apresentacao">
                    <h5>Julia Bergman</h5>
                    <legend>Desenvolvedora e designer</legend>
                </div>
                <div className="apresentacao">
                    <h5>Julia Bergman</h5>
                    <legend>Desenvolvedora e designer</legend>
                </div>
                <div className="apresentacao">
                    <h5>Julia Bergman</h5>
                    <legend>Desenvolvedora e designer</legend>
                </div>
            </div>
            
            
        </div>
        </div>

    );



}


export default QuemSomos;