import React from 'react';
import './Trasparenza.css';

const Trasparenza = () => {
  const [contenuti, setContenuti] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://paginawebincontrho-back.onrender.com/api/pages/trasparenza')
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
      <h1 className="text-center mb-4 text-primary titolo-trasparenza">
        Trasparenza e Governance
      </h1>

      <section className="mb-5 p-4 border rounded shadow-sm bg-light">
        <h2 className="text-secondary mb-3">I Nostri Portatori di Interesse</h2>
        <p>L’associazione IncontRho è punto di incontro tra chi opera per attivare e strutturare le attività associative e chi vi affluisce tra i cittadini del territorio.</p>
      </section>

      <section className="mb-5 p-4 border rounded shadow-sm bg-light">
        <h2 className="text-secondary mb-3">Organismi Associativi</h2>
        <p><strong>Assemblea dei Soci:</strong> L’Assemblea è il massimo organo deliberante dell’Associazione.</p>
        <p><strong>Consiglio Direttivo:</strong> Composto da un massimo di 11 membri che durano in carica 3 anni:</p>
        <ul>
          <li>Chiara Vassallo</li>
          <li>Luisa Mariotti</li>
          <li>Alberto Savoia</li>
          <li>Michela La Pica</li>
          <li>Patrizia Levrè</li>
          <li>Cristina Proietti</li>
          <li>Barbara Bari</li>
          <li>Emanuela Mandelli</li>
          <li>Amedeo Montiglio</li>
          <li>Franco De Leo</li>
          <li>Rosaria Viola</li>
        </ul>
        <p><strong>Il Consiglio Direttivo ha nominato:</strong></p>
        <ul>
          <li>Presidente: Chiara Vassallo</li>
          <li>Vicepresidente: Luisa Mariotti</li>
          <li>Segretario e Vicepresidente: Franco De Leo</li>
          <li>Tesoriere e Vicesegretario: Amedeo Montiglio</li>
        </ul>
        <p><strong>Il Comitato di Presidenza:</strong> È composto dal presidente, dai vicepresidenti, dal segretario e dal tesoriere.</p>
        <p><strong>I Soci:</strong> I Soci sono tutti coloro che aderiscono all’associazione.</p>
      </section>

      <section className="mb-5 p-4 border rounded shadow-sm bg-light">
        <h2 className="text-secondary mb-3">Soggetti che fruiscono dei nostri servizi</h2>
        <ul>
          <li>Utenti dei servizi di psichiatria del DSM del Rhodense</li>
          <li>Persone affette da disagio psicologico accolte presso lo Sportello</li>
          <li>Persone/famiglie che necessitano supporto sull’Amministratore di Sostegno</li>
          <li>Operatori del Dipartimento di Salute Mentale che collaborano con i volontari</li>
        </ul>
      </section>

      <div className="text-center mt-4">
        <p className="trasparenza-final">
          Crediamo in una governance trasparente, partecipata e vicina <br />ai bisogni del territorio.
        </p>
      </div>
    </div>
  );
};

export default Trasparenza;


