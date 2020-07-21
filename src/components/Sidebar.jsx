import React, {useState} from "react";
import {Link} from 'react-router-dom';

function Sidebar(){

  const sidebarStyle = {
    color: "white",
    textDecoration: "none"
  }

  return <div className="wrapper">
  <nav id="sidebar">
    <div className="top-sidebar">
      <button type="button" id="sidebarCollapse" className="btn boton">
        <i className="fas fa-bars"></i>
      </button>
      <img src="Images/profile.png" alt="profilePic" className="profilePic"></img>
      <p>Miguel Richter</p>
      <ul className="list-unstyled components">
        <Link style={sidebarStyle} to="/">
          <li><i className="fas navIcon fa-th-large"></i>General</li>
        </Link>
        <Link style={sidebarStyle} to="materialresources">
          <li><i className="fas navIcon fa-boxes"></i>Recursos Materiales</li>
        </Link>
        <Link style={sidebarStyle}>
          <li><i className="fas navIcon fa-wallet"></i>Recursos Financieros</li>
        </Link>
        <Link style={sidebarStyle}>
          <li><i className="fas navIcon fa-users-cog"></i>Recursos Humanos</li>
        </Link>
        <Link style={sidebarStyle}>
          <li><i className="fas navIcon fa-chalkboard-teacher"></i>Espacios de Trabajo</li>
        </Link>
      </ul>
    </div>

    <div className="CTAs">
      <img src="Images/logo-white.png" alt="panterasLogo" className="panterasLogo"></img>
      <ul className="list-unstyled">
        <li>Aviso legal</li>
        <li>Políticas</li>
        <li>Contacto</li>
      </ul>
    </div>

  </nav>
</div>
}

export default Sidebar;
