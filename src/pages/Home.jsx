import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import CardPizza from '../components/Cardpizza';


const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas')
      .then((response) => response.json())
      .then((data) => setPizzas(data))
      .catch((error) => console.error('Error fetching pizzas:', error));
  }, []);

  return (
    <div className="home">
      <Header />
      <div className="container">
      <div className="row">
        {Array.isArray(pizzas) && pizzas.length > 0 ? (
          pizzas.map((pizza) => (
            <div key={pizza.id} className="col-md-4 mb-4">
            <CardPizza
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
              desc={pizza.desc}
            />
             </div>
          ))
        ) : (
          <p>No hay pizzas disponibles.</p>
        )}
         </div>
      </div>
    </div>
  );
};

export default Home;
