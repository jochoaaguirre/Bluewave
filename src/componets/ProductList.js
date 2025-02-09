import React from 'react';
import './ProductList.css';

const products = [
  { id: 1, name: 'Gorra de Natación', description: 'Gorra de alta calidad.', price: '$10', image: '/images/cap.jpg' },
  { id: 2, name: 'Gafas de Natación', description: 'Gafas anti-empañamiento.', price: '$20', image: '/images/goggles.jpg' },
];

const ProductList = () => {
  return (
    <div className="product-list">
      <h2>Catálogo de Productos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
