import React from 'react';
import '../css/filter.css';


const Filter = ()=>{
  return(
    <div className="container filter">
      <div className="general-items-filter">
        <h1 className="title-filter-md-container">Filtrar por</h1>
            <h2 className="item-filter span-item">Todos</h2>
             <h2 className="item-filter">Autos</h2>
              <h2 className="item-filter">Pickups y comerciales</h2>
               <h2 className="item-filter">SUVs y crossovers</h2>
          </div>
          <div className="general-dropdown-container-filter">
            <h1 className="dropdown-filter">Ordenar por</h1>
          </div>
    </div>
  )
};

export default Filter;
