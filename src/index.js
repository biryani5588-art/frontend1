import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './context/cart';
import { Elements } from "@stripe/react-stripe-js";
// import { stripePromise } from './stripe';
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51SoinoFipdSC2ebiOf7FiAxDxRljugR5VWwK4Ko9oM0PaXLaXVZdpdprXs1VK9PPTKVQOuHuXgBTs9XiUPq5oIvy00wjkbM240");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Elements stripe={stripePromise}>
  <CartProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </CartProvider>
  </Elements>
);



reportWebVitals();
