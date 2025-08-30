import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import AccoglienzaAscolto from './pages/ContattiESediLocali.jsx';
import VisioneMissione from './pages/VisioneMissione.jsx';
import Trasparenza from './pages/Trasparenza.jsx';
import LaCartaDeiServizi from './pages/LaCartaDeiServizi.jsx';
import ProgettiEAttivita from './pages/ProgettiEAttivita.jsx';
import ProgrammiDiFormazione from './pages/ProgrammiDiFormazione.jsx';
import PrevenireEProteggere from './pages/PrevenireEProteggere.jsx';
import SostegnoAlRecupero from './pages/SostegnoAlRecupero.jsx';
import IlTuoSupportoPerIncontRho from './pages/IlTuoSupportoPerIncontRho.jsx';
import PartnershipCollaborazioni from './pages/PartnershipCollaborazioni.jsx';
import BeneficiFiscaliDonazioni from './pages/BeneficiFiscaliDonazioni.jsx';
import UniscitiAlNostroVolontariato from './pages/UniscitiAlNostroVolontariato.jsx';
import UniscitiAlNostroAttivismo from './pages/UniscitiAlNostroAttivismo.jsx';

import IncontRhoLogo from './Foto/logo ideale.png';
import NuovaFoto from './Foto/Progetto senza titolo.png'; 
import NuovaFoto2 from './Foto/banner.png'; 
import FooterImage from './Foto/prato.jpg';
import FooterImage2 from './Foto/prato2.jpg';

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

