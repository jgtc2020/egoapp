import React from 'react';
import logoHeader from '../img/logo.png';
import '../css/loader.css';

const Loader = ()=>{

  const desappear = ()=> {
      var containerSlide = document.getElementsByClassName("loader-container")[0];
      containerSlide.style.visibility = 'hidden';
      containerSlide.style.opacity = '0';
      containerSlide.style.transition = '.5s';
    };

    setTimeout(desappear, 800);

  return(
    <React.Fragment>

    <div className="loader-container">
      <img className="img-logo-container" src={logoHeader} alt="imagen logo" />
        <h1 className="title-logo-container">App</h1>
    </div>

    </React.Fragment>
  )
};

export default Loader;
