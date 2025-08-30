import React, { useState, useEffect } from 'react';
import './ProgettiEAttivita.css'; // Assicurati che il percorso sia corretto

const ProgettiEAttivita = () => {
  const [contenuti, setContenuti] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   

    fetch('https://paginawebincontrho-back.onrender.com/api/pages/progetti-attivita')
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
      <h1 className="progetti-title">Progetti e Attività</h1>


      <section className="mb-5 p-4 border rounded shadow-sm bg-light">
        <h3 className="progetti-subtitle">Le Nostre Iniziative per la Comunità</h3>
        <p>
          L’Associazione IncontRho è attiva sul territorio rhodense da 20 anni nel campo della salute mentale, in stretta collaborazione con l’Unità Operativa di Psichiatria, che opera sul territorio con i due presidi socio sanitari di Rho e di Settimo Milanese.
        </p>
      </section>

      <section className="mb-5 p-4 border rounded shadow-sm bg-light">
      <h3 className="progetti-subtitle">Le Proposte alla Famiglia e alla Persona</h3>
        <p><strong>Al fine di migliorare la quotidianità delle famiglie che hanno in casa un malato psichico:</strong></p>
        <ul>
          <li>
            Proponiamo gruppi di Auto Mutuo Aiuto, per un confronto tra famigliari in un ambiente intimo e protetto, guidati da una consulente famigliare.
          </li>
          <li>
            Offriamo consulenza sui servizi territoriali, sulle pratiche burocratiche, sull’amministrazione di sostegno, sull’accesso al lavoro protetto.
          </li>
          <li>
            Offriamo colloqui psicologici e di consulenza famigliare attraverso incontri con specialisti volontari, che offrono da due a cinque incontri gratuiti per un intervento di orientamento psicologico.
          </li>
        </ul>
         </section>
        
        <section className="mb-5 p-4 border rounded shadow-sm bg-light">
        <h3 className="progetti-subtitle">Formazione e Tempo Libero</h3>
        <p>
          L’Associazione propone laboratori ricreativi e formativi aperti a tutti, gratuiti, allo scopo di insegnare e di apprendere nuove pratiche utili nella vita quotidiana. L’obiettivo di fondo è incentivare le relazioni benefiche tra cittadini, creando occasioni di integrazione per chi è in cura psicologica e/o psichiatrica.
        </p>
        <p>
          I laboratori attivi attualmente presso la nostra sede (o presso la sede ex scuola Sante Zennaro di Terrazzano (RHO), punto di riferimento di tutti i soci dei 10 comuni del Rhodense) sono i seguenti:
        </p>
        <ul>
          <li>
            Gruppo Musicale Poetico <strong>Kanta Chetipassa</strong> con strumenti e voci. Ogni martedì, ore 17.30-19.30 in piazza Chiesa 20 a Terrazzano di Rho. Referente: Alberto (339 6453771).
          </li>
          <li>
            Arte e Orticoltura <strong>La Terra l’è bassa</strong>: pratica nell’orto e lezioni teoriche. Ogni mese da marzo a ottobre presso l’orto sociale di IncontRho in via Montegrappa ad Arese. Referente: Francesco (338 4709158).
          </li>
          <li>
            Gruppo per hobby e socialità <strong>Amicizia e Creatività</strong>: l’arte appresa e condivisa. Ogni giovedì, ore 16:00-18:30 in piazza Chiesa 20 a Terrazzano di Rho. Referente: Luisa (348 2742439).
          </li>
          <li>
            <strong>Computer Corso Base</strong>: chi non sa, impara; chi sa già, si perfeziona. Corso per computer e smartphone.
          </li>
          <li>
            <strong>Laboratorio Alimentazione e Salute</strong>: con attività pratiche in cucina.
          </li>
          <li>
            Creazione candele artigianali, pittura su tela, pittura su vetro, realizzazione di scatolette in legno e tante altre attività a seconda delle richieste degli utenti e delle competenze e disponibilità dei volontari.
          </li>
        </ul>
        <p>
          La frequentazione ai Laboratori Formazione e Tempo Libero è gratuita. L’iscrizione all’Associazione da parte degli utenti è gradita e facoltativa.
        </p>
         </section>
       
       <section className="mb-5 p-4 border rounded shadow-sm bg-light">
       <h3 className="progetti-subtitle">Momenti per il Tempo Libero e Socializzazione</h3>
        <p>
          Organizziamo momenti per il tempo libero, dal biliardino alla lettura dei giornali o il gioco a carte. Organizziamo gite e momenti di svago, nella natura o per conoscere le belle città d’Italia. I momenti ricreativi sono aperti a tutti, pazienti, famigliari, volontari, cittadini interessati.
        </p>
        <ul>
          <li>
            <strong>Serate Bowling:</strong> Una volta al mese alle ore 21:00 in Via Peloritana 58 a Garbagnate Milanese. Ingresso ridotto per IncontRho. Referente: Patrizia (339 4945681).
          </li>
          <li>
            <strong>“Andiamo insieme a San Siro”:</strong> Una volta al mese, grazie ai biglietti omaggio del Comune di Milano, per le partite di Milan e Inter o per qualche concerto nella stagione estiva. Referente Accompagnatore: Amedeo (333 2258026).
          </li>
        </ul>
      </section>

      <section className="mb-5 p-4 border rounded shadow-sm bg-light">
      <h3 className="progetti-subtitle">Le Proposte al Territorio: In Rete per Fare Meglio</h3>
        <p><strong>Nell’ambito pubblico e istituzionale, l’Associazione IncontRho:</strong></p>
        <ul>
          <li>Partecipa agli Organismi di Coordinamento per la Salute Mentale nell'ASL MI 1 e ai Tavoli Distrettuali per la Salute Mentale.</li>
          <li>Collabora con i Servizi Sociali del Rhodense; con i Consultori ASL; con l’Unità Operativa di Psichiatria di Rho e Settimo Mil.se, quindi con il Centro Psico Sociale, con i Centri Diurni e con le Comunità Alloggio.</li>
          <li>Partecipa a organismi di livello regionale come URASAM (Unione Regionale Associazioni per la Salute Mentale) e UNASAM (Unione Nazionale delle Associazioni per la Salute Mentale).</li>
          <li>Nel campo della formazione, partecipa alla realizzazione di seminari e conferenze sul tema del disagio psichico, beneficiando della preziosa assistenza di Ciessevi, Centro Servizi Volontariato.</li>
          <li>Incoraggia e promuove la rete di servizi sul territorio, lavorando su progetti quali La Rete del F@re Diversamente, che coinvolge numerose associazioni e cooperative sociali del Rhodense.</li>
          <li>Propone formazione e informazione sul tema ‘Amministrazione di Sostegno e Rete di Servizi’, e su altri temi di interesse per la famiglia gravata da disabilità e disagio psichico.</li>
        </ul>
         </section>
          
        <section className="mb-5 p-4 border rounded shadow-sm bg-light">
        <h3 className="progetti-subtitle">Collaborazione con i Servizi Socio Sanitari</h3>
        <p> <strong>Al fine di migliorare l’approccio alle cure psichiatriche presso i servizi socio sanitari:</strong></p>
        <ul>
          <li>Collaboriamo attivamente con gli enti socio sanitari locali, soprattutto con il Dipartimento di Salute Mentale che ci invia costantemente – previa riunioni e incontri di presentazione - pazienti idonei a frequentare le nostre attività.</li>
          <li>Partecipiamo a tavoli di coordinamento istituzionale sui nuovi progetti e sulla situazione esistente, come quelli presso ASST e SerCoP, al fine di rappresentare il punto di vista di utenti, famigliari e volontari.</li>
          <li>Ci formiamo e informiamo su ruolo e azione degli psicofarmaci, sulla necessità della contenzione negli SPDC, sul futuro degli OPG, e su altri temi sanitari in collaborazione con URASAM, il referente regionale per le associazioni famiglie e volontari in psichiatria.</li>
          <li>Offriamo presenza e mediazione, dove necessario, tra il medico e il paziente presso i vari presidi residenziali o ambulatoriali del dipartimento di psichiatria.</li>
          <li>Offriamo passaggi in auto verso i servizi ai pazienti e/o ai famigliari meno autonomi.</li>
        </ul>
      </section>

      <section className="mb-5 p-4 border rounded shadow-sm bg-light">
      <h3 className="progetti-subtitle">Opportunità di Inclusione Sociale</h3>
        <p><strong>Al fine di creare occasioni di inclusione sociale per i malati psichici:</strong></p>
        <ul>
          <li>Organizziamo presso la nostra sede, per i pazienti di tutte le età, attività mattutine e pomeridiane a cadenza settimanale, gratuite e aperte a tutti, sia per chi è in cura psichiatrica sia per chi non lo è.</li>
          <li>Offriamo agli utenti dell’associazione l’opportunità di cimentarsi con piccole attività, come la distribuzione di opuscoli e locandine, l’invio della corrispondenza ai soci, l’attività di promozione presso feste ed eventi. Tutte occasione di ‘palestra’ verso l’inserimento lavorativo.</li>
        </ul>  
          <p>
            La nostra Associazione è supportata dal radicamento nel territorio e dal sostegno di amici sensibili al tema della salute mentale, inclusi specialisti, operatori sanitari e cittadini attivi.
          </p>
          <p>La disponibilità di una sede aperta tutto il giorno ci permetterebbe di:</p>
          <ul className="text-start">
            <li>Adeguare meglio i corsi alle necessità di tempo dei volontari.</li>
            <li>Ricevere con più agio famigliari, operatori, cittadini interessati ad avere informazioni.</li>
            <li>Organizzare con più elasticità le riunioni di Direttivo e di Segreteria.</li>
            <li>Accogliere ogni giorno chi – tra pazienti o famigliari – ha necessità di allontanarsi per qualche ora dalle mura domestiche per trovare ascolto, accoglienza, o più semplicemente svago e amicizia.</li>
            <li>Accogliere i giovani delle scuole in base alle convenzioni per alternanza scuola lavoro. Abbiamo già posto le basi con alcuni istituti, ma senza una sede di utilizzo quotidiano non ci è possibile attuare il progetto.</li>
          </ul>
        
      </section>
    </div>
  );
};

export default ProgettiEAttivita;

