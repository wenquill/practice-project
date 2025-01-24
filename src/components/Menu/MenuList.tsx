import React from 'react';
import './index.css';
import Button from '../Button';

type IMenuListProps = {
  ulClassName: string;
};

const MenuList = ({ ulClassName }: IMenuListProps) => {
  return (
    <>
      <ul className={ulClassName}>
        <a href='#'>
          <li className='menu__item'>Контакти</li>
        </a>
        <a href='#'>
          <li className='menu__item'>Головна</li>
        </a>
        <a href='#'>
          <li className='menu__item'>З чим працюємо</li>
        </a>
      </ul>
      <Button text={'Підтримати фонд'} />
    </>
  );
};

export default MenuList;
