// Home.js
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home fade-in">
      <section className="hero">
        <h1>Welcome to Our Platform</h1>
        <p>Explore, Create, and Share</p>
        <button className="explore-btn button-hover">Explore Now</button>
      </section>
    </div>
  );
}

export default Home;
