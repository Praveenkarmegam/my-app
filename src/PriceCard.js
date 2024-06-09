// src/PriceCard.js
import React from 'react';
import './PriceCard.css'; // Create this CSS file for styling

const PriceCard = ({ plan, price, features }) => {
  return (
    <div className="price-card">
      <h3>{plan}</h3>
      <h4>{price}</h4>
      <ul>
        {features.map((feature, index) => (
          <li key={index} className={feature.available ? '' : 'unavailable'}>
            {feature.available ? '✔️' : '❌'} {feature.name}
          </li>
        ))}
      </ul>
      <button>BUTTON</button>
    </div>
  );
};

export default PriceCard;
