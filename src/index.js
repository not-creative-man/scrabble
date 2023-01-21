import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import Modal from './scripts/modules/Modal';
import Scrabble from './scripts/Scrabble';
import changeLetters from './scripts/functional/changeLetters';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode >
    <Scrabble />
    <Modal />
  </React.StrictMode>
);

reportWebVitals();