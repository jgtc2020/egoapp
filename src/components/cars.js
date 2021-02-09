import React from 'react';
import Card from '../components/card.js';
import car1 from '../img/car1.png';
import car2 from '../img/car2.png';
import car3 from '../img/car3.png';
import car4 from '../img/car4.png';
import car5 from '../img/car5.png';
import car6 from '../img/car6.png';
import car7 from '../img/car7.png';
import car8 from '../img/car8.png';
import logo from '../img/logo.png';
import {AnimatePresence, motion} from 'framer-motion';

const Cars = ()=>{

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
    <div className="container">
      <div className="row">
        <div data-aos="fade-up" data-aos="fade-up" className="col-12 col-md-6 col-lg-4 col-xl-3 item-card scrollflow -slide-top -opacity">
        <div className="card-item-container-models-cars">
          <h1 className="title-card-item-models-cars">Etios</h1>
          <h2 className="title-price-card-item-models-cars">$1.030.900</h2>
          <img className="img-card-item-models-cars" src={car1} alt="imagen de un carro" />
          <button className="btn-card-models-cars" type="button" onClick={handleAppear}>Ver modelo</button>
        </div>
        </div>
        <div data-aos="fade-up" className="col-12 col-md-6 col-lg-4 col-xl-3 item-card">
        <div className="card-item-container-models-cars">
          <h1 className="title-card-item-models-cars">Yaris</h1>
          <h2 className="title-price-card-item-models-cars">$1.040.900</h2>
          <img className="img-card-item-models-cars" src={car2} alt="imagen de un carro" />
          <button className="btn-card-models-cars" type="button" name="button" onClick={handleAppear}>Ver modelo</button>
        </div>
        </div>
        <div data-aos="fade-up" className="col-12 col-md-6 col-lg-4 col-xl-3 item-card">
        <div className="card-item-container-models-cars">
          <h1 className="title-card-item-models-cars">Corolla</h1>
          <h2 className="title-price-card-item-models-cars">$1.040.000</h2>
          <img className="img-card-item-models-cars" src={car3} alt="imagen de un carro" />
          <button className="btn-card-models-cars" type="button" name="button" onClick={handleAppear}>Ver modelo</button>
        </div>
        </div>
        <div data-aos="fade-up" className="col-12 col-md-6 col-lg-4 col-xl-3 item-card">
        <div className="card-item-container-models-cars">
          <h1 className="title-card-item-models-cars">Prius</h1>
          <h2 className="title-price-card-item-models-cars">$1.040.000</h2>
          <img className="img-card-item-models-cars" src={car4} alt="imagen de un carro" />
          <button className="btn-card-models-cars" type="button" name="button" onClick={handleAppear}>Ver modelo</button>
        </div>
        </div>
        <div data-aos="fade-up" className="col-12 col-md-6 col-lg-4 col-xl-3 item-card">
        <div className="card-item-container-models-cars">
          <h1 className="title-card-item-models-cars">Camry</h1>
          <h2 className="title-price-card-item-models-cars">$1.040.000</h2>
          <img className="img-card-item-models-cars" src={car5} alt="imagen de un carro" />
          <button className="btn-card-models-cars" type="button" name="button" onClick={handleAppear}>Ver modelo</button>
        </div>
        </div>
        <div data-aos="fade-up" className="col-12 col-md-6 col-lg-4 col-xl-3 item-card">
        <div className="card-item-container-models-cars">
          <h1 className="title-card-item-models-cars">Toyota 86</h1>
          <h2 className="title-price-card-item-models-cars">$1.040.000</h2>
          <img className="img-card-item-models-cars" src={car6} alt="imagen de un carro" />
          <button className="btn-card-models-cars" type="button" name="button" onClick={handleAppear}>Ver modelo</button>
        </div>
        </div>
        <div data-aos="fade-up" className="col-12 col-md-6 col-lg-4 col-xl-3 item-card">
        <div className="card-item-container-models-cars">
          <h1 className="title-card-item-models-cars">Innova</h1>
          <h2 className="title-price-card-item-models-cars">$1.040.000</h2>
          <img className="img-card-item-models-cars" src={car7} alt="imagen de un carro" />
          <button className="btn-card-models-cars" type="button" name="button" onClick={handleAppear}>Ver modelo</button>
        </div>
        </div>
        <div data-aos="fade-up" className="col-12 col-md-6 col-lg-4 col-xl-3 item-card">
        <div className="card-item-container-models-cars">
          <h1 className="title-card-item-models-cars">SW4</h1>
          <h2 className="title-price-card-item-models-cars">$1.040.000</h2>
          <img className="img-card-item-models-cars" src={car8} alt="imagen de un carro" />
          <button className="btn-card-models-cars" type="button" name="button" onClick={handleAppear}>Ver modelo</button>
        </div>
        </div>

      </div>
    </div>
    </motion.div>
    </React.Fragment>
  )
};

export default Cars;
