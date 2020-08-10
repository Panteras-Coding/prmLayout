import React from "react";
import Sidebar from "./Sidebar";
import TopMR from "./MRComponents/TopMR";
import TableMR from "./MRComponents/TableMR";
import SettingsMR from "./MRComponents/SettingsMR";

function MaterialResources(){
  return <div id="content">
    <TopMR />
    <TableMR />
    <SettingsMR />
  </div>
}

export default MaterialResources;