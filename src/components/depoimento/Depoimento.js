import React, { Component } from 'react';

import './depoimento.css';

import Taylor from '../../assets/images/taylor.jpg'

export default class depoimento extends Component {
  render() {
    return (
      <div>
        <div className="depoimentotstm">
          <div className="depoimentotst-info">
            <img src={Taylor} alt="Imagem do usuario" />
            <h3>{this.props.name}</h3>
            <p>visitante</p>
          </div>

          <div className="text-box">
            <p>{this.props.name}</p>
          </div>
        </div>
      </div>
    );
  }
}