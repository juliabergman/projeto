import React from 'react';
import './recados.css';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/SideBar'
import Testimony from '../../components/testimony/Testimony';



function Recados(){

    return(
                <div>
                      <Header />
                <div id="geralRecados">
                    
                <Sidebar/>
                <div className="testimony2">
                <Testimony />
                </div>
                <div className="testimony2">
                <Testimony />
                </div>
                <div className="testimony2">
                <Testimony />
                </div>
                <div className="testimony2">
                <Testimony />
                </div>
                                   
                </div>
                </div>
            

    );
}


export default Recados;