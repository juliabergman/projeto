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
                        Julia Bergman teve A brilhante (ou catastrófica) ideia<br />
                        de dar de presente para sua amiga Ana Ono uma versão <br />
                        futuristica do Orkut. O site foi inspirado em outras <br />
                        plataformas como o twitter e facebook.E é claro que,<br />
                        sem as outras pessoas que a ajudaram esse projeto não<br />
                        seria absolutamente nada</p>
                </div>

                <h2>QUEM SOMOS?</h2>
                <Testimony />
                <Testimony />
                <Testimony />
                <Testimony />
            </div>
        </div>
    );



}


export default QuemSomos;