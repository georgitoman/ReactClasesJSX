import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './components/App/App';
//import Comics from './components/Comics/Comics';
import reportWebVitals from './reportWebVitals';
import EjemploSimple from './components/Formularios/EjemploSimple';

ReactDOM.render(
  <React.StrictMode>
    <EjemploSimple />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
