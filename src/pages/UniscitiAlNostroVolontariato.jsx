import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link per i riferimenti interni
import './UniscitiAlNostroVolontariato.css';



const UniscitiAlNostroVolontariato = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 text-primary">Unisciti al Nostro Volontariato</h1>

      <section className="mb-5 p-4 border rounded shadow-sm bg-light">
        <h2 className="text-secondary mb-3">Fai la Differenza con il Tuo Tempo e la Tua Sensibilità</h2>
        <p>Il volontariato è il cuore pulsante di IncontRho. Il tuo tempo, la tua sensibilità ed esperienza possono diventare un aiuto prezioso per la nostra associazione e i nostri familiari. Cerchiamo persone di buona volontà, aperte al dialogo e all'amicizia, che vogliano contribuire attivamente al benessere delle persone con disagio psichico.</p>
      </section>

      <section className="mb-5 p-4 border rounded shadow-sm bg-light">
        <h3 className="text-primary mb-3">Come Puoi Contribuire</h3>
        <p>Le nostre attività e i nostri laboratori ti offrono un ventaglio di scelta ampio in cui applicare le tue attitudini di volontario. Puoi impegnarti in diverse aree:</p>
        <ul>
          <li><strong>Sportello Accoglienza e Primo Ascolto:</strong> per offrire supporto e consulenza (se sei un volontario esperto o psicologo/consulente familiare).</li>
          <li><strong>Laboratori Ricreativi e Formativi:</strong>
            <ul>
              <li>Gruppo Musicale Poetico “Canta che ti passa”</li>
              <li>Orticoltura “La Terra l’è bassa”</li>
              <li>Laboratorio Artistico - Espressivo</li>
              <li>Corso base Computer e Smartphone</li>
              <li>Laboratorio Alimentazione e Salute</li>
              <li>Creazione candele artigianali, pittura su tela, pittura su vetro, realizzazione di scatolette in legno e altre attività.</li>
            </ul>
            In queste attività, il tuo ruolo può essere quello di affiancare gli utenti, insegnare una competenza, o semplicemente partecipare e favorire la socializzazione.
          </li>
          <li><strong>Attività di Socializzazione:</strong> accompagnare alle "Serate Bowling", partecipare alle uscite per le partite o concerti a San Siro.</li>
          <li><strong>Attività di Supporto e Inclusione Sociale:</strong>
            <ul>
              <li>Distribuzione di opuscoli e locandine.</li>
              <li>Invio della corrispondenza ai soci.</li>
              <li>Attività di promozione presso feste ed eventi (occasioni di ‘palestra’ verso l’inserimento lavorativo per gli utenti).</li>
              <li>Offrire passaggi in auto verso i servizi ai pazienti e/o ai famigliari meno autonomi.</li>
              <li>Presenza e mediazione, dove necessario, tra il medico e il paziente presso i vari presidi residenziali o ambulatoriali del dipartimento di psichiatria.</li>
            </ul>
          </li>
          <li><strong>Supporto alla Gestione Associativa:</strong> aiuto nell'organizzazione di riunioni, segreteria, comunicazione.</li>
        </ul>
      </section>

      <section className="mb-5 p-4 border rounded shadow-sm bg-light">
        <h3 className="text-primary mb-3">Come Diventare Volontario per la Salute Mentale</h3>
        <p>Se sei interessato/a a dedicare parte del tuo tempo e delle tue energie alla nostra causa, ti invitiamo a contattarci. Puoi frequentarci per un certo periodo per conoscere quello che facciamo, senza impegno.</p>
        <p className="mt-3"><strong>Contattaci per saperne di più:</strong></p>
        <p>Email: infoincontrho@gmail.com</p>
        <p>Oppure ai numeri dell'Organismo Direttivo in <Link to="/accoglienza-e-ascolto">Accoglienza e Ascolto</Link>.</p>
      </section>

      <div className="text-center mt-4">
      <p className="volontariato-footer">Unisciti a noi e contribuisci a costruire un mondo più accogliente <br /> e inclusivo per tutti!</p>
      </div>
    </div>
  );
};

export default UniscitiAlNostroVolontariato;