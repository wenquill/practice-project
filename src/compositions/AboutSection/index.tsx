import React from 'react';
import './index.css';
import Container from '../Container';
import AboutCard from '../../components/AboutCard';
import Button from '../../components/Button';

type Props = {};

const AboutSection = (props: Props) => {
  return (
    <div className='about'>
      <Container>
        <section className='about-first'>
          <h2 className='about-first__title'>
            Ми - фонд підтримки постраждалих від вйни
          </h2>
          <p className='about-first__subtitle'>
            Наша мета – психологічна та гуманітарна допомога українцям
          </p>
          <p className='about-first__desc'>
            Кожен, хто звернеться, отримає допомогу, яка у наших силах
          </p>
        </section>
        <AboutCard
          title='Реабілітаційний центр'
          description='Ми допомагаємо людям, які постраждали знайти правильне лікування. У нашому фонді є чотири напрями: фізичної та реабілітаційної медицини, терапевтичне, неврологічне та хірургічне. Ми маємо заклади-партнери, де швидко та якісно можуть надати допомогу.'
          src='about-1.png'
        />
        <AboutCard
          title='Робота з дітьми'
          description='Діти – найвразливіша частина суспільства, і їм особливо потрібна підтримка дорослих. Тому наш фонд збирає речі для дітей, проводить літні й зимові табори, майстер-класи та за потреби – дитячих прсихотерапевтів.'
          src='about-2.png'
        />
        <Button text='Дізнатися більше' />
      </Container>
    </div>
  );
};

export default AboutSection;