function App() {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="App">
      {/* Top Bar */}
      <div className="bg-light py-2 border-bottom">
        <Container fluid className="d-flex flex-column flex-md-row justify-content-between align-items-center px-4">
          <div className="info-bar text-center text-md-start mb-2 mb-md-0">
            <span className="text-secondary me-3 top-bar-text">
              Presidente:
              <span className="fw-bold" style={{ color: 'red', fontSize: '20px' }}>
                +39 333 839 5158
              </span>
            </span>
            <span className="text-secondary top-bar-text">
              Contattaci e Trovaci
              <Link
                to="/accoglienza-e-ascolto"
                className="fw-bold text-primary top-bar-link ms-2"
                onClick={handleClose}
              >
                Clicca qui
              </Link>
            </span>
          </div>
        </Container>
      </div>

      {/* Navbar */}
      <Navbar bg="white" expand="md" className="shadow-sm py-3 py-md-4">
        <Container fluid className="d-flex justify-content-between align-items-center position-relative">
          {/* Logo */}
          <Navbar.Brand as={Link} to="/" className="ms-2 ms-md-4" style={{ position: 'relative', zIndex: 2 }}>
            <img src={IncontRhoLogo} alt="Logo Associazione IncontRho" className="navbar-logo img-fluid" />
          </Navbar.Brand>

          {/* Nuove immagini dietro */}
          <img src={NuovaFoto} alt="Nuova Foto" className="floating-image img-fluid d-none d-md-block" />
          <img src={NuovaFoto2} alt="Nuova Foto" className="floating-image2 img-fluid d-none d-md-block" />

          {/* Bottoni */}
          <div className="d-flex flex-column flex-md-row align-items-center me-2 me-md-4" style={{ position: 'relative', zIndex: 2 }}>
            <Button variant="primary" className="mb-2 mb-md-0 me-md-3 w-100 w-md-auto">Dona Ora</Button>
            <Button variant="outline-primary" onClick={handleShow} className="d-flex align-items-center justify-content-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="30" viewBox="0 0 100 40">
                <rect y="-15" width="100" height="4" fill="currentColor"/>
                <rect y="10" width="100" height="4" fill="currentColor"/>
                <rect y="35" width="100" height="4" fill="currentColor"/>
              </svg>
            </Button>
          </div>
        </Container>
      </Navbar>

      {/* Modal Menu */}
      <Modal show={showModal} onHide={handleClose} size="xl" centered dialogClassName="custom-modal-width">
        <Modal.Header closeButton>
          <Modal.Title>Menu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className="py-4">
            {/* Titoli */}
            <Row className="gy-4 text-center text-md-start">
              {["IncontRho","Cosa Facciamo","Sostienici","News","Campagne"].map((title, i) => (
                <Col xs={12} sm={6} md={4} lg key={i}>
                  <h5 className="fw-bold mb-2 text-primary modal-column-title">{title}</h5>
                </Col>
              ))}
            </Row>

            <div className="menu-titles-separator mb-4"></div>

            {/* Link */}
            <Row className="gy-4 text-center text-md-start">
              <Col xs={12} sm={6} md={4} lg className="mb-3 links-col-1">
                <Nav className="flex-column align-items-center align-items-md-start">
                  <Nav.Link as={Link} to="/accoglienza-e-ascolto" className="custom-nav-link" onClick={handleClose}>
                    Contatti e <br /> sedi locali
                  </Nav.Link>
                  <Nav.Link as={Link} to="/visione-missione" className="custom-nav-link" onClick={handleClose}>
                    Visione e Missione
                  </Nav.Link>
                  <Nav.Link as={Link} to="/trasparenza" className="custom-nav-link" onClick={handleClose}>
                    Trasparenza e Governance
                  </Nav.Link>
                  <Nav.Link as={Link} to="/la-carta-dei-servizi" className="custom-nav-link" onClick={handleClose}>
                    La Carta dei Servizi
                  </Nav.Link>
                </Nav>
              </Col>

              <Col xs={12} sm={6} md={4} lg className="mb-3 links-col-2">
                <Nav className="flex-column align-items-center align-items-md-start">
                  <Nav.Link as={Link} to="/progetti-e-attivita" className="custom-nav-link" onClick={handleClose}>
                    Progetti e Attività
                  </Nav.Link>
                  <Nav.Link as={Link} to="/programmi-di-formazione" className="custom-nav-link" onClick={handleClose}>
                    Programmi Formazione
                  </Nav.Link>
                  <Nav.Link as={Link} to="/sostegno-al-recupero" className="custom-nav-link" onClick={handleClose}>
                    <span style={{display: 'block'}}>Sostegno al</span>
                    <span style={{display: 'block'}}>Recupero</span>
                  </Nav.Link>
                </Nav>
              </Col>

              <Col xs={12} sm={6} md={4} lg className="mb-3 links-col-3">
                <Nav className="flex-column align-items-center align-items-md-start">
                  <Nav.Link as={Link} to="/il-tuo-supporto-per-incontrho" className="custom-nav-link" onClick={handleClose}>
                    Il Tuo Supporto per IncontRho
                  </Nav.Link>
                  <Nav.Link as={Link} to="/partnership-e-collaborazioni" className="custom-nav-link" onClick={handleClose}>
                    Partnership e Collaborazioni
                  </Nav.Link>
                  <Nav.Link as={Link} to="/benefici-fiscali-delle-donazioni" className="custom-nav-link" onClick={handleClose}>
                    Benefici Fiscali delle Donazioni
                  </Nav.Link>
                  <Nav.Link as={Link} to="/unisciti-al-nostro-volontariato" className="custom-nav-link" onClick={handleClose}>
                    Unisciti al Nostro Volontariato
                  </Nav.Link>
                  <Nav.Link as={Link} to="/unisciti-al-nostro-attivismo" className="custom-nav-link" onClick={handleClose}>
                    Unisciti al Nostro Attivismo
                  </Nav.Link>
                </Nav>
              </Col>

              {/* Colonne vuote */}
              {[4,5].map(i => (
                <Col xs={12} sm={6} md={4} lg key={i} className="mb-3 links-col-empty">
                  <Nav className="flex-column align-items-center align-items-md-start">
                    <span className="custom-nav-link" style={{ cursor: 'default', color: '#6d6dec' }}>-</span>
                  </Nav>
                </Col>
              ))}
            </Row>
          </Container>
        </Modal.Body>
      </Modal>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accoglienza-e-ascolto" element={<AccoglienzaAscolto />} />
        <Route path="/visione-missione" element={<VisioneMissione />} />
        <Route path="/trasparenza" element={<Trasparenza />} />
        <Route path="/la-carta-dei-servizi" element={<LaCartaDeiServizi />} />
        <Route path="/progetti-e-attivita" element={<ProgettiEAttivita />} />
        <Route path="/programmi-di-formazione" element={<ProgrammiDiFormazione />} />
        <Route path="/prevenire-e-proteggere" element={<PrevenireEProteggere />} />
        <Route path="/sostegno-al-recupero" element={<SostegnoAlRecupero />} />
        <Route path="/il-tuo-supporto-per-incontrho" element={<IlTuoSupportoPerIncontRho />} />
        <Route path="/partnership-e-collaborazioni" element={<PartnershipCollaborazioni />} />
        <Route path="/benefici-fiscali-delle-donazioni" element={<BeneficiFiscaliDonazioni />} />
        <Route path="/unisciti-al-nostro-volontariato" element={<UniscitiAlNostroVolontariato />} />
        <Route path="/unisciti-al-nostro-attivismo" element={<UniscitiAlNostroAttivismo />} />
      </Routes>

      {/* Footer */}
      <footer className="footer-custom text-center py-3 text-secondary mt-5 shadow-sm">
        <div>© {new Date().getFullYear()} Associazione IncontRho. Tutti i diritti riservati.</div>
      </footer>

      {/* Mostra solo nella Home */}
      {location.pathname === "/" && (
        <>
          <img src={FooterImage} alt="Prato" className="footer-image img-fluid" />
          <img src={FooterImage2} alt="Prato2" className="footer-image2 img-fluid" />
        </>
      )}
    </div>
  );
}

export default AppWrapper;






