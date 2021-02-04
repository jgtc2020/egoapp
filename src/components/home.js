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
import logo from '../img/logo.png';
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

  const handleAppear = (event)=>{

    const container = document.getElementsByClassName("general-container-card-ps")[0];
    container.style.opacity = '1';
    container.style.visibility = 'visible';
    container.style.transition = '.5s';

    const titleCard = event.target.parentElement.getElementsByClassName("title-card-item-models-cars")[0].textContent;
    const titlePs = document.getElementsByClassName("title-card-ps")[0];
    titlePs.textContent = titleCard;

    const priceCard = event.target.parentElement.getElementsByClassName("title-price-card-item-models-cars")[0].textContent;
    const pricePs = document.getElementsByClassName("price-card-ps")[0];
    pricePs.textContent = priceCard;

    const imgCard = event.target.parentElement.getElementsByClassName("img-card-item-models-cars")[0].src;
    const imgPs = document.getElementsByClassName("img-card-ps")[0];
    imgPs.src = imgCard;

  };

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

    <div className="general-container-card-ps">
        <div className="col-lg-3">
          <div className="card-ps">
            <div className="container-header-card-ps">
            <img className="img-logo-container-header-card-ps" src={logo} alt="logo egoapp" />
             <h1 className="title-container-header-card-ps">app</h1>
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
          <div className="container">
            <div className="row">
              <div data-aos="fade-up" data-aos="fade-up" className="col-12 col-md-6 col-lg-4 col-xl-3 item-card scrollflow -slide-top -opacity">
              <div className="card-item-container-models-cars">
                <h1 className="title-card-item-models-cars">Yaris</h1>
                <h2 className="title-price-card-item-models-cars">$1.030.900</h2>
                <img className="img-card-item-models-cars" src={car1} alt="imagen de un carro" />
                <button className="btn-card-models-cars" type="button" name="button" onClick={handleAppear}>Ver modelo</button>
              </div>
              </div>
              <div data-aos="fade-up" className="col-12 col-md-6 col-lg-4 col-xl-3 item-card">
              <div className="card-item-container-models-cars">
                <h1 className="title-card-item-models-cars">Mustang</h1>
                <h2 className="title-price-card-item-models-cars">$1.040.900</h2>
                <img className="img-card-item-models-cars" src={car2} alt="imagen de un carro" />
                <button className="btn-card-models-cars" type="button" name="button" onClick={handleAppear}>Ver modelo</button>
              </div>
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
