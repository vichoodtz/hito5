
import React from 'react';

const CardPizza = ({ name, price, ingredients, img, desc }) => {
  return (

    <div className="card h-100">
      <img src={img} alt={name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{desc}</p>
        <p className="card-text"><strong>Precio:</strong> ${price}</p>
        <h6>Ingredientes:</h6>
        <ul className="list-group list-group-flush">
          {Array.isArray(ingredients) && ingredients.length > 0 ? (
            ingredients.map((ingredient, index) => (
              <li key={index} className="list-group-item">{ingredient}</li>
            ))
          ) : (
            <li className="list-group-item">No hay ingredientes disponibles.</li>
          )}
        </ul>
          </div>
    </div>
  );
};

export default CardPizza;
