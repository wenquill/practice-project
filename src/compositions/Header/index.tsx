import React from 'react';
import Container from '../Container';
import './index.css';
import Menu from '../../components/Menu';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className='header'>
      <Container>
        <div className='header__inner-container'>
          <div className='header__logo-container'>
            <img src='images/logo.png' alt='logo' width='65' />
          </div>
          <Menu />
        </div>
      </Container>
    </header>
  );
};

export default Header;
