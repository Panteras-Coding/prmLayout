import React, { useState } from "react";



function CreateEsp(props) {

    const [product, setProduct] = useState({
        nameField:"",
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
        document.getElementById('quantityField').value = "";
        document.getElementById('categoryField').value = "";
        
    }

    function submitProduct(event) {
        props.onAdd(product);
        document.getElementById('nameField').value = "";
        document.getElementById('quantityField').value = "";
        document.getElementById('categoryField').value = "";
    
        event.preventDefault();
    }

    return (
    <div>
        <div className="modal fade" id="exampleModalarea3" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">    
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content" id="addModal">
                    <div className="modal-header" id="agregar">
                        <h5 style={{color: "#545454"}} className="modal-title" id="exampleModalarea">Agregar</h5>
                        <button onClick={emptyFields} type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div style={{fontSize: "12px"}} className="modal-body">
                        <table>
                            <tr>
                                <td style={{paddingRight: "5px", paddingBottom: "20px"}}>
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
                                <td style={{paddingRight: "5px", paddingBottom: "20px"}}>
                                    <p style={{marginBottom: "0"}}>Tipo: </p>
                                    <textarea 
                                        id="quantityField"
                                        name="quantityField"
                                        onChange={handleChange}
                                        value={product.quantity} 
                                        rows="1" 
                                        cols="30" 
                                    />
                                </td>
                                <td style={{paddingRight: "5px", paddingBottom: "20px"}}>
                                    <p style={{marginBottom: "0"}}>Color: </p>
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
                        </table>
    
                    </div>
                    <div class="modal-footer">
                    <button onClick={submitProduct} className="btn btn-danger">Agregar</button> 
                    </div>
                           
                </div>
            </div>
        </div>





    </div>
  );
}

export default CreateEsp;