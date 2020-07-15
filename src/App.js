import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Admin from './components/Admin';
import Logout from './components/Logout';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route  path="/admin" component={Admin} />
      <Route  path="/logout" component={Logout} />
    </Switch>
  );
}

const A =() => {
  return(
    <div>
      <h1>Component A</h1>
      <Link to="/b">Component B</Link>
    </div>
  );
}

const B =() => {
  return(
    <div>
      <h1>Component B</h1>
    </div>
  );
}
export default App;
