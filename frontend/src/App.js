import React from 'react';
// import { render } from 'react-dom';
import './App.css';
import Create from './components/Create';
import Update from './components/Update';
import List from './components/List';
import Delete from './components/Delete';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="container">
      <div className="row p-2">
        <Link to="/list"><button className="btn btn-primary">List</button></Link>
        <Link to="/create"><button className="btn btn-primary">Create</button></Link>
        
        
      </div>
      <div>
      <Switch>
          <Route exact path="/list/" component={List} />
          <Route path="/create/" component={Create} />
          <Route path="/update/:ids/" component={Update} />
          <Route path="/delete/:ids/" component={Delete} />
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
