import React, { useState, useEffect } from 'react';
import './UniscitiAlNostroAttivismo.css'; // Assicurati che il percorso del CSS sia corretto

const UniscitiAlNostroAttivismo = () => {
  const [contenuti, setContenuti] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://paginawebincontrho-back.onrender.com/api/pages/attivismo')
      .then((res) => {
        if (!res.ok) throw new Error('Errore nella risposta del server');
        return res.json();
      })
      .then((data) => {
        setContenuti(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Impossibile caricare i contenuti.');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Caricamento in corso...</p>;
  if (error) return <p>{error}</p>;
  
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 text-primary">Unisciti al Nostro Attivismo</h1>

      <section className="mb-5 p-4 border rounded shadow-sm bg-light">
        <h2 className="text-secondary mb-3">La Nostra Lotta Contro lo Stigma e il Pregiudizio</h2>
        <p>IncontRho è in prima linea per combattere lo stigma e il pregiudizio che purtroppo connota il mondo della salute mentale. Chi ha problemi di ordine psicologico e/o psichiatrico tende a isolarsi e a rendersi vulnerabile, perché ciò che gli succede è difficile da capire. Il nostro attivismo mira a promuovere la comprensione e l’accoglienza verso chi soffre di disagio interiore.</p>
      </section>

      <section className="mb-5 p-4 border rounded shadow-sm bg-light">
        <h3 className="text-primary mb-3">Campagne di Sensibilizzazione e Informazione</h3>
        <p>Realizziamo e partecipiamo attivamente a campagne di sensibilizzazione e informazione in diversi contesti:</p>
        <ul>
          <li>Presso <strong>Scuole Superiori</strong>, per parlare di salute mentale, come riconoscere il disagio, a chi rivolgersi. Gli incontri sono condotti nelle scuole in collaborazione con la psicologa e con l’assistente sociale dell’equipe TAG (Team Accesso Giovani) interna al dipartimento di psichiatria territoriale.</li>
          <li>Nelle <strong>Comuni</strong> e in <strong>Regione</strong>, contribuendo a diffondere una cultura della salute mentale più aperta e informata.</li>
          <li>In <strong>piazze e convegni</strong> e altri luoghi dove si esprime la società civile, per raggiungere un pubblico ampio.</li>
        </ul>
      </section>

      <section className="mb-5 p-4 border rounded shadow-sm bg-light">
        <h3 className="text-primary mb-3">Partecipazione e Lavoro di Rete</h3>
        <p>Il nostro attivismo si esprime anche attraverso il costante lavoro di rete e la partecipazione a organismi chiave:</p>
        <ul>
          <li>Partecipiamo agli <strong>Organismi di Coordinamento per la Salute Mentale</strong> nell'ASL MI 1 e ai <strong>Tavoli Distrettuali per la Salute Mentale</strong>.</li>
          <li>Collaboriamo con i <strong>Servizi Sociali del Rhodense</strong>, i <strong>Consultori ASL</strong>, e le unità operative di Psichiatria del territorio.</li>
          <li>Siamo attivi in organismi di livello regionale come <strong>URASAM</strong> (Unione Regionale Associazioni per la Salute Mentale) e nazionale come <strong>UNASAM</strong> (Unione Nazionale delle Associazioni per la Salute Mentale).</li>
          <li>Animiamo la rete di cittadinanza attiva <strong>F@re Diversamente</strong>, di cui siamo fondatori, promuovendo solidarietà e attività gratuite per prevenire l’isolamento e creare occasioni di amicizia tra cittadini.</li>
          <li>Partecipiamo a tavoli di coordinamento istituzionale sui nuovi progetti e sulla situazione esistente, come quelli presso ASST e SerCoP, al fine di rappresentare il punto di vista di utenti, famigliari e volontari.</li>
        </ul>
      </section>

      <div className="text-center mt-4">
      <p className="attivismo-footer">Unisciti al nostro impegno per un cambiamento culturale profondo. Ogni voce è importante per costruire una società più inclusiva <br /> e informata sulla salute mentale.</p>
      </div>
    </div>
  );
};

export default UniscitiAlNostroAttivismo;