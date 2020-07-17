import React from "react";
import InteractividadField from "./InteractividadField";

function Interactividad() {
  return <div className="int-container">

    <h5>Interactividad de recursos</h5>
    <p className="orderText">Ordenar por:</p>
    <button id="btnGroupDrop1" type="button" className="btn btn-outline-secondary dropdown-toggle downFilterBtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      General
    </button>
    <div className="dropdown-menu downFilter" aria-labelledby="btnGroupDrop">
      <a className="dropdown-item" href="#">Entradas</a>
      <a className="dropdown-item" href="#">Salidas</a>
      <a className="dropdown-item" href="#">Solicitudes</a>
      <a className="dropdown-item" href="#">General</a>
    </div>

    <div className="external mayor">
      <h6>Mayor interactividad</h6>
      <InteractividadField
        name="Nombre"
        inputs="#salidas"
        outputs="#entradas"
        requests="#solicitudes"
      />
      <InteractividadField
        name="Nombre"
        inputs="#salidas"
        outputs="#entradas"
        requests="#solicitudes"
      />
      <InteractividadField
        name="Nombre"
        inputs="#salidas"
        outputs="#entradas"
        requests="#solicitudes"
      />
      <InteractividadField
        name="Nombre"
        inputs="#salidas"
        outputs="#entradas"
        requests="#solicitudes"
      />
      <InteractividadField
        name="Nombre"
        inputs="#salidas"
        outputs="#entradas"
        requests="#solicitudes"
      />
    </div>
    <div className="external menor">
      <h6>Menor interactividad</h6>
      <InteractividadField
        name="Nombre"
        inputs="#salidas"
        outputs="#entradas"
        requests="#solicitudes"
      />
      <InteractividadField
        name="Nombre"
        inputs="#salidas"
        outputs="#entradas"
        requests="#solicitudes"
      />
      <InteractividadField
        name="Nombre"
        inputs="#salidas"
        outputs="#entradas"
        requests="#solicitudes"
      />
      <InteractividadField
        name="Nombre"
        inputs="#salidas"
        outputs="#entradas"
        requests="#solicitudes"
      />
      <InteractividadField
        name="Nombre"
        inputs="#salidas"
        outputs="#entradas"
        requests="#solicitudes"
      />
    </div>
  </div>
}

export default Interactividad;
