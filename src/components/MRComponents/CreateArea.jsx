import React, { useState } from "react";

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;

function CreateArea(props) {

    const [product, setProduct] = useState({
        nameField:"",
        dateField: today,
        quantityField: "",
        categoryField: "",
        idField: ""
    })

    function handleChange(event) {
        const {name, value} = event.target;

        setProduct(prevProduct => {
            return {
                ...prevProduct,
                [name]: value
            }
        })
    }

    function emptyFields(){
        document.getElementById('nameField').value = "";
        document.getElementById('descriptionField').value = "";
        document.getElementById('areaField').value = "";
        document.getElementById('EntryInfo').value = "";
        document.getElementById('ExitInfo').value = "";
        document.getElementById('quantityField').value = "";
        document.getElementById('categoryField').value = "";
        document.getElementById('costField').value = "";
        document.getElementById('lifeField').value = "";
        document.getElementById('idField').value = "";
        document.getElementById('expirationField').value = "";
    }

    function submitProduct(event) {
        props.onAdd(product);
        document.getElementById('nameField').value = "";
        document.getElementById('descriptionField').value = "";
        document.getElementById('areaField').value = "";
        document.getElementById('EntryInfo').value = "";
        document.getElementById('ExitInfo').value = "";
        document.getElementById('quantityField').value = "";
        document.getElementById('categoryField').value = "";
        document.getElementById('costField').value = "";
        document.getElementById('lifeField').value = "";
        document.getElementById('idField').value = "";
        document.getElementById('expirationField').value = "";
        event.preventDefault();
    }

    return (
    <div>
        <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">    
            <div className="modal-dialog" role="document">
                <div className="modal-content addModal">
                    <div className="modal-header">
                        <h5 style={{color: "#545454"}} className="modal-title" id="exampleModalLabel">Agregar artículo</h5>
                        <button onClick={emptyFields} type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div style={{fontSize: "12px"}} className="modal-body">
                        <table>
                            <tr>
                                <td style={{paddingRight: "20px", paddingBottom: "20px"}}>
                                    <p style={{marginBottom: "0"}}> Nombre:</p>
                                    <textarea
                                        id="nameField"
                                        name="nameField"                                      
                                        onChange={handleChange}
                                        value={product.name}
                                        rows="1"
                                        cols="30"
                                    />
                                </td>
                                <td style={{paddingRight: "20px", paddingBottom: "20px"}}>
                                    <p style={{marginBottom: "0"}}>Descripción: </p>
                                    <textarea id="descriptionField" name="descriptionField" rows="1" cols="30"></textarea>
                                </td>
                                <td style={{paddingRight: "20px", paddingBottom: "20px"}}>
                                    <p style={{marginBottom: "0"}}>Áreas: </p>
                                    <textarea id="areaField" name="areaField" rows="1" cols="30"></textarea>
                                </td>
                                <td style={{paddingRight: "20px", paddingBottom: "20px"}}>
                                    <p style={{marginBottom: "0"}}>Fecha de creación:</p>
                                    <p>{today}</p>                            
                                </td>
                            </tr>
                            <tr>
                                <td style={{paddingRight: "20px", paddingBottom: "20px"}}>
                                    <p style={{marginBottom: "0"}}>Información de entradas: </p>
                                    <textarea style={{marginBottom: "0"}} id="EntryInfo" name="EntryInfo" rows="4" cols="30"></textarea>
                                </td>
                                <td style={{paddingRight: "10px", paddingBottom: "20px"}}>
                                    <p style={{marginBottom: "0"}}>Información de sálida: </p>
                                    <textarea className="infoField" id="ExitInfo" name="ExitInfo" rows="4" cols="30"></textarea>
                                </td>
                                <td style={{paddingRight: "20px", paddingBottom: "20px"}}>
                                    <p style={{marginBottom: "0"}}>Cantidad actual: </p>
                                    <textarea 
                                        id="quantityField"
                                        name="quantityField"
                                        onChange={handleChange}
                                        value={product.quantity} 
                                        rows="1" 
                                        cols="30" 
                                    />
                                </td>
                                <td style={{paddingRight: "20px", paddingBottom: "20px"}}>
                                    <p style={{marginBottom: "0"}}>Categoría: </p>
                                    <textarea 
                                        id="categoryField" 
                                        name="categoryField"
                                        onChange={handleChange}
                                        value={product.category} 
                                        rows="1" 
                                        cols="30"                             
                                    />
                                </td>
                            </tr>
                            <tr>
                            <td style={{paddingRight: "20px", paddingBottom: "20px"}}>
                                    <p style={{marginBottom: "0"}}>Fuente de ingreso: </p>
                                    
                                </td>
                                <td style={{paddingRight: "20px", paddingBottom: "20px"}}>
                                    <p style={{marginBottom: "0"}}>Costo de ingreso: </p>
                                    <textarea id="costField" name="costField" rows="1" cols="30"></textarea>
                                </td>
                                <td style={{paddingRight: "20px", paddingBottom: "20px"}}>
                                    <p style={{marginBottom: "0"}}>Vida útil: </p>
                                    <textarea id="lifeField" name="lifeField" rows="1" cols="30"></textarea>
                                </td>
                                <td style={{paddingRight: "20px", paddingBottom: "20px"}}>
                                    <p style={{marginBottom: "0"}}>ID: </p>
                                    <textarea
                                        id="idField"
                                        name="idField" 
                                        onChange={handleChange}
                                        value={product.productId}
                                        rows="1" 
                                        cols="30"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td rowSpan="2">
                                    <p style={{marginBottom: "0"}}>Vida restante: </p>
                                    <textarea className="expirationField" id="expirationField" name="expirationField" rows="1" cols="30"></textarea>
                                </td>
                                <td>
                                    <p style={{marginBottom: "0"}}>Imagen: </p>
                                
                                </td>                        
                            </tr>
                        </table>
    
                    </div>
                    <button onClick={submitProduct} className="btn btn-primary addButton">Agregar</button>        
                </div>
            </div>
        </div>





    </div>
  );
}

export default CreateArea;