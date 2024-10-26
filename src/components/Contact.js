import React from 'react';
import '../Contact.css';
import contactIllustration from '../images/contact.png';

function Contact() {
    return (
        <div className="contact-container">
          <h2>Klaus Scheller GmbH - Kontakt</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Kontakt Informationen</h3>
              <p><strong>Adresse:</strong> Triftweg 10, 67098 Bad Dürkheim, Deutschland</p>
              <p><strong>Telefon:</strong> +49 6322 9425-0</p>
              <p><strong>Fax:</strong> +49 6322 9425-15</p>
              <p><strong>Email:</strong> <a href="mailto:kundendienst@bmw-scheller.com">kundendienst@bmw-scheller.com</a></p>
              
              <h3>Öffnungszeiten</h3>
              <p>Wir sind verfügbar von Montag bis Samstag, 8:00 - 18:00 Uhr.</p>
              
              <h3>Social Media</h3>
              <p><a href="https://www.facebook.com">Facebook</a> | <a href="https://www.instagram.com">Instagram</a></p>
              
              <h3>Weitere Informationen</h3>
              <p><strong>Versicherer:</strong> Zurich Insurance plc</p>
              <p><strong>Sitz des Versicherers:</strong> 53287 Bonn, Deutschland</p>
            </div>
            
            <img src={contactIllustration} alt="Contact Illustration" className="contact-image" />
          </div>
        </div>
      );
}

export default Contact;
