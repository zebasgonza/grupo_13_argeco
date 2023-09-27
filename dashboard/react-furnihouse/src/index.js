import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import './assets/css/app.css';
import reportWebVitals from './reportWebVitals';
/* import TotalProductos from './componentes/TotalProductos'; */
import TotalUsuarios from './components/TotalUsuarios';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <TotalUsuarios/>

    {/* <TotalProductos/> */}
    
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





