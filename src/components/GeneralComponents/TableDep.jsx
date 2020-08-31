import React, {useState} from "react";
import TableDepField from "./TableDepField";
import CreateDep from "./CreateDep";

function TableDep(){

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

    return <div className="tablegen">
        <table className="table">
        <tbody>
        <tr>
            <td style={{borderTop:"none", borderBottom: "1px solid #dedad9", fontSize: "12px",paddingRight: "5px"}}>Nombre</td>
            <td style={{borderTop:"none", borderBottom: "1px solid #dedad9", fontSize: "12px",paddingRight: "5px"}}>Tipo</td>
            <td style={{borderTop:"none", borderBottom: "1px solid #dedad9", fontSize: "12px"}}>Color</td>
        </tr>
        <CreateDep onAdd={addProduct} />
        {products.map((productItem, index) => {
            return (
                <TableDepField
                    key={index}
                    id={index}
                    name={productItem.nameField}
                    category={productItem.categoryField}
                    quantity={productItem.quantityField}
                    onDelete={deleteProduct}
                />
            );
        })}
        </tbody>
        </table>
        
        
        
    </div>
}

export default TableDep;