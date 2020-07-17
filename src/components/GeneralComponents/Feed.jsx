import React from "react";
import FeedField from "./FeedField";

function Feed() {
  return <div className="feedContainer">
    <h5>Feed</h5>
    <button type="button" className="btn btn-outline-secondary sortFeed"><i className="fas fa-sync-alt"></i>  Movimientos</button>
    <br></br>
    <br></br>
    <FeedField
      funcion="Salida"
    />
    <FeedField
      funcion="Entrada"
    />
    <FeedField
      funcion="Creación"
    />
    <FeedField
      funcion="Eliminación"
    />
  </div>
}

export default Feed;
