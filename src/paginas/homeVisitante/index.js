import React from 'react'

import './style.css';

import SideBar from '../../components/sidebar/SideBar';

export default function HomeVistitante() {
  return (
    <div id="container-master">
      <SideBar name="Taylor Swift" bio="Temos que arrumar aqui depois" />

      <div className="btn-emoji">
        <div className="lucky">

        </div>
      </div>
    </div>
  );
}