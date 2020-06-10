import React, { Component } from 'react';

import './depoimento.css';

import User from '../../assets/images/userfoto.png.png'

export default class depoimento extends Component {
  render() {
    return (
      <div>
        <div className="depoimentotstm">
          <div className="depoimentotst-info">
            <img src={User} alt="Imagem do usuario" />
            <h3>{this.props.name}</h3>
            <p>visitante</p>
          </div>

          <div className="text-box3">
            <p>{this.props.name}</p>
          </div>
        </div>
      </div>
    );
  }
}