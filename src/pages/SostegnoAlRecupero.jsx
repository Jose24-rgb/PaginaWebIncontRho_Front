import React from 'react';
import './SostegnoAlRecupero.css'; // Assicurati che il percorso del CSS sia corretto

const SostegnoAlRecupero = () => {
  const [contenuti, setContenuti] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    

    fetch('https://paginawebincontrho-back.onrender.com/api/pages/sostegno')
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
    <div className="container my-5 sostegno-al-recupero">
     <h1 className="sostegno-al-recupero-title text-center mb-4">
  Sostegno al Recupero
</h1>

      <section className="mb-5 p-4 border rounded shadow-sm bg-light">
        <h2 className="text-secondary mb-3">Percorsi di Reintegrazione e Autonomia</h2>
        <p>IncontRho supporta attivamente le persone con disagio psichico nel loro percorso di recupero e reintegrazione sociale. Il nostro obiettivo è favorire lo sviluppo delle autonomie personali e migliorare la qualità della vita, promuovendo l'inclusione e la partecipazione attiva nella comunità.</p>
      </section>

      <section className="mb-5 p-4 border rounded shadow-sm bg-light">
        <h3 className="text-primary mb-3">Sostenere i Percorsi di Guarigione</h3>
        <p>Sosteniamo i percorsi di guarigione delle persone affette da disturbi psichici e/o psicologici: attraverso la nostra disponibilità e competenza nel fornire indicazioni concrete offriamo servizi di accompagnamento alla cura. Ciò è possibile grazie al nostro costante lavorare in rete con gli Enti erogatori di Servizi Sociali e Sanitari, quali il Dipartimento di Salute Mentale, i Servizi Sociali dei Comuni del Rhodense, la ASL Milano 1.</p>
        <p>Inoltre, offriamo presenza e mediazione, dove necessario, tra il medico e il paziente presso i vari presidi residenziali o ambulatoriali del dipartimento di psichiatria.</p>
      </section>

      <section className="mb-5 p-4 border rounded shadow-sm bg-light">
        <h3 className="text-primary mb-3">Opportunità di Inclusione Sociale</h3>
        <p>Organizziamo presso la nostra sede, per i pazienti di tutte le età, attività mattutine e pomeridiane a cadenza settimanale, gratuite e aperte a tutti, sia per chi è in cura psichiatrica sia per chi non lo è.</p>
        <p>Offriamo agli utenti dell’associazione l’opportunità di cimentarsi con piccole attività, come la distribuzione di opuscoli e locandine, l’invio della corrispondenza ai soci, l’attività di promozione presso feste ed eventi. Tutte occasione di ‘palestra’ verso l’inserimento lavorativo.</p>
        <p>Organizziamo momenti per il tempo libero, dal biliardino alla lettura dei giornali o il gioco a carte. Organizziamo gite e momenti di svago, nella natura o per conoscere le belle città d’Italia. I momenti ricreativi sono aperti a tutti, pazienti, famigliari, volontari, cittadini interessati.</p>
      </section>

      <div className="text-center mt-4">
      <p className="sostegno-al-recupero-footer">
    Crediamo nel potenziale di ogni individuo e lavoriamo per un futuro di maggiore autonomia e benessere.
  </p>
      </div>
    </div>
  );
};

export default SostegnoAlRecupero;