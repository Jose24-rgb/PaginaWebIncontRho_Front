import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import './ContattiESediLocali.css';

export default function ContattiESediLocali() {
  const sede1Address = "Piazza Chiesa, 20, 20017 Rho MI";
  const sede1MapEmbedUrl = `https://www.google.com/maps/d/u/0/embed?mid=1GneUAQvdOte9rtI0szf2VSoIc7r10PM&ehbc=2E312F`;
  const sede2Address = "Via Antonio Gramsci, 63, 20044 Arese MI";
  const sede2MapEmbedUrl = `https://www.google.com/maps/d/u/0/embed?mid=1GBXYjxNfBSgBTaVHFGflQWGkPEeTvwk&ehbc=2E312F`;

  return (
    <Container className="my-5">
      <h1 className="titolo-contatti text-center mb-4">Contatti e Sedi Locali</h1>

      <section className="mb-5 p-4 border rounded shadow-sm bg-light">
        <h2 className="titolo-accoglienza mb-3">La Nostra Accoglienza: Trovare Ascolto e Amicizia</h2>

        <p>La prima necessità in chi soffre è trovare ascolto e affidabilità per condividere le sue preoccupazioni e per trovare insieme una strada verso il benessere. IncontRho è attiva con uno sportello di accoglienza e di primo ascolto gestito da volontari esperti in disagio psichico.</p>
        <p>L’Associazione propone anche attività ricreative per le persone in cura, per le loro famiglie, per i cittadini amici dell’Associazione.</p>
      </section>

      <section className="mb-5 p-4 border rounded shadow-sm bg-light">
        <h3 className="titolo-accoglienza mb-3">Sportello d’Ascolto Psicologico e Consulenza Familiare</h3>
        <p>Attraverso lo Sportello, l’Associazione propone un servizio di appuntamenti di consulenza specialistica gratuita, variabili in numero da 2 a 5 a seconda della valutazione iniziale:</p>
        <ul>
          <li>Consulenza psicologica individuale attraverso colloqui con specialisti;</li>
          <li>Consulenza famigliare per genitori separati, per la coppia in crisi e per la famiglia;</li>
          <li>Consulenza per l’accesso alla rete di servizi e alle opportunità territoriali.</li>
        </ul>
        <p>Gli appuntamenti specialistici sono gratuiti. L’iscrizione all’Associazione da parte degli utenti dello Sportello d’Ascolto Psicologica è gradita e facoltativa.</p>
      </section>

      <section className="mb-5 p-4 border rounded shadow-sm bg-light">
        <h3 className="titolo-accoglienza mb-3">Sportello di Prossimità: Consulenza su Amministrazione di Sostegno</h3>
        <p>L’Associazione offre un servizio gratuito di consulenza ai cittadini del Rhodense, su appuntamento, per dare informazioni circa la nomina di un amministratore di sostegno, a tutela della persona fragile per sostenerla nell’autonomia delle scelte quotidiane.</p>
        <p><strong>Il servizio include:</strong></p>

        <ul>
          <li>Valutazione del caso specifico;</li>
          <li>Indicazioni su necessità di documentazione e certificazioni mediche;</li>
          <li>Informazioni su modulistica;</li>
          <li>Assistenza su procedure per accesso al Tribunale.</li>
        </ul>
      </section>

      <div className="info-accesso bg-light p-4 rounded shadow-sm mb-5">
      <h3 className="text-primary modalita-accesso-title">Modalità di Accesso e Info Generali:</h3>

        <ul>
          <li><strong>Modalità di accesso ai servizi:</strong> accesso diretto, previo contatto telefonico o mail.</li>
          <li><strong>Mesi di apertura:</strong> tutto l’anno.</li>
          <li><strong>Orari per contatti telefonici:</strong> dalle 10.00 alle 18.00.</li>
          <li><strong>Costi:</strong> i servizi sono gratuiti.</li>
        </ul>

        <h3 className="text-primary mt-4 mb-2">Info e Contatti con l’Organismo Direttivo:</h3>
        <p><strong>Presidente: +39 333 839 5158</strong></p>
        <p><strong>Vicepresidenti: +39 340 534 8353, +39 348 274 2349</strong></p>
      </div>

      <Row className="justify-content-center">
        <Col md={8}>
          <div className="info-accesso bg-light p-4 rounded shadow-sm mb-5">
            
            <ul>
              <li className="mb-3">
                <strong>1) Sportello Amministrazione di Sostegno:</strong><br />
                <strong>+39 380 217 7967</strong><br />
                Email: <a href="mailto:ads.incontrho@gmail.com">ads.incontrho@gmail.com</a>
              </li>
              <li className="mb-3">
                <strong>2) Sportello di ascolto psicologico e consulenza familiare Presidente:</strong><br />
                <strong>+39 333 839 5158</strong>
              </li>
              <li className="mb-3">
                <strong>3) Per primo accesso ad attività e laboratori Presidente:</strong><br />
                <strong>+39 333 839 5158</strong>
              </li>
              <li className="mb-3">
                <strong>4) Segreteria Incontrho:</strong><br />
                <strong>+39 340 534 8353</strong><br />
                Email: <a href="mailto:infoincontrho@gmail.com">infoincontrho@gmail.com</a>
              </li>
              <li>
                <strong>5) Amministrazione:</strong><br />
                <strong>+39 333 225 8026</strong><br />
                Email: <a href="mailto:segreteria.incontrho@gmail.com">segreteria.incontrho@gmail.com</a>
              </li>
            </ul>
          </div>

          <div id="sezioni-mappe">
            <h2 className="text-center text-primary mb-4">Le nostre sedi locali e le relative mappe:</h2>

            <Card className="shadow-sm mb-4">
              <Card.Body>
                <Card.Title className="text-primary">Sede 1: {sede1Address}</Card.Title>
                <div className="mt-3">
                  <iframe
                    src={sede1MapEmbedUrl}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mappa della sede: ${sede1Address}`}
                  />
                </div>
              </Card.Body>
            </Card>

            <Card className="shadow-sm mb-4">
              <Card.Body>
                <Card.Title className="text-primary">Sede 2: {sede2Address}</Card.Title>
                <div className="mt-3">
                  <iframe
                    src={sede2MapEmbedUrl}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mappa della sede: ${sede2Address}`}
                  />
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="text-center mt-5">
            <p className="lead text-secondary seguici-label">Seguici anche su:</p>

            <a
              href="https://www.facebook.com/IncontRho-Rhodense-per-la-Salute-Mentale"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              Facebook
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

