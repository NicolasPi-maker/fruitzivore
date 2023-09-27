import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/normalize.css';
import './style/main.scss';
import Home from './pages/home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

