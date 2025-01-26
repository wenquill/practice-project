import React from 'react';
import './index.css';
import Container from '../Container';

const HeroSection = () => {
  return (
    <section className="hero__container">
      <Container>
        <div className="hero__text-container">
          <h1 className="hero__title">Фонд підтримки постраждалих від війни</h1>
          <p className="hero__desc">
            Ми хочемо допомогти кожному, хто постраждав під час війни
          </p>
          <button className="hero__button">Підтримати фонд</button>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
