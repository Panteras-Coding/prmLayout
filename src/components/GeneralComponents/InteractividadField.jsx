import React from "react";

function InteractividadField(props){
  return <div className="int-elements">
    <table>
      <tbody>
        <tr>
          <td><p className="int-subint">{props.name}</p></td>
          <td><p className="int-subint">{props.inputs}</p></td>
          <td><p className="int-subint">{props.outputs}</p></td>
          <td><p className="int-subint">{props.requests}</p></td>
        </tr>
      </tbody>
    </table>
  </div>
}

export default InteractividadField;
