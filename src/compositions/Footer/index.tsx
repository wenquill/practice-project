import React from 'react';
import Container from '../Container';
import './index.css'
import Button from '../../components/Button';

const Footer = () => {
  return <footer className='footer'>
    <Container>
      <section className='footer__section-1'>
        <h2 className='footer__title'>Контакти</h2>
        <div className='footer__contacts'>
          <div className='footer__contacts-1'> 
            <a href="#"><img src="images/icon-1.png" alt="icon-phone" width="33" /></a>
            <p>Якщо у вас виникають питання – телефонуйте за номером</p>
            <a href="tel:0987654321">0-987-654-321</a>
          </div>
          <div className='footer__contacts-2'>
            <div className='footer__icons'>
              <a href="#">              
                <img src="images/icon-2.png" alt="icon-telegram" width="33" />
              </a>
              <a href="#">              
                <img src="images/icon-3.png" alt="icon-viber" width="33" />
              </a>
            </div>
            <p>Або пишіть нам у чат-бот</p>
          </div>
        </div>
      </section>
      <section className='footer__section-2'>
        <div className='footer__image-wrapper'>
          <img src="images/footer.png" alt="footer" />
        </div>
        <div className='footer__form-wrapper'>
          <h3>Щоб дізнаватися усі новини фестивалю, підпишися на нашу розсилку</h3>
          <form action="#">
            <input type="text" placeholder='Ім`я' />
            <input type="mail" placeholder='Емейл'/>
            <Button text="Підписатися"/>
          </form>
        </div>
      </section>
    </Container>
  </footer>;
};

export default Footer;
