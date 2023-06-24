import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1 className="heading">Google Map</h1>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4013074.4615866714!2d75.64725596163056!3d10.809930810082067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0x559475cc463361f0!2sTamil%20Nadu!5e0!3m2!1sen!2sin!4v1687611916224!5m2!1sen!2sin"
        width="700"
        height="500"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <h2>To adjust the Google Maps embed URL to the desired location if needed.</h2>
    </div>
  );
};

export default App;
