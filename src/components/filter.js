import React from 'react';
import '../css/filter.css';
import {
  NavLink
} from 'react-router-dom';


const Filter = ()=>{
  return(
    <React.Fragment>
    <div className="container filter">
      <div className="general-items-filter">
        <h1 className="title-filter-md-container">Filtrar por</h1>
            <NavLink to="/" className="item-filter" exact activeClassName="active-filter" to="/">Todos</NavLink>
             <NavLink to="/autos" className="item-filter" exact activeClassName="active-filter" to="/autos">Autos</NavLink>
              <h2 className="item-filter">Pickups y comerciales</h2>
               <h2 className="item-filter">SUVs y crossovers</h2>
          </div>
          <div className="general-dropdown-container-filter">
            <h1 className="dropdown-filter">Ordenar por</h1>
          </div>
    </div>
    </React.Fragment>
  )
};

export default Filter;
