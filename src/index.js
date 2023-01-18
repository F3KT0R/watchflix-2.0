import React from 'react';
import App from './components/core/App';
import './components/core/App.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
