import React from 'react';
import { Link } from 'react-router-dom';
import '../BMWService.css';
import serviceImage from '../images/service.png';

function Service() {
    return (
        <div className="service-page">
            {/* Hero Section */}
            <div className="service-hero">
                <div className="hero-text">
                    <h1>BMW-Fahrzeuge Weltweit Verfügbar</h1>
                    <p>
                        Entdecken Sie unser umfangreiches Angebot an BMW-Fahrzeugen, die zum Kauf und Versand weltweit bereitstehen.
                        Erleben Sie den Luxus und die Leistung von BMW, egal wo Sie sich befinden.
                    </p>
                </div>
                <div className="hero-image">
                    <img src={serviceImage} alt="Global BMW Service" />
                </div>
            </div>

            {/* Main Content */}
            <div className="service-content">
                <h2>Unser Service</h2>
                <p>
                    Wir bieten eine umfassende Auswahl an BMW-Modellen, die jedem Geschmack gerecht werden, von eleganten Limousinen bis hin zu leistungsstarken SUVs.
                    Unser globaler Versandservice stellt sicher, dass Ihr BMW unabhängig von Ihrem Standort direkt vor Ihre Haustür geliefert wird.
                </p>
                
                <h2>Warum Wir?</h2>
                <ul className="service-benefits">
                    <li>Große Auswahl der neuesten BMW-Modelle</li>
                    <li>Weltweiter Versand an jeden Standort</li>
                    <li>Ausgezeichneter Kundenservice und Support</li>
                    <li>Wettbewerbsfähige Preise und flexible Zahlungsmöglichkeiten</li>
                </ul>
            </div>

            {/* Call to Action */}
            <div className="service-cta">
                <p>Bereit, Ihren Traum-BMW zu besitzen?</p>
                <Link to="/contact" className="service-button">Kontaktieren Sie uns für weitere Details</Link>
            </div>
        </div>
    );
}

export default Service;
