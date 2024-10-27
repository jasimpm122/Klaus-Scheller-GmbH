import React from 'react';
import { Link } from 'react-router-dom';
import '../BMWService.css';
import serviceImage from '../images/service.png';
import { useMediaQuery } from 'react-responsive';

function Service() {
    const isMobileOrTablet = useMediaQuery({ query: '(max-width: 768px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

    return (
        <div className="service-page" style={{ padding: isMobileOrTablet ? '20px' : '40px', paddingTop: isMobile ? '80px' : '100px' }}>
            {/* Hero Section */}
            <div className="service-hero" style={{
                flexDirection: isMobileOrTablet ? 'column' : 'row',
                textAlign: isMobileOrTablet ? 'center' : 'left',
                padding: isMobile ? '20px' : isMobileOrTablet ? '25px' : '30px'
            }}>
                <div className="hero-text" style={{ marginBottom: isMobileOrTablet ? '20px' : '0', marginRight: isMobileOrTablet ? '0' : '20px' }}>
                    <h1 style={{
                        fontSize: isMobile ? '24px' : isMobileOrTablet ? '28px' : '2.5rem',
                        color: '#007BFF'
                    }}>
                        BMW-Fahrzeuge Weltweit Verfügbar
                    </h1>
                    <p style={{ fontSize: isMobile ? '14px' : isMobileOrTablet ? '16px' : '1.1rem', lineHeight: '1.6' }}>
                        Entdecken Sie unser umfangreiches Angebot an BMW-Fahrzeugen, die zum Kauf und Versand weltweit bereitstehen.
                        Erleben Sie den Luxus und die Leistung von BMW, egal wo Sie sich befinden.
                    </p>
                </div>
                <div className="hero-image">
                    <img src={serviceImage} alt="Global BMW Service" style={{
                        width: '100%',
                        maxWidth: isMobile ? '250px' : isMobileOrTablet ? '350px' : '500px',
                        margin: isMobileOrTablet ? '0 auto' : '0',
                        borderRadius: '10px'
                    }} />
                </div>
            </div>

            {/* Main Content */}
            <div className="service-content" style={{
                padding: isMobileOrTablet ? '15px' : '20px',
                fontSize: isMobile ? '14px' : '16px'
            }}>
                <h2 style={{ fontSize: isMobile ? '20px' : '1.8rem', marginBottom: '15px' }}>Unser Service</h2>
                <p style={{ lineHeight: '1.6', marginBottom: '20px' }}>
                    Wir bieten eine umfassende Auswahl an BMW-Modellen, die jedem Geschmack gerecht werden, von eleganten Limousinen bis hin zu leistungsstarken SUVs.
                    Unser globaler Versandservice stellt sicher, dass Ihr BMW unabhängig von Ihrem Standort direkt vor Ihre Haustür geliefert wird.
                </p>

                <h2 style={{ fontSize: isMobile ? '20px' : '1.8rem', marginBottom: '15px' }}>Warum Wir?</h2>
                <ul className="service-benefits" style={{ paddingLeft: isMobileOrTablet ? '15px' : '20px' }}>
                    <li style={{ fontSize: isMobile ? '14px' : '16px' }}>Große Auswahl der neuesten BMW-Modelle</li>
                    <li style={{ fontSize: isMobile ? '14px' : '16px' }}>Weltweiter Versand an jeden Standort</li>
                    <li style={{ fontSize: isMobile ? '14px' : '16px' }}>Ausgezeichneter Kundenservice und Support</li>
                    <li style={{ fontSize: isMobile ? '14px' : '16px' }}>Wettbewerbsfähige Preise und flexible Zahlungsmöglichkeiten</li>
                </ul>
            </div>

            {/* Call to Action */}
            <div className="service-cta" style={{ marginTop: '30px', textAlign: 'center' }}>
                <p style={{
                    fontSize: isMobile ? '16px' : '1.2rem',
                    marginBottom: '15px'
                }}>
                    Bereit, Ihren Traum-BMW zu besitzen?
                </p>
                <Link to="/contact" className="service-button" style={{
                    padding: isMobile ? '8px 16px' : '10px 20px',
                    fontSize: isMobile ? '14px' : '1rem',
                    textDecoration: 'none' // Removed the underline
                }}>
                    Kontaktieren Sie uns für weitere Details
                </Link>
            </div>
        </div>
    );
}

export default Service;
