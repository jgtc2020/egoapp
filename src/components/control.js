import React from 'react';
import Cars from '../components/cars.js';
import CarsT from '../components/carsT.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

const Control = ()=>{
  return(
    <React.Fragment>
    <Router>
    <Switch>
    <Route exact path="/">
    <Cars />
    </Route>
    <Route exact path="/autos">
    <CarsT />
    </Route>
    </Switch>
    </Router>
    </React.Fragment>
  )
};

export default Control;
