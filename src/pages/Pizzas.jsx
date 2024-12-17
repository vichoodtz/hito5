import React, { useEffect, useState } from 'react';
import CardPizza from '../components/Cardpizza';

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas/p001')
      .then((response) => response.json())
      .then((data) => setPizza(data))
      .catch((error) => console.error('Error fetching pizza:', error));
  }, []);

  if (!pizza) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="d-flex justify-content-center">
    <CardPizza
      key={pizza.id}
      name={pizza.name}
      price={pizza.price}
      ingredients={pizza.ingredients}
      img={pizza.img}
      desc={pizza.desc}
    />
      <button>Añadir al carrito</button>
    </div>
  );
};

export default Pizza;