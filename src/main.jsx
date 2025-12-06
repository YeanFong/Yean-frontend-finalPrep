// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Optional: Add your CSS here
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap the app in BrowserRouter for routing */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
