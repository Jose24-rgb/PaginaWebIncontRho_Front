import React, { useState, useEffect } from 'react';
import '../App.css'; // Assicurati che il percorso del CSS sia corretto

const PrevenireEProteggere = () => {
  const [contenuti, setContenuti] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://paginawebincontrho-back.onrender.com/api/pages/prevenire-proteggere')
      .then((res) => {
        if (!res.ok) throw new Error('Errore nel server');
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
      <h1 className="text-center mb-4 text-primary">Prevenire è Proteggere</h1>

      <section className="mb-5 p-4 border rounded shadow-sm bg-light">
        <h2 className="text-secondary mb-3">Iniziative per la Promozione del Benessere Mentale</h2>
        <p>La prevenzione è un pilastro fondamentale della nostra missione. IncontRho si impegna a promuovere la salute mentale e a prevenire l'insorgenza di disagio psichico attraverso attività di sensibilizzazione e informazione rivolte a tutta la comunità.</p>
        <p>Crediamo che un ambiente informato e supportivo possa fare la differenza nel ridurre i fattori di rischio e nel favorire il benessere psicologico.</p>
      </section>

      <section className="mb-5 p-4 border rounded shadow-sm bg-light">
        <h3 className="text-primary mb-3">Campagne di Sensibilizzazione e Informazione</h3>
        <p>Al fine di prevenire il disagio psichico in tutte le persone:</p>
        <ul>
          <li>Offriamo a tutti i cittadini un servizio gratuito di orientamento psicologico e di consulenza famigliare.</li>
          <li>Entriamo nelle scuole superiori per parlare di salute mentale, come riconoscere il disagio, a chi rivolgersi. Gli incontri sono condotti nelle scuole in collaborazione con la psicologa e con l’assistente sociale dell’equipe TAG (Team Accesso Giovani) interna al dipartimento di psichiatria territoriale.</li>
          <li>Animiamo concretamente la rete di cittadinanza attiva F@re Diversamente, di cui Associazione IncontRho è fondatrice accanto alle associazioni Sesamo di Rho e Nazaret di Arese, in sinergia con il dipartimento di psichiatria e con il progetto Oltre i perimetri. La rete promuove solidarietà e attività gratuite per tutti, per prevenire l’isolamento e per creare occasioni di amicizia tra cittadini.</li>
          <li>Attraverso campagne di sensibilizzazione (presso Scuole, Comuni, Regione, piazze e convegni e altri luoghi dove si esprime la società civile) promuoviamo la comprensione e l’accoglienza verso chi soffre di disagio interiore, combattendo lo stigma e il pregiudizio.</li>
        </ul>
      </section>

      <div className="text-center mt-4">
        <p>Unisciti a noi per costruire una comunità più consapevole e attenta alla salute mentale!</p>
      </div>
    </div>
  );
};

export default PrevenireEProteggere;