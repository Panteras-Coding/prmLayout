import React from "react";

function Sidebar(){
    return <div className="wrapper">
    <nav id="sidebar">
        <div id="dismiss">
            <i className="fas fa-arrow-left"></i>
        </div>

        <ul className="list-unstyled components">
            <img src="Images/profile.png" alt="profilePic" className="profilePic"></img>
            <p>Miguel Richter</p>
                <li>
                    <a href="#"><i className="far navIcon fa-clipboard"></i>Tablero</a>
                    <a href="#"><i className="fas navIcon fa-tasks"></i>Mesa de trabajo</a>
                    <a href="#"><i className="far navIcon fa-envelope"></i>Bandeja</a>
                    <a href="#"><i className="far navIcon fa-calendar-alt"></i>Horario</a>
                    <a href="#"><i className="fas navIcon fa-book"></i>Agenda</a>
                </li>
            </ul>

            <ul className="list-unstyled CTAs">
                <li>
                    <img src="Images/logo-white.png" alt="panterasLogo" className="panterasLogo"></img>
                </li>
                <a href="#">Política de privacidad</a>
                <a href="#">Contacto</a>
                <a href="#">Legal</a>
            </ul>
        
    </nav>

    <div id="content">
        <div className="container-fluid">
            <button type="button" id="sidebarCollapse" className="btn btn-outline-danger">
                <i className="fas fa-align-left"></i>   
            </button>
        </div>
    </div>
</div>
}

export default Sidebar;