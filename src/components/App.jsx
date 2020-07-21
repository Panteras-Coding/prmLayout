import React from "react";
import Sidebar from "./Sidebar";
import General from "./General";
import MaterialResources from "./MaterialResources";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={General}/>
          <Route path="/materialresources" component={MaterialResources}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
