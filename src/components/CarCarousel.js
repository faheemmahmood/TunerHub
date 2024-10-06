// CarCarousel.js
import React from 'react';
import Carousel from 'react-bootstrap/Carousel'; // Install with npm install react-bootstrap bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const CarCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1549921296-3a62f2eb504c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGNhcnxlbnwwfHx8fDE2OTY1Mjg5MTg&ixlib=rb-1.2.1&q=80&w=1080"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Car Model 1</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.example.com/car2.jpg" // Replace with actual image URLs
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Car Model 2</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarCarousel;
