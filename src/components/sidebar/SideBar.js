import React, { Component } from 'react';

import './sidebar.css';

import Taylor from '../../assets/images/taylor.jpg';

export default class Sidebar extends Component {
  render() {
    return (
      <div id="master">
        <div className="sidebar-container">

          <img src={Taylor} alt="Foto da Taylor Swift em quarentena" />


          <div className="info">
            <h3>{this.props.name}</h3>
            <p>
              {this.props.bio}
            </p>

            <span>A Julia enche o meu saco</span>
          </div>

          <button>opinar</button>
          <button>depoimento</button>
        </div>
      </div>

    );
  }
}