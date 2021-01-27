import React, {useEffect} from 'react';
import Header from '../components/header.js';
import Filter from '../components/filter.js';
import Card from '../components/card.js';
import Loader from '../components/loader.js';
import Ficha from '../components/ficha.js';
import '../css/home.css';
import car1 from '../img/car1.png';
import car2 from '../img/car2.png';
import car3 from '../img/car3.png';
import car4 from '../img/car4.png';
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

  return(
      <React.Fragment>

      <motion.div
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      animate={{opacity: 1}}>
      <Router>
      <Header />
       <Switch>
        <Route exact path="/">
        <Loader />
        <div className="container general-container-title-hero">
          <h1 className="title-hero">Descubrí todos los modelos</h1>
        </div>

        <Filter />

        <div className="general-container-models-cars">
          <div className="container">
            <div className="row">
              <div data-aos="fade-up" data-aos="fade-up" className="col-12 col-md-6 col-lg-4 col-xl-3 item-card scrollflow -slide-top -opacity">
                <Card title="Etios" price="2019 | $815.900" img={car1}/>
              </div>
              <div data-aos="fade-up" className="col-12 col-md-6 col-lg-4 col-xl-3 item-card">
               <Card title="Yaris" price="2020 | $1.030.900" img={car2}/>
              </div>
              <div data-aos="fade-up" className="col-12 col-md-6 col-lg-4 col-xl-3 item-card">
               <Card title="Corolla" price="2018 | $1.430.700" img={car3}/>
              </div>
              <div data-aos="fade-up" className="col-12 col-md-6 col-lg-4 col-xl-3 item-card">
               <Card title="Prius" price="2019 | $2.882.000" img={car4}/>
              </div>
              <div data-aos="fade-up" className="col-12 col-md-6 col-lg-4 col-xl-3 item-card">
               <Card title="Prius" price="2019 | $2.882.000" img={car1}/>
              </div>
              <div data-aos="fade-up" className="col-12 col-md-6 col-lg-4 col-xl-3 item-card">
               <Card title="Prius" price="2019 | $2.882.000" img={car3}/>
              </div>
              <div data-aos="fade-up" className="col-12 col-md-6 col-lg-4 col-xl-3 item-card">
               <Card title="Prius" price="2019 | $2.882.000" img={car2}/>
              </div>
              <div data-aos="fade-up" className="col-12 col-md-6 col-lg-4 col-xl-3 item-card">
               <Card title="Prius" price="2019 | $2.882.000" img={car1}/>
              </div>

            </div>
          </div>
        </div>
        </Route>

        <Route exact path="/ficha-tecnica">
        <Ficha />
        </Route>

        </Switch>
        </Router>
        </motion.div>
      </React.Fragment>
  )
};

export default Home;
