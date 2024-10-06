// Home.js
import React from 'react';
import './styles/Home.css';
import CarCarousel from './CarCarousel'; // Include the carousel component
function Home() {
  return (
    <div className="home fade-in">
      <section className="hero">
        <h1>Welcome to TunerHub</h1>
        <p>Explore, Create, and Share</p>
        <button className="explore-btn button-hover">Explore Now</button>
      </section>

      {/* Car Image Carousel Section */}
      <section className="car-carousel-section">
        <CarCarousel />
      </section>
    </div>
  );
}

export default Home;
