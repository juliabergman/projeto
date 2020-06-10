import React from 'react';
import './galeriaVisitante.css';
import HeaderVisitante from '../../components/headervisitante/HeaderVisitante';
import PerfilVisitante from '../../components/perfilvisitante/PerfilVisitante'
import Footer from '../../components/footer/Footer'
import Slider from "react-slick";


function Galeria(){
    return(
        <div>
        <div id="geralGaleria">
             <HeaderVisitante />
           
                <PerfilVisitante/>
        </div>
        <Footer/>
        </div>

    );
}


export default Galeria;