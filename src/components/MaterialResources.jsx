import React from "react";
import Sidebar from "./Sidebar";
import TopMR from "./MRComponents/TopMR";
import TableMR from "./MRComponents/TableMR";

function MaterialResources(){
  return <div id="content">
    <TopMR />
    <TableMR />
  </div>
}

export default MaterialResources;