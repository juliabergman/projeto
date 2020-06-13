import React, { Component } from 'react';

import './depoimento.css';

import User from '../../assets/images/userfoto.png.png'
import img1 from '../../assets/images/funkeiro.jpg';
import img2 from '../../assets/images/stalin.jpg';
import img3 from '../../assets/images/bozo.jpg';

export default class depoimento extends Component {
  render() {
    return (
      <div>

        {/* <div className="depoimentotstm">
          <div className="depoimentotst-info">
            <img src={User} alt="Imagem do usuario" />
            <h3>{this.props.name}</h3>
            <p>visitante</p>
          </div>

          <div className="text-box3">
            <p>{this.props.name}</p>
          </div>
        </div> */}

        <div className="depoimentotstm">
          <div>

          <div className="depoimentotst-info">
            <img src={img1} alt="Imagem do usuario" />
            <h3>Vitinhooo</h3>
            <p>Visitante</p>
          </div>

          <div className="text-box3">
            <p>vose È muito gata, gata.</p>
          </div>

          <div className="depoimentotst-info">
            <img src={User} alt="Imagem do usuario" />
            <h3>Anonymous</h3>
            <p>Visitante</p>
          </div>

          <div className="text-box3">
            <p>vc lembrah de mim anah vc tinha invejah de mim sua recalkadah</p>
          </div>
          
          </div>

          <div>

          <div className="depoimentotst-info">
            <img src={img2} alt="Imagem do usuario" />
            <h3>Josef Stalin</h3>
            <p>Visitante</p>
          </div>

          <div className="text-box3">
            <p>Salve a União Soviética, minha camarada aninhahhh! :p</p>
          </div>

          <div className="depoimentotst-info">
            <img src={img3} alt="Imagem do usuario" />
            <h3>Bozonaro</h3>
            <p>Lixo</p>
          </div>

          <div className="text-box3">
            <p>uNiAo SoviEtcA È mEu brIoCo, tAL Key?!</p>
          </div>

          </div>
        </div>

        
        
      </div>
    );
  }
}