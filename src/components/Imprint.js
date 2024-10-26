import React from 'react';

function Imprint() {
    return (
        <div style={{
            padding: '40px',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6',
            fontFamily: 'Arial, sans-serif',
            color: '#333'
        }}>
            <h1 style={{
                fontSize: '32px',
                fontWeight: 'bold',
                textAlign: 'left',
                marginBottom: '5px',
                color: '#333'
            }}>
                IMPRESSUM.
            </h1>
            <p style={{
                fontSize: '14px',
                textAlign: 'left',
                marginBottom: '40px',
                color: '#666'
            }}>
                ANGABEN ZUM BETREIBER DER WEBSITE.
            </p>

            <h2 style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '10px'
            }}>
                KLAUS SCHELLER GMBH
            </h2>
            <p style={{ marginBottom: '20px' }}>
                Vertreten durch die Geschäftsführer: Andreas Scheller, Anna Scheller und Matthias Keeve-Scheller<br />
                Handelsregister Amtsgericht Ludwigshafen am Rhein HRB 11234<br />
                USt.-IdNr: DE149368823
            </p>

            <h3 style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '5px'
            }}>
                Kontakt
            </h3>
            <p style={{ marginBottom: '20px' }}>
                Triftweg 10<br />
                67098 Bad Dürkheim<br />
                Tel.: +49 6322 9425-0<br />
                Fax: +49 6322 9425-15<br />
                E-Mail: <a href="mailto:info@bmw-scheller.de" style={{ color: '#007BFF', textDecoration: 'none' }}>info@bmw-scheller.de</a>
            </p>

            <h3 style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '5px'
            }}>
                Berufsbezeichnung und berufsrechtliche Regelungen
            </h3>
            <p style={{ marginBottom: '10px' }}>
                Berufsrechtliche Regelungen: Gesetz zur Ordnung des Handwerks (Handwerksordnung)
            </p>
            <p style={{ marginBottom: '20px' }}>
                Die berufsrechtlichen Regelungen können über die vom Bundesministerium der Justiz und von der juris GmbH betriebene Homepage 
                <a href="https://www.gesetze-im-internet.de" target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF', textDecoration: 'none', marginLeft: '5px' }}>www.gesetze-im-internet.de</a> 
                eingesehen und abgerufen werden.
            </p>
            <p style={{ marginBottom: '20px' }}>
                Die Angaben in diesem Impressum gelten auch für die folgenden Online-Auftritte der Klaus Scheller GmbH:
            </p>
            <ul style={{ listStyleType: 'none', paddingLeft: '0', marginBottom: '20px' }}>
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF', textDecoration: 'none', marginRight: '15px' }}>Facebook</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF', textDecoration: 'none' }}>Instagram</a></li>
            </ul>

            <h3 style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '5px'
            }}>
                Angaben zur Betriebshaftpflichtversicherung
            </h3>
            <p style={{ marginBottom: '20px' }}>
                Name und Sitz des Versicherers:<br />
                Zurich Insurance plc<br />
                53287 Bonn<br />
                Geltungsraum der Versicherung: Deutschland
            </p>

            <h3 style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '5px'
            }}>
                Streitschlichtung
            </h3>
            <p style={{ marginBottom: '10px' }}>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF', textDecoration: 'none', marginLeft: '5px' }}>https://ec.europa.eu/consumers/odr</a>.
            </p>
            <p>
                Unsere E-Mail-Adresse finden Sie oben im Impressum.<br />
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
        </div>
    );
}

export default Imprint;
