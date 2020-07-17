import React from "react";
import TopGen from "./GeneralComponents/Top";
import Interactividad from "./GeneralComponents/Interactividad";
import Feed from "./GeneralComponents/Feed";

function General(){
  return <div id="content">
    <TopGen />
    <Interactividad />
    <Feed />
  </div>
}

export default General;
