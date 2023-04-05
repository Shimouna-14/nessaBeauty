import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Body from './styles/body';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Body />
    <App />
  </React.StrictMode>
);