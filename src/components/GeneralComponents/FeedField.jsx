import React from "react";

const yellowColorBackG = {
  backgroundColor: "#fef0c5",
  color: "#856203"
}

const greenColorBackG = {
  backgroundColor: "#cff6cf",
  color: "#046314"
}

const blueColorBackG = {
  backgroundColor: "#e9eaff",
  color: "#051878"
}

const redColorBackG = {
  backgroundColor: "#fde0e0",
  color: "#6b0238"
}

function FeedField(props){

  return <div className="feedField">

    {props.funcion === "Salida" &&
    <div>
      <div style={yellowColorBackG} className="feedFieldTitle">
        <h6 className="topSectionStyle1">Nombre</h6>
        <h6 className="topSectionStyle2">{props.funcion}</h6>
      </div>
      <p>Área: Proyectos</p>
      <p>Motivo: Prestamo</p>
      <p>Fecha: Hoy</p>
      <p>Cantidad: 3</p>
      <p>Recurso: Matracas</p>
    </div>
    }

    {props.funcion === "Entrada" &&
    <div>
      <div style={greenColorBackG} className="feedFieldTitle">
        <h6 className="topSectionStyle1">Nombre</h6>
        <h6 className="topSectionStyle2">{props.funcion}</h6>
      </div>
      <p>Área: </p>
      <p>Fin: </p>
      <p>Utilidad: </p>
      <p>Fecha: </p>
      <p>Cantidad: </p>
      <p>Recurso: </p>
    </div>
    }

    {props.funcion === "Creación" &&
    <div>
      <div style={blueColorBackG} className="feedFieldTitle">
        <h6 className="topSectionStyle1">Nombre</h6>
        <h6 className="topSectionStyle2">{props.funcion}</h6>
      </div>
      <p>Área: </p>
      <p>Fin: </p>
      <p>Utilidad: </p>
      <p>Fecha: </p>
      <p>Cantidad: </p>
      <p>Recurso: </p>
    </div>
    }

    {props.funcion === "Eliminación" &&
    <div>
      <div style={redColorBackG} className="feedFieldTitle">
        <h6 className="topSectionStyle1">Nombre</h6>
        <h6 className="topSectionStyle2">{props.funcion}</h6>
      </div>
      <p>Área: </p>
      <p>Motivo: </p>
      <p>Fecha: </p>
      <p>Cantidad: </p>
      <p>Recurso: </p>
    </div>
    }

  </div>
}

export default FeedField;
