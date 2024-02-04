import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from "./store/index";
import {Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./scss/custom.scss"
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));


 axios.defaults.baseURL="http://localhost:3001" //!deploy
//axios.defaults.baseURL="https://countries-production-67fa.up.railway.app/" //!deploy

root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();