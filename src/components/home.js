import React, {useEffect} from 'react';
import Header from '../components/header.js';
import Filter from '../components/filter.js';
import Loader from '../components/loader.js';
import Ficha from '../components/ficha.js';
import Cars from '../components/cars.js';
import CarsT from '../components/carsT.js';
import Control from '../components/control.js';
import logo from '../img/logo.png';
import '../css/home.css';
import {AnimatePresence, motion} from 'framer-motion';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = ()=>{

  useEffect(() =>{
    Aos.init({duration: 2000});
  }, []);

  const handleDisappear = ()=>{
    const container = document.getElementsByClassName("general-container-card-ps")[0];
    container.style.opacity = '0';
    container.style.visibility = 'hidden';
    container.style.transition = '.5s';
  };

  return(
      <React.Fragment>

      <motion.div
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      animate={{opacity: 1}}>
      <Header />
      <Router>

        <Loader />

    <div className="general-container-card-ps">
      <div className="general-card col-md-6 col-lg-3">
        <div className="card-ps">
          <div className="container-header-card-ps">
          <img className="img-logo-container-header-card-ps" src={logo} alt="logo egoapp" />
           <h1 className="title-container-header-card-ps">app</h1>
            <i onClick={handleDisappear} class="icon-close-header-card-ps fas fa-times"></i>
            </div>
          <div className="container-text-card-ps">
            <h1 className="title-card-ps"></h1>
            <h2 className="price-card-ps"></h2>
            <img className="img-card-ps" src="" alt="imagen de un auto" />
            <button className="btn-card-ps" type="button" name="button">Comprar</button>
          </div>
        </div>
        </div>
    </div>

        <div className="container general-container-title-hero">
          <h1 className="title-hero">Descubrí todos los modelos</h1>
        </div>

        <Filter />

        <div className="general-container-models-cars">
        <Switch>
        <Route exact path="/">
        <Cars />
        </Route>
        <Route exact path="/autos">
        <CarsT />
        </Route>
        </Switch>
        </div>




        </Router>
        </motion.div>
      </React.Fragment>
  )
};

export default Home;
