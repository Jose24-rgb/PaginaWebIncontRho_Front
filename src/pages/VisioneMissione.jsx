import React from 'react';
import './VisioneMissione.css'; // Assicurati che il percorso del CSS sia corretto

const VisioneMissione = () => {
  
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 text-primary titolo-contatti">
  La Nostra Visione e Missione
</h1>

      <section className="mb-5 p-4 border rounded shadow-sm bg-light">
        <h2 className="text-secondary mb-3">Principi Ispiratori</h2>
        <p>L’Associazione IncontRho nasce nel 2001 per sostenere chi, nella vita, ha incontrato il dolore della mente in tutte le sue forme, disturbi passeggeri o patologie psichiatriche. Il sostegno è rivolto alle persone che ne soffrono e ai loro famigliari.</p>
        <p>IncontRho è un’associazione composta da: famiglie coinvolte nell’assistenza al disagio mentale; da chi è personalmente in cura; da volontari e cittadini di buona volontà; da formatori e specialisti.</p>
        <p>L’obiettivo dell’associazione è quello di sostenere persone e famiglie gravate dalla malattia mentale. IncontRho incoraggia le persone in cura e i cittadini più sensibili a frequentarsi e a trascorrere insieme momenti di svago e di crescita culturale.</p>
        <p>IncontRho, come incontro. Perché siamo costantemente aperti al dialogo, all’incontro autentico, all’amicizia.</p>
        <p>L’associazione IncontRho Onlus difende i principi introdotti nella legislazione italiana dalla legge 180/1978, la ‘Legge Basaglia’, che consegna il tema della Salute Mentale alle cure e alla prevenzione sul Territorio.</p>
        <p>Come scritto nella “Dichiarazione sulla Salute Mentale per l’Europa” (Conferenza Ministeriale Europea dell’OMS sulla Salute Mentale, gennaio 2005): **LA SALUTE MENTALE E IL BENESSERE SONO FONDAMENTALI PER LA QUALITA’ DELLA VITA.**</p>
        <p><strong> La promozione e la tutela della salute mentale migliorano la qualità della vita e il benessere di tutta la popolazione, dando luogo a coesione sociale, pace e produttività.</strong> </p>
      </section>

      <section className="mb-5 p-4 border rounded shadow-sm bg-light">
        <h2 className="text-secondary mb-3">I Nostri Obiettivi</h2>
        <ul>
          <li>
           Favorire <strong>il benessere</strong> delle persone con disagio psichico e/o psicologico, attraverso l’ascolto e l’accoglienza. La prima necessità in chi soffre è trovare ascolto e affidabilità per condividere le sue preoccupazioni e per trovare insieme una strada verso il benessere. IncontRho propone attività ricreative per le persone in cura, per le loro famiglie, per i cittadini amici dell’associazione.
           IncontRho offre, a chiunque ne abbia bisogno, un servizio di ascolto psicologico gratuito, grazie all’impegno di psicologhe e consulenti famigliari volontarie; offre inoltre consulenza gratuita sul tema dell’Amministratore di Sostegno, a tutela delle persone fragili e delle loro famiglie.
          </li>
          <li>
            Sostenere <strong>i percorsi di guarigione</strong> delle persone affette da disturbi psichici e/o psicologici: attraverso la nostra disponibilità e competenza nel fornire indicazioni concrete offriamo servizi di accompagnamento alla cura. Ciò è possibile grazie al nostro costante lavorare in rete con gli Enti erogatori di Servizi Sociali e Sanitari, quali il Dipartimento di Salute Mentale, i Servizi Sociali dei Comuni del Rhodense, la ATS Città Metropolitana di Milano.
          </li>
          <li>
            Sostenere <strong>la tenacia dei famigliari</strong> delle persone affette da disagio patologico, consapevoli delle difficoltà di tanti padri, madri, figli, fratelli, nel convivere con chi soffre psichicamente. IncontRho è un’associazione nata dal volere di un gruppo di famigliari.
          </li>
          <li>
            Combattere <strong>lo stigma e il pregiudizio</strong> che purtroppo connota il mondo della salute mentale. Infatti, chi ha problemi di ordine psicologico e/o psichiatrico tende a isolarsi e a rendersi vulnerabile, perché ciò che gli succede è difficile da capire. Attraverso campagne di sensibilizzazione (presso Scuole, Comuni, Regione, piazze e convegni e altri luoghi dove si esprime la società civile) promuoviamo <strong>la comprensione e l’accoglienza</strong> verso chi soffre di disagio interiore.
          </li>
        </ul>
      </section>

      <div className="text-center mt-4">
  <p className="visione-final">La nostra visione è un futuro in cui la salute mentale sia riconosciuta e supportata in ogni aspetto della vita.</p>
</div>

    </div>
  );
};

export default VisioneMissione;