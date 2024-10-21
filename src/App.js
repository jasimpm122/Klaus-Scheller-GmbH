import React, { useEffect } from 'react';
import logo from './newcar.PNG';
import './App.css';
import SearchIcon from '@mui/icons-material/Search';
import carImage from './car.JPG';
import Header from './components/Header';
import CarItem from './components/CarItem';
import { cars } from './components/MockData';


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
    <div className="App">
     <Header/>
      <div className="image-container">
        <img src={carImage} alt="Car" className="fixed-image" />
        <div className="overlay-text">
          <p>BMW M. KRAFT TRIFFT DYNAMIK.</p>
          <a>Geboren auf der Rennstrecke, auf allen Straßen zu Hause.</a>
        </div>
      </div>
      <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
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
    </div>
  );
}

export default App;
