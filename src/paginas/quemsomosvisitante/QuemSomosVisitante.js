import React from 'react';
import HeaderVisitante from '../../components/headervisitante/HeaderVisitante';
import Testimony from '../../components/testimony/Testimony';
import Footer from '../../components/footer/Footer'


function QuemSomos() {

    return (
        <div>
            <HeaderVisitante />
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
            <Footer/>
        </div>
    );



}


export default QuemSomos;