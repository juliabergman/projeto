import React from 'react';
import './galeria.css';
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/SideBar'
import Footer from '../../components/footer/Footer'


function Galeria(){
    return(
        <div>
        <div id="geralGaleria">
             <Header />
           
                <Sidebar/>
        </div>
        <Footer/>
        </div>

    );
}


export default Galeria;