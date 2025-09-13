import React from 'react';
import './LaCartaDeiServizi.css';

const LaCartaDeiServizi = () => {
  return (
    <div className="container my-5">
         <h1
  className="text-center mb-4 text-primary titolo-trasparenza"
  ref={el => {
    if (el && window.innerWidth <= 767) { // solo su mobile
      el.style.setProperty('font-size', '44px', 'important'); // font-size mobile
      el.style.setProperty('white-space', 'normal', 'important'); // permette il wrap del testo
    }
  }}
>La Carta dei Servizi</h1>

      <section className="mb-5 p-4 border rounded shadow-sm bg-light">
      <h2
  className="text-secondary mb-3"
  ref={el => {
    if (el && window.innerWidth <= 767) { // solo su mobile
      el.style.setProperty('font-size', '35px', 'important');
      el.style.setProperty('font-weight', '700', 'important');
    }
  }}
>Uno Strumento di Dialogo e Trasparenza</h2>
        <p>La Carta dei Servizi è uno strumento di dialogo e di trasparenza, atto a illustrare con chiarezza i servizi che l’Associazione IncontRho offre sul territorio e ad accogliere proposte e suggerimenti da Enti e Cittadini.</p>
        <p>La Carta dei Servizi consente agli Enti che collaborano con l’Associazione di apprendere chiaramente servizi e attività della stessa, espressamente dichiarati allo scopo di divulgare l’offerta e di renderla facilmente monitorabile.</p>
        <p>Inoltre, la carta dei servizi è una valida “cartina di tornasole” per la stessa Associazione, che potrà verificare costantemente l’adesione tra servizi annunciati e operato concreto.</p>
      </section>

      {/* Puoi aggiungere ulteriori sezioni o dettagli se la "carta dei servizi" include altri documenti o link */}
      <div className="text-center mt-4">
      <p className="servizi-final">
          Per maggiori dettagli o per consultare la versione completa della Carta dei Servizi, 
          contattaci o scarica il documento completo <br />(se disponibile).
        </p>
      </div>
    </div>
  );
};

export default LaCartaDeiServizi;