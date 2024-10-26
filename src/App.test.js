import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import routing components
import './App.css';
import carImage from './car.JPG';
import Header from './components/Header';
import CarItem from './components/CarItem';
import { cars } from './components/MockData';
import About from './components/About'; 
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
          {/* Home Page Route */}
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
                <div className="car-items">
                  {cars.map((car, index) => (
                    <CarItem
                      key={index}
                      images={car.images} // Corrected here
                      title={car.title}     // Corrected here
                      description={car.description} // Corrected here
                      onSubmitForm={handleFormSubmit}
                      price={car.price}
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