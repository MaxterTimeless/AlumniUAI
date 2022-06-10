import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import BarraSup from './BarraSup';
import './BarraSup.css';
import Footer from './Footer';
import './Footer.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BarraSup />
    <App />
    <Footer />
  </React.StrictMode>
);