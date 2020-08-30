import React, {useState} from "react";
import TableMRField from "./TableMRField";
import CreateArea from "./CreateArea";

function TableMR(){

    const [products, setProducts] = useState([]);

    function addProduct(newProduct) {
        setProducts(prevProducts => {
          return [...prevProducts, newProduct];
        });
    }
    
    function deleteProduct(id) {
        setProducts(prevProducts => {
          return prevProducts.filter((productItem, index) => {
            return index !== id;
          });
        });
    }

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
        <CreateArea onAdd={addProduct} />
        {products.map((productItem, index) => {
            return (
                <TableMRField
                    key={index}
                    id={index}
                    registerId={productItem.idField}
                    name={productItem.nameField}
                    date={productItem.dateField}
                    category={productItem.categoryField}
                    quantity={productItem.quantityField}
                    onDelete={deleteProduct}
                />
            );
        })}
        </tbody>
        </table>
        
        <button style={{backgroundColor:"#6b69b3", border:"none", outline:"none"}} type="button" className="btn btn-info" data-toggle="modal" data-target="#exampleModalLong">
            <i className="fas fa-plus-circle"></i>  Nuevo artículo
        </button>
        
    </div>
}

export default TableMR;