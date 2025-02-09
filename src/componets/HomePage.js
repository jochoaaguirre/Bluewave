import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Bienvenido a BlueWave Swim</h1>
      <p>La mejor tienda de artículos para nadadores.</p>
      <img src="/images/storefront.jpg" alt="Imagen Destacada" className="featured-image" />
    </div>
  );
}

export default HomePage;
