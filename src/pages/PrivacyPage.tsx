import React from 'react';
import Hero from '../components/Hero';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <Hero 
        title="Politique de Confidentialité"
        subtitle="Découvrez comment nous protégeons vos données personnelles"
        backgroundImage="https://images.pexels.com/photos/5473337/pexels-photo-5473337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alignment="left"
        variant="banner"
      />
      
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <h2>1. Collecte des Données</h2>
            <p>
              Nous collectons uniquement les données nécessaires à la réalisation de nos services et à l'amélioration de votre expérience.
            </p>

            <h2>2. Utilisation des Données</h2>
            <p>
              Vos données sont utilisées pour :
            </p>
            <ul>
              <li>Répondre à vos demandes</li>
              <li>Réaliser nos prestations</li>
              <li>Améliorer nos services</li>
            </ul>

            <h2>3. Protection des Données</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles.
            </p>

            <h2>4. Vos Droits</h2>
            <p>
              Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données.
            </p>

            <h2>5. Cookies</h2>
            <p>
              Notre site utilise des cookies pour améliorer votre expérience de navigation.
            </p>

            <h2>6. Contact</h2>
            <p>
              Pour toute question concernant vos données personnelles, contactez-nous à a.roussel@add-edit.fr
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPage;