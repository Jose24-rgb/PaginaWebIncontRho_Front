import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link per i riferimenti interni
import './IlTuoSupportoPerIncontRho.css'; // Assicurati che il percorso del CSS sia corretto

const IlTuoSupportoPerIncontRho = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://paginawebincontrho-back.onrender.com/api/pages/supporto')
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error(err));
  }, []);

  if (!data) return <p>Caricamento...</p>;
  
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 text-primary">Il Tuo Supporto per IncontRho</h1>

      <section className="mb-5 p-4 border rounded shadow-sm bg-light">
        <h2 className="text-secondary mb-3">Come Sostenerci</h2>
        <p>Il tuo contributo è fondamentale per permetterci di continuare a sostenere chi ha incontrato il dolore della mente e le loro famiglie. Ogni gesto di supporto ci aiuta a portare avanti le nostre attività e i nostri progetti sul territorio.</p>

        <h3 className="text-primary mt-4 mb-2"><strong>Donazioni Economiche </strong></h3>
        <p>Puoi effettuare la tua donazione attraverso bonifico bancario intestato a IncontRho APS:</p>
        <p><strong>Banca:</strong> BPM</p>
        <p><strong>IBAN:</strong> IT70 P0503 43244 00000 00015</p>

        <h3 className="text-primary mt-4 mb-2">Il Tuo 5x1000</h3>
        <p>Puoi sostenerci anche attraverso il tuo 5x1000: è sufficiente la tua firma e il nostro codice fiscale nel riquadro “Sostegno degli enti del Terzo Settore” che trovi sulla tua dichiarazione dei redditi.</p>
        <p><strong>Codice Fiscale IncontRho APS:</strong> 93529140159</p>
        <p>Le donazioni a favore di IncontRho sono fiscalmente deducibili o detraibili in fase di dichiarazione dei redditi. Per maggiori dettagli, consulta la nostra sezione sui <Link to="/benefici-fiscali-delle-donazioni">Benefici Fiscali delle Donazioni</Link>.</p>
      </section>

      <section className="mb-5 p-4 border rounded shadow-sm bg-light">
        <h3 className="text-primary mb-3">Offri il Tuo Tempo: Diventa Volontario</h3>
        <p>Il tuo tempo, la tua sensibilità ed esperienza possono diventare un aiuto prezioso per la nostra associazione e i nostri familiari. Le nostre attività e i nostri laboratori ti offrono un ventaglio di scelta ampio in cui applicare le tue attitudini di volontario.</p>
        <p>Puoi frequentarci per un certo periodo per conoscere quello che facciamo, senza impegno. Per saperne di più, visita la pagina <Link to="/unisciti-al-nostro-volontariato">Unisciti al Nostro Volontariato</Link>.</p>
      </section>

      <div className="text-center mt-4">
      <p className="sostegno-footer">
    Grazie per il tuo prezioso sostegno. Insieme possiamo fare <br /> la differenza!
  </p>
      </div>
    </div>
  );
};

export default IlTuoSupportoPerIncontRho;