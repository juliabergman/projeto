import React, { Component } from 'react';

import './testimony.css';

import Taylor from '../../assets/images/taylor.jpg'

export default class Testimony extends Component {
  render() {
    return (
      <div>
        <div className="tstm">
          <div className="tst-info">
            <img src={Taylor} alt="Imagem do colaborador" />
            <h3>Nome do colaborador</h3>
            <p>Função do colaborador</p>
          </div>

          <div className="text-box">
            <p>Julia Bergman teve A brilhante (ou catastrófica) ideia
            de dar de presente para sua amiga Ana Ono uma versão
            futuristica do Orkut. O site foi inspirado em outras
            plataformas como o twitter e facebook.E é claro que,
            sem as outras pessoas que a ajudaram esse projeto não
            seria absolutamente nada</p>
          </div>
        </div>
      </div>
    );
  }
}