import React from 'react';
import '../Contact.css';
import contactIllustration from '../images/contact.png';

function Contact() {
    const isMobileOrTablet = window.innerWidth <= 768;

    return (
        <div className="contact-container" style={{
            padding: isMobileOrTablet ? '20px' : '40px',
            maxWidth: '1200px',
            margin: '0 auto',
            paddingTop: isMobileOrTablet ? '100px' : '150px', // Adjusted for space below navbar
            fontFamily: 'Arial, sans-serif',
            color: '#333',
        }}>
            <h2 style={{
                fontSize: isMobileOrTablet ? '24px' : '32px',
                fontWeight: 'bold',
                textAlign: isMobileOrTablet ? 'center' : 'left',
                marginBottom: '20px',
                color: '#333',
            }}>
                Klaus Scheller GmbH - Kontakt
            </h2>
            <div className="contact-content" style={{
                display: 'flex',
                flexDirection: isMobileOrTablet ? 'column' : 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                textAlign: isMobileOrTablet ? 'center' : 'left',
            }}>
                <div className="contact-info" style={{
                    maxWidth: isMobileOrTablet ? '100%' : '600px',
                    marginBottom: isMobileOrTablet ? '20px' : '0',
                }}>
                    <h3 style={{
                        fontSize: isMobileOrTablet ? '18px' : '20px',
                        fontWeight: 'bold',
                        color: '#333',
                        marginBottom: '10px',
                    }}>
                        Kontakt Informationen
                    </h3>
                    <p style={{ marginBottom: '10px' }}>
                        <strong>Adresse:</strong> Triftweg 10, 67098 Bad Dürkheim, Deutschland
                    </p>
                    <p style={{ marginBottom: '10px' }}>
                        <strong>Telefon:</strong> +49 6322 9425-0
                    </p>
                    <p style={{ marginBottom: '10px' }}>
                        <strong>Fax:</strong> +49 6322 9425-15
                    </p>
                    <p style={{ marginBottom: '20px' }}>
                        <strong>Email:</strong> <a href="mailto:kundendienst@bmw-scheller.com" style={{ color: '#007BFF', textDecoration: 'none' }}>kundendienst@bmw-scheller.com</a>
                    </p>
                    
                    <h3 style={{
                        fontSize: isMobileOrTablet ? '18px' : '20px',
                        fontWeight: 'bold',
                        color: '#333',
                        marginBottom: '10px',
                    }}>
                        Öffnungszeiten
                    </h3>
                    <p style={{ marginBottom: '20px' }}>
                        Wir sind verfügbar von Montag bis Samstag, 8:00 - 18:00 Uhr.
                    </p>
                    
                    <h3 style={{
                        fontSize: isMobileOrTablet ? '18px' : '20px',
                        fontWeight: 'bold',
                        color: '#333',
                        marginBottom: '10px',
                    }}>
                        Social Media
                    </h3>
                    <p style={{ marginBottom: '20px' }}>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF', textDecoration: 'none', marginRight: '10px' }}>Facebook</a> 
                        | <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF', textDecoration: 'none', marginLeft: '10px' }}>Instagram</a>
                    </p>
                    
                    <h3 style={{
                        fontSize: isMobileOrTablet ? '18px' : '20px',
                        fontWeight: 'bold',
                        color: '#333',
                        marginBottom: '10px',
                    }}>
                        Weitere Informationen
                    </h3>
                    <p style={{ marginBottom: '10px' }}>
                        <strong>Versicherer:</strong> Zurich Insurance plc
                    </p>
                    <p style={{ marginBottom: '20px' }}>
                        <strong>Sitz des Versicherers:</strong> 53287 Bonn, Deutschland
                    </p>
                </div>
                
                <img 
                    src={contactIllustration} 
                    alt="Contact Illustration" 
                    className="contact-image" 
                    style={{
                        width: isMobileOrTablet ? '100%' : '500px',
                        height: 'auto',
                        maxWidth: '100%',
                        margin: isMobileOrTablet ? '0 auto' : '0 0 0 20px',
                        borderRadius: '8px',
                    }} 
                />
            </div>
        </div>
    );
}

export default Contact;
