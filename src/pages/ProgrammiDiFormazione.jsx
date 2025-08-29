import React from 'react';
import './ProgrammiDiFormazione.css'; // Assicurati che il percorso del CSS sia corretto

const ProgrammiDiFormazione = () => {
  const [contenuti, setContenuti] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   

    fetch('https://paginawebincontrho-back.onrender.com/api/pages/formazione')
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
      <h1 className="titolo-programmi">Programmi di Formazione</h1>


      <section className="mb-5 p-4 border rounded shadow-sm bg-light">
      <h2 className="titolo-corsi">Corsi e Percorsi di Apprendimento per la Salute Mentale</h2>
        <p>IncontRho offre e promuove programmi di formazione volti a sensibilizzare, informare e fornire strumenti pratici per affrontare il disagio psichico, sia per le famiglie e i caregiver, sia per la comunità in generale.</p>
        <p>Crediamo che la conoscenza sia un passo fondamentale per ridurre lo stigma e migliorare il supporto alle persone con difficoltà psicologiche.</p>
      </section>

      <section className="mb-5 p-4 border rounded shadow-sm bg-light">
      <h3 className="titolo-formazione-tempo-libero">Formazione e Tempo Libero</h3>
        <p>L’Associazione propone laboratori ricreativi e formativi aperti a tutti, gratuiti, allo scopo di insegnare e di apprendere nuove pratiche utili nella vita quotidiana. L’obiettivo di fondo è incentivare le relazioni benefiche tra cittadini, creando occasioni di integrazione per chi è in cura psicologica e/o psichiatrica.</p>
        <p>Alcuni dei laboratori che includono aspetti formativi sono:</p>
        <ul>
          <li><strong>Orticoltura:</strong> pratica nell’orto e lezioni teoriche.</li>
          <li><strong>Computer Corso Base:</strong> per imparare o perfezionare l'uso di computer e smartphone.</li>
          <li><strong>Laboratorio Alimentazione e Salute:</strong> con attività pratiche in cucina.</li>
          <li>Altre attività di cui informiamo di volta in volta (creazione candele artigianali, attività in rete con le altre associazioni rhodensi).</li>
        </ul>
        <p>La frequentazione ai Laboratori Formazione e Tempo Libero è gratuita.</p>
      </section>

      <section className="mb-5 p-4 border rounded shadow-sm bg-light">
      <h3 className="titolo-formazione-territorio">Formazione sul Territorio e per Familiari</h3>
        <ul>
          <li>Nel campo della formazione, partecipiamo alla realizzazione di seminari e conferenze sul tema del disagio psichico, beneficiando della preziosa assistenza di Ciessevi, Centro Servizi Volontariato.</li>
          <li>Proponiamo formazione e informazione sul tema ‘Amministrazione di Sostegno e Rete di Servizi’, e su altri temi di interesse per la famiglia gravata da disabilità e disagio psichico.</li>
          <li>Ci formiamo e informiamo su ruolo e azione degli psicofarmaci, sulla necessità della contenzione negli SPDC, sul futuro degli OPG, e su altri temi sanitari in collaborazione con URASAM, il referente regionale per le associazioni famiglie e volontari in psichiatria.</li>
        </ul>
      </section>

      <div className="text-center mt-4">
      <p className="programmi-final">
    Per informazioni sui prossimi programmi di formazione <br />o per proporre nuove iniziative, contattaci.
  </p>
      </div>
    </div>
  );
};

export default ProgrammiDiFormazione;