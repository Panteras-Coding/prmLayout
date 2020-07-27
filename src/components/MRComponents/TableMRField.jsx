import React from "react";
import TableMR from "./TableMR";

const iconStyle = {
    fontSize: "16px",
    marginRight: "12px",
    marginLeft: "12px"
}

function TableMRField(props){
    return <tr style={{fontSize: "14px", borderBottom:"1px solid #dedad9"}}>
        <td><input type="checkbox"></input></td>
        <td>{props.id}</td>
        <td>{props.nombre}</td>
        <td>{props.antiguedad}</td>
        <td>{props.categoria}</td>
        <td>{props.existencia}</td>
        <td>
        <span style={iconStyle} className="fas fa-plus"></span>
        <span style={iconStyle} className="fas fa-minus"></span>
        <span style={iconStyle} className="fas fa-edit"></span>
        <span style={iconStyle} className="fas fa-trash"></span>
        </td>
    </tr>
}

export default TableMRField;