import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import routing components
import './App.css';
import carImage from './car.JPG';
import Header from './components/Header';
import CarItem from './components/CarItem';
import { cars } from './components/MockData';
import About from './components/About';   // Import About component

function App() {

  const handleFormSubmit = (formData) => {
    fetch('http://107.150.61.34:8991/client/enquiry', {
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
          {/* Home Page Route */}
          <Route
            path="/"
            element={
              <>
                <div className="image-container">
                  <img src={carImage} alt="Car" className="fixed-image" />
                  <div className="overlay-text">
                    <p>BMW M. KRAFT TRIFFT DYNAMIK.</p>
                    <a>Geboren auf der Rennstrecke, auf allen Straßen zu Hause.</a>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                  {cars.map((car, index) => (
                    <CarItem
                      key={index}
                      imageUrl={car.imageUrl}
                      title={car.title}
                      description={car.description}
                      onSubmitForm={handleFormSubmit}
                    />
                  ))}
                </div>
              </>
            }
          />
          
          {/* About Page Route */}
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
