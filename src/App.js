import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';
import carImage from './car.JPG';
import Header from './components/Header';
import CarItem from './components/CarItem';
import { cars } from './components/MockData';
import About from './components/About'; 
import Imprint from './components/Imprint'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const handleFormSubmit = (formData) => {
    fetch('https://cardealers-latest-1.onrender.com/client/enquiry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };
  
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="image-container">
                  <img src={carImage} alt="Car" className="fix-image" />
                  <div className="overlay-text">
                    <p>BMW M. KRAFT TRIFFT DYNAMIK.</p>
                    <a>GEBOREN AUF DER RENNSTRECKE, AUF ALLEN STRASSEN ZU HAUSE.</a>
                  </div>
                </div>

                {/* New Section for "BMW in your country" */}
                <div 
  className="country-section" 
  style={{ 
    textAlign: 'center', 
    margin: '40px 0',
    opacity: 0,
    animation: 'slideIn 1s ease-in-out forwards',
    animationDelay: '0.3s'
  }}
>
  <p style={{ fontSize: '1.2rem', color: '#333' }}>BMW in Ihrem Land</p>
  <h2 style={{ fontSize: '3rem', margin: '10px 0', color: '#111', fontWeight: 'bold' }}>ALLE BMW MODELLE</h2>
  <p style={{ fontSize: '1rem', color: '#333' }}>
    <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Finden Sie Ihren BMW</span>
  </p>
</div>

{/* Introductory Text */}
<div 
  className="intro-text" 
  style={{ 
    textAlign: 'center', 
    fontSize: '0.8rem', 
    color: '#333', 
    margin: '20px',
    opacity: 0,
    animation: 'slideIn 1s ease-in-out forwards',
    animationDelay: '0.5s'
  }}
>
  M – an dem Buchstaben konnte man schon immer echte Sportwagen erkennen. Die aktuellen BMW M Automobile führen diese Tradition fort. Vom Motorsport inspiriert, werden diese höchsten Anforderungen an Agilität, Dynamik und Kraft mehr als gerecht. Leistungsstarke Motoren, kombiniert mit ausdrucksvollem Design, exklusiven Ausstattungen und hoher Funktionalität, lassen Sie spüren, wie viel Leidenschaft in jedem einzelnen dieser High-Performance Automobile steckt.
</div>

                <div className="car-items">
                  {cars.map((car, index) => (
                    <CarItem
                      key={index}
                      images={car.images}
                      title={car.title}
                      description={car.description}
                      onSubmitForm={handleFormSubmit}
                      price={car.price} 
                    />
                  ))}
                </div>
              </>
            }
          />
          
          <Route path="/about" element={<About />} />
          <Route path="/imprint" element={<Imprint />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
