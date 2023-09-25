import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TotalProductos from './componentes/TotalProductos';
import TotalUsuarios from './componentes/TotalUsuarios';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TotalUsuarios/>

    <TotalProductos/>
    
    <App/>
  </React.StrictMode>
);

reportWebVitals();
