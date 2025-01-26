import React from 'react';
import './index.css';
import Button from '../Button';

export type IMenuItem = {
  id: number
  title: string
}

type IMenuListProps = {
  menuItems: IMenuItem[]
  ulClassName: string;
};

const MenuList = ({ ulClassName, menuItems }: IMenuListProps) => {
  return (
    <>
      <ul className={ulClassName}>
        {menuItems.map(item => 
          <a href='#'>
            <li className='menu__item'>{item.title}</li>
          </a>
          )}
      </ul>
      <Button text={'Підтримати фонд'} />
    </>
  );
};

export default MenuList;
