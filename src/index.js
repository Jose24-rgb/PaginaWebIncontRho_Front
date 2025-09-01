import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Mantieni questo se hai CSS personalizzato qui, altrimenti puoi svuotarlo
import App from './App'; // Importa il componente App
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* Assicurati che qui sia <App /> */}
  </React.StrictMode>
);

// Se vuoi iniziare a misurare le prestazioni nella tua app, passa una funzione
// per registrare i risultati (ad esempio: reportWebVitals(console.log))
// o inviare a un endpoint di analisi. Scopri di più: https://bit.ly/CRA-vitals
reportWebVitals();