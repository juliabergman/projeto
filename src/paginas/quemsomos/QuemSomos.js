import React from 'react';
import './quemsomos.css';
import Header from '../../components/header/Header';
import Testimony from '../../components/testimony/Testimony';


function QuemSomos() {

    return (
        <div>
            <Header />
            <div id="quemSomos">
                <div className="projeto">
                    <h1>O PROJETO?</h1>
                    <p>
                        Julia Bergman teve A brilhante (ou catastrófica) ideia
                        de dar de presente para sua amiga Ana Ono uma versão <br />
                        futuristica do Orkut. O site foi inspirado em outras 
                        plataformas como o twitter e facebook.O diferencial
                        dessa<br /> rede é que ela foi feita exclusivamente para os 
                        fãs da icônica ana ono, também existe um campo onde
                         eles também <br />podem opninar sobre qualquer assunto
                         (mas ninguém pode comentar sobre aquela opnião),
                         os fãs também podem <br />enviar depoimentos pra ela e  
                         existe uma comunidade onde eles podem debater  
                         coisas como qual a perfomace <br /> mais atemporal e quais fomosos ela tretou. Espero que a nossa 
                         estrela dê a benção para esta homenagem. </p>
                </div>

                <h2>QUEM SOMOS?</h2>
                <Testimony />
                
            </div>
        </div>
    );



}


export default QuemSomos;