import React from 'react';
import './BeneficiFiscaliDonazioni.css'; // Assicurati che il percorso del CSS sia corretto

const BeneficiFiscaliDonazioni = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 text-primary">Benefici Fiscali delle Donazioni</h1>

      <section className="mb-5 p-4 border rounded shadow-sm bg-light">
        <h2 className="text-secondary mb-3">La Tua Donazione Ti Premia</h2>
        <p>Sostenere l'Associazione IncontRho non è solo un atto di generosità, ma può anche offrirti vantaggi fiscali in fase di dichiarazione dei redditi. Poiché siamo una APS (Associazione di Promozione Sociale) e Onlus, le tue donazioni sono deducibili o detraibili secondo la normativa vigente.</p>
      </section>

      <section className="mb-5 p-4 border rounded shadow-sm bg-light">
        <h3 className="text-primary mb-3">Deducibilità e Detraibilità</h3>
        <p>Le erogazioni liberali in denaro o in natura a favore delle Organizzazioni Non Lucrative di Utilità Sociale (ONLUS), come IncontRho, godono di specifici benefici fiscali per le persone fisiche, gli enti non commerciali e le imprese.</p>
        <ul>
          <li><strong>Per le Persone Fisiche:</strong>
            <ul>
              <li><strong>Detrazione:</strong> È possibile detrarre dall'imposta lorda un importo pari al 30% della donazione, fino ad un massimo di 30.000 euro (art. 83, comma 1 del D.Lgs. 117/2017 - Codice del Terzo Settore).</li>
              <li><strong>Deduzione:</strong> In alternativa, è possibile dedurre dal reddito complessivo le donazioni in denaro o in natura, nel limite del 10% del reddito complessivo dichiarato (art. 83, comma 2 del D.Lgs. 117/2017).</li>
            </ul>
          </li>
          <li><strong>Per gli Enti non Commerciali e Imprese:</strong>
            <ul>
              <li>È possibile dedurre dal reddito complessivo le donazioni in denaro o in natura, nel limite del 10% del reddito complessivo dichiarato (art. 83, comma 2 del D.Lgs. 117/2017).</li>
            </ul>
          </li>
        </ul>
        <p className="mt-3">È importante conservare la ricevuta del versamento (es. estratto conto bancario, ricevuta del bollettino postale) per poter fruire delle agevolazioni fiscali.</p>
      </section>

      <section className="mb-5 p-4 border rounded shadow-sm bg-light">
        <h3 className="text-primary mb-3">Il Tuo 5x1000</h3>
        <p>Il 5x1000 non è una donazione, ma una quota dell'IRPEF a cui lo Stato rinuncia per sostenere il mondo del Terzo Settore. A te non costa nulla.</p>
        <p>Per destinare il tuo 5x1000 a IncontRho, è sufficiente apporre la tua firma e indicare il nostro Codice Fiscale nel riquadro "Sostegno degli enti del Terzo Settore" nella tua dichiarazione dei redditi (Modello Unico, 730, Certificazione Unica).</p>
        <p><strong>Codice Fiscale IncontRho APS:</strong> 93529140159</p>
      </section>

      <div className="text-center mt-4">
      <p className="benefici-footer">Ti invitiamo a consultare il tuo consulente fiscale o a rivolgerti <br />agli uffici competenti per verificare le specifiche applicabili <br />alla tua situazione.</p>
      <p className="benefici-footer">Ogni donazione è un passo importante verso un futuro migliore per la salute mentale.</p>
      </div>
    </div>
  );
};

export default BeneficiFiscaliDonazioni;