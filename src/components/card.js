import React from 'react';
import '../css/card.css';


const Card = ({title, price, img})=>{

  return(
    <React.Fragment>
    <div className="card-item-container-models-cars">
      <h1 className="title-card-item-models-cars">{title}</h1>
      <h2 className="title-price-card-item-models-cars">{price}</h2>
      <img className="img-card-item-models-cars" src={img} alt="imagen de un carro" />
      <button className="btn-card-models-cars" type="button" name="button">Ver modelo</button>
    </div>
    </React.Fragment>
  )
};

export default Card;
