import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import './Home.css';

export default function Home() {
  return (
    <div className="home-page-bg">  
      <section className="bg-info-subtle text-center py-5 px-3">  
      <h1 className="display-4 fw-bold text-primary mb-3 custom-title">
  Famiglie e Volontari del Rhodense <br /> per la Salute Mentale
</h1>

<p className="text-secondary mx-auto mb-4 custom-subtitle">

  
  L’associazione IncontRho è attiva sul territorio Rhodense da 20 anni nel campo della salute mentale, in stretta collaborazione con <br /> il Dipartimento Salute Mentale e Dipendenze
</p>
    
        <Button as={Link} to="/visione-missione" variant="primary" size="lg">
          Scopri di più
        </Button>
      </section>
    </div>
  );
}
