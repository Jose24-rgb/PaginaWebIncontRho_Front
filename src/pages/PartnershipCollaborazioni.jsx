import React from 'react';
import './PartnershipCollaborazioni.css'; // Assicurati che il percorso del CSS sia corretto

const PartnershipCollaborazioni = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 text-primary">Partnership e Collaborazioni</h1>

      <section className="mb-5 p-4 border rounded shadow-sm bg-light">
        <h2 className="text-secondary mb-3">Costruiamo Insieme il Futuro della Salute Mentale</h2>
        <p>IncontRho crede fermamente nel valore della rete e della collaborazione per massimizzare l'impatto delle proprie azioni. Lavoriamo attivamente con enti pubblici, istituzioni, altre associazioni e il settore privato per promuovere la salute mentale e il benessere sociale.</p>
      </section>

      <section className="mb-5 p-4 border rounded shadow-sm bg-light">
        <h3 className="text-primary mb-3">Le Nostre Collaborazioni sul Territorio</h3>
        <p>L’Associazione IncontRho opera in stretta collaborazione con l’Unità Operativa di Psichiatria del territorio, i presidi socio sanitari di Rho e Settimo Milanese e i seguenti enti:</p>
        <ul>
          <li>Organismi di Coordinamento per la Salute Mentale nell'ASL MI 1 e Tavoli Distrettuali per la Salute Mentale.</li>
          <li>Servizi Sociali dei Comuni del Rhodense.</li>
          <li>Consultori ASL.</li>
          <li>Unità Operativa di Psichiatria di Rho e Settimo Mil.se, inclusi Centro Psico Sociale, Centri Diurni e Comunità Alloggio.</li>
          <li>Organismi di livello regionale come URASAM (Unione Regionale Associazioni per la Salute Mentale) e UNASAM (Unione Nazionale delle Associazioni per la Salute Mentale).</li>
          <li>Ciessevi, Centro Servizi Volontariato, per la realizzazione di seminari e conferenze.</li>
          <li>La Rete del F@re Diversamente, che coinvolge numerose associazioni e cooperative sociali del Rhodense, di cui siamo fondatori insieme ad associazioni come Sesamo di Rho e Nazaret di Arese.</li>
        </ul>
        <p>Collaboriamo attivamente con gli enti socio sanitari locali, soprattutto con il Dipartimento di Salute Mentale che ci invia costantemente pazienti idonei a frequentare le nostre attività.</p>
        <p>Partecipiamo a tavoli di coordinamento istituzionale sui nuovi progetti e sulla situazione esistente, come quelli presso ASST e SerCoP, al fine di rappresentare il punto di vista di utenti, famigliari e volontari.</p>
      </section>

      <section className="mb-5 p-4 border rounded shadow-sm bg-light">
        <h3 className="text-primary mb-3">Invito alla Collaborazione</h3>
        <p>Se la tua organizzazione, azienda o ente desidera esplorare opportunità di partnership o collaborazione con IncontRho per progetti legati alla salute mentale e al benessere della comunità, ti invitiamo a contattarci. Siamo sempre aperti a nuove sinergie per ampliare il nostro impatto.</p>
      </section>

      <div className="text-center mt-4">
      <p className="partnership-footer">Insieme possiamo costruire una rete più forte e inclusiva <br />a sostegno della salute mentale.</p>
      <p className="partnership-footer">Contattaci per discutere le possibili sinergie: infoincontrho@gmail.com</p>
      </div>
    </div>
  );
};

export default PartnershipCollaborazioni;