import React from 'react';
import Home from '../components/home.js';
import Ficha from '../components/ficha.js';
import Header from '../components/header.js';
import Cars from '../components/cars.js';
import CarsT from '../components/carsT.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import {AnimatePresence, motion} from 'framer-motion';

const App = ()=>{
  return(
    <React.Fragment>
    <Router>
   <Switch>
   <Route path="/" exact>
   <Home />
   </Route>
   <Route path="/ficha-tecnica" exact>
   <Ficha />
   </Route>
   <Route path="/autos" exact>
   <Home />
   </Route>
   </Switch>
   </Router>
    </React.Fragment>
  )
};

export default App;
