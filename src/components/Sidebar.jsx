import React from "react";

function Sidebar(){
  return <div className="wrapper">
  <nav id="sidebar">

    <button type="button" id="sidebarCollapse" className="btn">
      <i className="fas fa-bars"></i>
    </button>
    <ul className="list-unstyled components">
      <img src="Images/profile.png" alt="profilePic" className="profilePic"></img>
      <p>Miguel Richter</p>
      <li>
        <a href="#"><i className="fas navIcon fa-th-large"></i>General</a>
        <a href="#"><i className="fas navIcon fa-boxes"></i>Recursos Materiales</a>
        <a href="#"><i className="fas navIcon fa-wallet"></i>Recursos Financieros</a>
        <a href="#"><i className="fas navIcon fa-users-cog"></i>Recursos Humanos</a>
        <a href="#"><i className="fas navIcon fa-chalkboard-teacher"></i>Espacios de Trabajo</a>
      </li>
    </ul>

    <div className="CTAs">
      <ul className="list-unstyled">
        <li>
          <img src="Images/logo-white.png" alt="panterasLogo" className="panterasLogo"></img>
        </li>
          <a href="#">Aviso legal</a>
          <a href="#">Políticas</a>
          <a href="#">Contacto</a>
      </ul>
    </div>

  </nav>
</div>
}

export default Sidebar;
