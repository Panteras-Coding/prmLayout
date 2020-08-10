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
        <div class="modal fade" id="modalMR" tabindex="-1" aria-labelledby="exampleModalLabelMR" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header-settingsMR">
                        <nav>
                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                <a class="nav-item nav-link disabled" id="nav-config-tab" data-toggle="tab" href="#nav-config" role="tab" aria-controls="nav-config" aria-selected="true">Configuración Proyectos</a>
                                <a class="nav-item nav-link active" id="nav-clasificaciones-tab" data-toggle="tab" href="#nav-clasificaciones" role="tab" aria-controls="nav-clasificaciones" aria-selected="true">Clasificaciones</a>
                                <a class="nav-item nav-link" id="nav-elementos-tab" data-toggle="tab" href="#nav-elementos" role="tab" aria-controls="nav-elementos" aria-selected="false">Elementos</a>
                            </div>
                        </nav>
                        <button style={{position: "absolute", top: "7px", left: "565px"}} type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" className="fa fa-times-circle"></span>
                        </button>
                    </div>
                    <div class="modal-body-settingsMR">
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="nav-clasificaciones" role="tabpanel" aria-labelledby="nav-clasificaciones-tab">
                                <div class="modal-footer">
                                    <button type="button" className="btn btn-primary">Agregar</button>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="nav-elementos" role="tabpanel" aria-labelledby="nav-elementos-tab">
                                <div className="elementos">{lista}</div>
                                <div class="modal-footer-settingsMR">
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