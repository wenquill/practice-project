import React from 'react';
import Container from '../Container';
import './index.css';
import Menu from '../../components/Menu';
import { IMenuItem } from '../../components/Menu/MenuList';

const menuList: IMenuItem[] = [
  {
    id: 1,
    title: 'Контакти'
  },
   {
    id: 2,
    title: 'Головна',
   }, 
   {
    id: 3,
    title: 'З чим ми працюємо'
   }
]

const Header = () => {
  return (
    <header className='header'>
      <Container>
        <div className='header__inner-container'>
          <div className='header__logo-container'>
            <img src='images/logo.png' alt='logo' width='65' />
          </div>
          <Menu menuItems={menuList}/>
        </div>
      </Container>
    </header>
  );
};

export default Header;
