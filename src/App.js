// src/App.js
import React from 'react';
import PriceCard from './PriceCard';
import './App.css'; // Optional: Add global styles if needed

const App = () => {
  const plans = [
    {
      plan: 'FREE',
      price: '$0/month',
      features: [
        { name: 'Single User', available: true },
        { name: '50GB Storage', available: true },
        { name: 'Unlimited Public Projects', available: true },
        { name: 'Community Access', available: true },
        { name: 'Unlimited Private Projects', available: false },
        { name: 'Dedicated Phone Support', available: false },
        { name: 'Free Subdomain', available: false },
        { name: 'Monthly Status Reports', available: false }
      ]
    },
    {
      plan: 'PLUS',
      price: '$9/month',
      features: [
        { name: '5 Users', available: true },
        { name: '50GB Storage', available: true },
        { name: 'Unlimited Public Projects', available: true },
        { name: 'Community Access', available: true },
        { name: 'Unlimited Private Projects', available: true },
        { name: 'Dedicated Phone Support', available: true },
        { name: 'Free Subdomain', available: true },
        { name: 'Monthly Status Reports', available: false }
      ]
    },
    {
      plan: 'PRO',
      price: '$49/month',
      features: [
        { name: 'Unlimited Users', available: true },
        { name: '50GB Storage', available: true },
        { name: 'Unlimited Public Projects', available: true },
        { name: 'Community Access', available: true },
        { name: 'Unlimited Private Projects', available: true },
        { name: 'Dedicated Phone Support', available: true },
        { name: 'Free Subdomain', available: true },
        { name: 'Monthly Status Reports', available: true }
      ]
    }
  ];

  return (
    <div className="App">
      {plans.map((plan, index) => (
        <PriceCard
          key={index}
          plan={plan.plan}
          price={plan.price}
          features={plan.features}
        />
      ))}
    </div>
  );
};

export default App;
