import React from "react";
function Settings() {

  return <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <a className="nav-item nav-link disabled" id="nav-conf-tab" data-toggle="tab" href="#nav-conf" role="tab" aria-controls="nav-conf" aria-selected="true">Configuración</a>
              <a className="nav-item nav-link active" id="nav-areas-tab" data-toggle="tab" href="#nav-areas" role="tab" aria-controls="nav-areas" aria-selected="true">Áreas</a>
              <a className="nav-item nav-link" id="nav-depositos-tab" data-toggle="tab" href="#nav-depositos" role="tab" aria-controls="nav-depositos" aria-selected="false">Depósitos</a>
              <a className="nav-item nav-link" id="nav-espacios-tab" data-toggle="tab" href="#nav-espacios" role="tab" aria-controls="nav-espacios" aria-selected="false">Espacios</a>
              <a className="nav-item nav-link" id="nav-admin-tab" data-toggle="tab" href="#nav-admin" role="tab" aria-controls="nav-admin" aria-selected="false">Administradores</a>
            </div>
          </nav>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" className="fa fa-times-circle"></span>
          </button>
        </div>

        <div className="modal-body">
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-areas" role="tabpanel" aria-labelledby="nav-areas-tab">
              <table>
                <tbody>
                  <tr>
                    <td><p className="headernombre">Nombre</p></td>
                    <td><p className="headertipo">Tipo</p></td>
                    <td><p className="headercolor">Color</p></td>
                    <td><p className="headereditar">Editar</p></td>
                    <td><p className="headereliminar">Eliminar</p></td>
                  </tr>
                </tbody>
              </table>
              <div className="modal-footer">
                <button type="button" className="btn btn-outline-success waves-effect">Agregar Área <i className="fa fa-plus-circle"></i></button>
              </div>
            </div>
            <div className="tab-pane fade" id="nav-depositos" role="tabpanel" aria-labelledby="nav-depositos-tab">
              <table>
                <tbody>
                  <tr>
                    <td><p className="headernombre">Nombre</p></td>
                    <td><p className="headertipo">Tipo</p></td>
                    <td><p className="headercolor">Color</p></td>
                    <td><p className="headereditar">Editar</p></td>
                    <td><p className="headereliminar">Eliminar</p></td>
                  </tr>
                </tbody>
              </table>
              <div className="modal-footer">
                <button type="button" className="btn btn-outline-success waves-effect">Agregar Depósitos <i className="fa fa-plus-circle"></i></button>
              </div>
            </div>
            <div className="tab-pane fade" id="nav-espacios" role="tabpanel" aria-labelledby="nav-espacios-tab">
              <table>
                <tbody>
                  <tr>
                    <td><p className="headernombre">Nombre</p></td>
                    <td><p className="headertipo">Tipo</p></td>
                    <td><p className="headercolor">Color</p></td>
                    <td><p className="headereditar">Editar</p></td>
                    <td><p className="headereliminar">Eliminar</p></td>
                  </tr>
                </tbody>
              </table>
              <div className="modal-footer">
                <button type="button" className="btn btn-outline-success waves-effect">Agregar Espacios <i className="fa fa-plus-circle"></i></button>
              </div>
            </div>
            <div className="tab-pane fade" id="nav-admin" role="tabpanel" aria-labelledby="nav-admin-tab">
              <table>
                <tbody>
                  <tr>
                    <td><p className="headernombre">Nombre</p></td>
                    <td><p className="headertipo">Tipo</p></td>
                    <td><p className="headercolor">Color</p></td>
                    <td><p className="headereditar">Editar</p></td>
                    <td><p className="headereliminar">Eliminar</p></td>
                  </tr>
                </tbody>
              </table>
              <div className="modal-footer">
                <button type="button" className="btn btn-outline-success waves-effect">Agregar Administradores <i className="fa fa-plus-circle"></i></button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
}
export default Settings;