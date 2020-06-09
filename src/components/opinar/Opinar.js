import React, { Component } from 'react';

import './opinar.css';

import User from '../../assets/images/userfoto.png.png'

export default class Opinar extends Component {
  render() {
    return (
      <div>
        <div className="tstmOpinar">
         
        
     
    
  
          <div className="tstmOpinar-info">
          <img src={User} alt="Imagem do usuario" />
     
        
            <h3>{this.props.name}</h3>
            <p>{this.props.user}</p>
          </div>

          <div className="text-box">
            <p>{this.props.name}</p>
          </div>
        </div>
      </div>
    );
  }
}