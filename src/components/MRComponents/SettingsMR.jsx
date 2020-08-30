import React from "react";
const elementos = [
    "ID",
    "Nombre",
    "Fecha de creación",
    "Antiguedad",
    "Vida restante",
    "Categoría",
    "Existencia",
    "Entradas",
    "Salidas",
    "Solicitudes",
    "Fuente de ingreso",
    "Costo financiero"
];
const lista = elementos.map(elem => (
    <form>
        <input type="checkbox" id="confgElem" name="order" value="PrTable" />
        <label style={{ margin: "5px" }} for="confgElem">{elem}</label>
    </form>
));
function SettingsMR() {

    return (
        <div className="modal fade" id="modalMR" tabIndex="-1" aria-labelledby="exampleModalLabelMR" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header-settingsMR">
                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <a className="nav-item nav-link disabled" id="nav-config-tab" data-toggle="tab" href="#nav-config" role="tab" aria-controls="nav-config" aria-selected="true">Configuración Proyectos</a>
                                <a className="nav-item nav-link active" id="nav-clasificaciones-tab" data-toggle="tab" href="#nav-clasificaciones" role="tab" aria-controls="nav-clasificaciones" aria-selected="true">Clasificaciones</a>
                                <a className="nav-item nav-link" id="nav-elementos-tab" data-toggle="tab" href="#nav-elementos" role="tab" aria-controls="nav-elementos" aria-selected="false">Elementos</a>
                            </div>
                        </nav>
                        <button style={{position: "absolute", top: "7px", left: "565px"}} type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" className="fa fa-times-circle"></span>
                        </button>
                    </div>
                    <div className="modal-body-settingsMR">
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-clasificaciones" role="tabpanel" aria-labelledby="nav-clasificaciones-tab">
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary">Agregar</button>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="nav-elementos" role="tabpanel" aria-labelledby="nav-elementos-tab">
                                <div className="elementos">{lista}</div>
                                <div className="modal-footer-settingsMR">
                                    <button type="button" className="btn btn-secondary">Aplicar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsMR;