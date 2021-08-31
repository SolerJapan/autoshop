import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { servicesData } from './services-data';

ReactDOM.render(
  <React.StrictMode>
    <App servicesData={servicesData} />
  </React.StrictMode>,
  document.getElementById('root')
);


