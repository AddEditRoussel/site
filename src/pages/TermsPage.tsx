import React from 'react';
import Hero from '../components/Hero';

const TermsPage: React.FC = () => {
  return (
    <>
      <Hero 
        title="Conditions Générales"
        subtitle="Consultez nos conditions générales d'utilisation et de vente"
        backgroundImage="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alignment="left"
        variant="banner"
      />
      
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <h2>1. Introduction</h2>
            <p>
              Les présentes conditions générales régissent l'utilisation de ce site web et la relation entre ADD EDIT et ses clients.
            </p>

            <h2>2. Services</h2>
            <p>
              ADD EDIT propose des services de production vidéo, incluant mais non limité à la création de teasers, bandes-annonces, et vidéos promotionnelles.
            </p>

            <h2>3. Tarifs et Paiement</h2>
            <p>
              Les tarifs sont établis sur devis après étude de votre projet. Le paiement s'effectue selon les modalités définies dans le devis.
            </p>

            <h2>4. Propriété Intellectuelle</h2>
            <p>
              ADD EDIT conserve ses droits de propriété intellectuelle sur les créations jusqu'au paiement complet des prestations.
            </p>

            <h2>5. Confidentialité</h2>
            <p>
              ADD EDIT s'engage à maintenir la confidentialité des informations fournies par le client pendant la durée du projet.
            </p>

            <h2>6. Modifications</h2>
            <p>
              ADD EDIT se réserve le droit de modifier ces conditions générales à tout moment.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsPage;