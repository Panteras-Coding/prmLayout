import React from "react";
import TableMRField from "./TableMRField";

function TableMR(){
    return <div className="tableMatRes">
        <table className="table">
        <thead>
        <tr>
            <td colSpan="3" style={{fontSize:"20px", backgroundColor: "#ffc9c9", color: "#75140b", border: "none", borderRadius:"20px 0 0 0"}}>Producción</td>
            <td colSpan="2" style={{fontSize:"20px", backgroundColor: "#c7f1fc", color: "#080a69", border: "none"}}>Gestión</td>
            <td style={{fontSize:"20px", backgroundColor: "#d4ffd5", color: "#055207", border: "none"}}>Distribución</td>
            <td style={{fontSize:"20px", backgroundColor: "#f5f7cd", color: "#5c5c06", border: "none", borderRadius:"0 20px 0 0"}}>General</td>
        </tr>
        </thead>
        <tr>
            <td style={{backgroundColor: "#ffc9c9", color: "#75140b", border: "none", fontSize:"14px"}}>Materia prima</td>
            <td style={{backgroundColor: "#ffc9c9", color: "#75140b", border: "none", fontSize:"14px"}}>Maquinaria</td>
            <td style={{backgroundColor: "#ffc9c9", color: "#75140b", border: "none", fontSize:"14px"}}>Consumibles</td>
            <td style={{backgroundColor: "#c7f1fc", color: "#080a69", border: "none", fontSize:"14px"}}>Administrativos</td>
            <td style={{backgroundColor: "#c7f1fc", color: "#080a69", border: "none", fontSize:"14px"}}>Logísticos</td>
            <td style={{backgroundColor: "#d4ffd5", color: "#055207", border: "none", fontSize:"14px"}}>Productos</td>
            <td style={{backgroundColor: "#f5f7cd", color: "#5c5c06", border: "none", fontSize:"14px"}}>Total</td>
        </tr>
        <tbody style={{borderRight:"1px solid #dedad9", borderLeft:"1px solid #dedad9"}}>
        <tr>
            <td style={{borderTop:"none", borderBottom: "1px solid #dedad9", fontSize: "12px"}}>#</td>
            <td style={{borderTop:"none", borderBottom: "1px solid #dedad9", fontSize: "12px"}}>ID</td>
            <td style={{borderTop:"none", borderBottom: "1px solid #dedad9", fontSize: "12px"}}>Nombre</td>
            <td style={{borderTop:"none", borderBottom: "1px solid #dedad9", fontSize: "12px"}}>Antigüedad</td>
            <td style={{borderTop:"none", borderBottom: "1px solid #dedad9", fontSize: "12px"}}>Categoría</td>
            <td style={{borderTop:"none", borderBottom: "1px solid #dedad9", fontSize: "12px"}}>Existencia</td>
            <td style={{borderTop:"none", borderBottom: "1px solid #dedad9", fontSize: "12px"}}>Acciones</td>
        </tr>
        <TableMRField 
            id="023MJX23"
            nombre='Tubo de 1" calibre 14 de 3m'
            antiguedad="3 meses"
            categoria="Mecánica"
            existencia="8"
        />
        <TableMRField 
            id="065JSX26"
            nombre='Tubo de 1/2" calibre 14 de 3m'
            antiguedad="3 meses"
            categoria="Mecánica"
            existencia="2"
        />
        <TableMRField 
            id="097UJO76"
            nombre='Barra de alumninio, de 1m'
            antiguedad="3 meses"
            categoria="Mecánica"
            existencia="1"
        />
        <TableMRField 
            id="022YHK87"
            nombre='Línea de freno de 1m'
            antiguedad="1 año"
            categoria="Mecánica"
            existencia="3"
        />
        <TableMRField 
            id="010PAM23"
            nombre='Bomba de freno'
            antiguedad="6 meses"
            categoria="Mecánica"
            existencia="2"
        />
        <TableMRField 
            id="019THLPJ"
            nombre='Protoboard'
            antiguedad="8 meses"
            categoria="Electrónica"
            existencia="4"
        />
        <TableMRField 
            id="298RJS05"
            nombre='Arduino uno'
            antiguedad="2 semanas"
            categoria="Electrónica"
            existencia="2"
        />
        </tbody>
        </table>
        <button style={{backgroundColor:"#6b69b3", border:"none"}} type="button" class="btn btn-info"><i class="fas fa-plus-circle"></i> Nuevo artículo</button>
    </div>
}

export default TableMR;