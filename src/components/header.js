import React from 'react';
import '../css/header.css';
import logoHeader from '../img/logo.png';
import navMenuHeader from '../img/gray.png';
import Headroom from 'react-headroom';
import {
  BrowserRouter as Router,
  Link,
  NavLink
  } from 'react-router-dom';

const Header = ()=>{

  const handleAppear = ()=>{
    const container = document.getElementsByClassName("general-aside-menu-ds")[0];
    container.style.opacity = '1';
    container.style.visibility = 'visible';
    container.style.transform = 'translateX(0%)';
    container.style.transition = '.5s';
  };


  const handleDisappear = ()=>{
    const container = document.getElementsByClassName("general-aside-menu-ds")[0];
    container.style.opacity = '0';
    container.style.visibility = 'hidden';
    container.style.transform = 'translateX(100%)';
    container.style.transition = '.5s';
  };

  return(

    <React.Fragment>

    <div className="header-ego-cars-model">

    <div className="general-items-header">
      <img className="img-logo-header" src={logoHeader} alt="logo-header" />
         <NavLink to="/" className="title-model-header span" exact activeClassName="active" to="/">Modelos</NavLink>
          <NavLink to="/ficha-tecnica" className="title-model-header"  exact activeClassName="active" to="/ficha-tecnica">Ficha técnica</NavLink>
      </div>

      <div className="general-nav-menu-header">
        <h1 className="title-nav-menu-header">Menú</h1>
        <img className="img-nav-menu-header" onClick={handleAppear} src={navMenuHeader} alt="nav-menú" />
      </div>
    </div>

    <div className="general-container-aside-nav">
      <div className="general-aside-menu-ds">
       <div className="container general-container-aside-content">
         <h1 onClick={handleDisappear}  className="close-times-title"><i className="icon-close-aside-menu fas fa-times"></i>Cerrar</h1>
          <NavLink to="/ficha-tecnica" exact activeClassName="active" to="/ficha-tecnica"><h1 className="title-aside-menu">Ficha técnica</h1></NavLink>
            <NavLink to="/"><h1 className="title-aside-menu">Modelos</h1></NavLink>
             <NavLink to="/ficha-tecnica"><h1 className="title-aside-menu">Servicios y Accesorios</h1></NavLink>
            <NavLink to="/ficha-tecnica"><h1 className="title-aside-menu">Financiación</h1></NavLink>
        </div>
      </div>
    </div>

    </React.Fragment>
  )
};

export default Header;
