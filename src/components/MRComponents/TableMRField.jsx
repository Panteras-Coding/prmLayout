import React from "react";
import TableMR from "./TableMR";

const iconStyle = {
    fontSize: "16px",
    marginRight: "12px",
    marginLeft: "12px"
}

const customButton = {
    border: "none",
    backgroundColor: "transparent",
    color: "#545454",
    outline: "none"
}

function TableMRField(props){
    
    function handleClick() {        
        props.onDelete(props.id);
    }

    return <tr style={{fontSize: "14px", borderBottom:"1px solid #dedad9"}}>
        <td><input type="checkbox"></input></td>
        <td>{props.registerId}</td>
        <td>{props.name}</td>
        <td>{props.date}</td>
        <td>{props.category}</td>
        <td>{props.quantity}</td>
        <td>
        <span style={iconStyle} className="fas fa-plus"></span>
        <span style={iconStyle} className="fas fa-minus"></span>
        <span style={iconStyle} className="fas fa-edit"></span>
        <button style={customButton} onClick={handleClick}><span style={iconStyle} className="fas fa-trash"></span></button>
        </td>
    </tr>
    
}

export default TableMRField;