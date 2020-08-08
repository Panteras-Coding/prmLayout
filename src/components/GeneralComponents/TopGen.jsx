import React from "react";

function TopGen(){
  return <div>
      <div className="top">
        <h3>Información General</h3>
        <div className = "down1">
          <button id="btnGroupDrop1" type="button" className="btn btn-outline-warning dropdown-toggle top-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Información
          </button>
          <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <input type="checkbox" className="checkBx" id="interactividad" value="interactividad"></input>
            <label>Interactividad</label>
            <br></br>
            <input type="checkbox" className="checkBx" id="tiempo-vida" value="tiempo-vida"></input>
            <label>Tiempo vida</label>
            <br></br>
            <input type="checkbox" className="checkBx" id="actividad" value="actividad"></input>
            <label>Actividad áreas</label>
            <br></br>
            <input type="checkbox" className="checkBx" id="antiguedad" value="antiguedad"></input>
            <label>Antigüedad</label>
            <br></br>
            <input type="checkbox" className="checkBx" id="info" value="info"></input>
            <label>Información</label>
            <br></br>
            <input type="checkbox" className="checkBx" id="rotacion" value="rotacion"></input>
            <label>Rotación</label>
            <br></br>
            <input type="checkbox" className="checkBx" id="feed" value="feed"></input>
            <label>Feed</label>
          </div>
        </div>
        <div className = "down2">
          <button id="btnGroupDrop1" type="button" className="btn btn-outline-success dropdown-toggle top-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Último Mes
          </button>
          <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <a className="dropdown-item" href="#">Último Día</a>
            <a className="dropdown-item" href="#">Última Semana</a>
            <a className="dropdown-item" href="#">Últimos 3 meses</a>
            <a className="dropdown-item" href="#">Últimos 6 meses</a>
            <a className="dropdown-item" href="#">Último año</a>
          </div>
        </div>
        <p className="top-prg">Recursos:</p>
        <div className = "down3">
          <button id="btnGroupDrop" type="button" className="btn btn-outline-primary dropdown-toggle top-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Materiales
          </button>
          <div className="dropdown-menu" aria-labelledby="btnGroupDrop">
            <a className="dropdown-item" href="#">Materiales</a>
            <a className="dropdown-item" href="#">Financieros</a>
            <a className="dropdown-item" href="#">Humanos</a>
            <a className="dropdown-item" href="#">Espacios</a>
          </div>
        </div>
      </div>

      <span className="fas navIconGen fa-cog" type="button" data-target="#Popup" data-toggle="modal"  data-target="#exampleModal" ></span>
      <input type="text" id="search" name="search" placeholder="Buscar"></input>
    </div>
}

export default TopGen;
