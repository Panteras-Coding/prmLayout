import React from "react";

function TopMR(){
    return <div>
    <div className="topMR">
      <h3>Inventarios</h3>
      <p className="top-prg">Depósitos:</p>
      <div className = "down1">
        <button id="btnGroupDrop" type="button" className="btn btn-outline-primary dropdown-toggle top-btn">
          Almacén Valencia
        </button>
      </div>

      <p className="top-prg">Áreas:</p>
      <div className = "down2">
        <button id="btnGroupDrop" type="button" className="btn btn-outline-warning dropdown-toggle top-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Proyectos
        </button>
        <div className="dropdown-menu" aria-labelledby="btnGroupDrop">
          <a className="dropdown-item" href="#">Laboratorios</a>
          <a className="dropdown-item" href="#">Total</a>
        </div>
      </div>

      <div className = "down3">
          <button id="btnGroupDrop1" type="button" className="btn btn-outline-danger dropdown-toggle top-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Configurar
          </button>
          <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <form>
                <input type="radio" id="PrTable" name="order" value="PrTable"></input>
                <label for="PrTable">Tabla predeterminada (Por giro)</label><br></br>
                <input type="radio" id="PerTable" name="order" value="PerTable"></input>
                <label for="PerTable">Tabla personalizada</label>
            </form>
          </div>
        </div>
    </div>

    <span className="fas navIconGen fa-cog" type="button" data-target="#Popup" data-toggle="modal"  data-target="#modalMR"></span>
    <input type="text" id="search" name="search" placeholder="Buscar"></input>
  </div>
}

export default TopMR;