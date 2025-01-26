import React from 'react';
import './index.css';

type Props = {
  title: string;
  description: string;
  src: string;
};

const AboutCard = ({ title, description, src }: Props) => {
  return (
    <section className="about-card">
      <div className="about-card__text-container">
        <h2 className="about-card__title">{title}</h2>
        <p className="about-card__desc">{description}</p>
      </div>
      <div className="about-card__image-wrapper">
        <img className="about-card__image" src={`images/${src}`} alt="image" />
      </div>
    </section>
  );
};

export default AboutCard;
