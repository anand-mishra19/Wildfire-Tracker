import React from 'react';
import ReactDOM from 'react-dom/client'; // Keep this import
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Use createRoot instead of render
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); // Create a root

root.render( // Use the render method of the root object
  <React.StrictMode>
    <App />
  </React.StrictMode>
);