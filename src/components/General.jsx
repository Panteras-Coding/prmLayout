import React from "react";
import TopGen from "./GeneralComponents/TopGen";
import Interactividad from "./GeneralComponents/Interactividad";
import Feed from "./GeneralComponents/Feed";
import Settings from "./GeneralComponents/Settings";
function General(){
  return <div id="content">
    <TopGen />
    <Interactividad />
    <Feed />
    <Settings />
  </div>
}



export default General;
