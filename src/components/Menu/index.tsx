import React, { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';
import './index.css';
import MenuList, { IMenuItem } from './MenuList';

type IMenuProps = {
  menuItems: IMenuItem[];
};

const Menu = ({ menuItems }: IMenuProps) => {
  const { width } = useWindowSize();
  const [isMemuOpened, setIsMenuOpened] = useState(true);
  const [isBurgerMemuOpened, setIsBurgerMenuOpened] = useState(false);

  const openBurgerMenu = (isOpen: boolean) => {
    setIsBurgerMenuOpened(isOpen);
  };

  useEffect(() => {
    if (width <= 992) {
      setIsMenuOpened(false);
    } else {
      setIsMenuOpened(true);
      setIsBurgerMenuOpened(false);
    }
  }, [width]);

  return (
    <div className="menu">
      {isMemuOpened ? (
        <MenuList menuItems={menuItems} ulClassName="menu__list" />
      ) : (
        <button
          className="menu__burger-btn"
          onClick={() => openBurgerMenu(true)}
        >
          <img src="images/burger-menu.png" alt="burger menu icon" width="50" />
        </button>
      )}
      {isBurgerMemuOpened && (
        <div className="menu__burger">
          <button
            className="menu__burger-close"
            onClick={() => openBurgerMenu(false)}
          >
            <img src="images/close.png" alt="close" width="40" />
          </button>
          <div className="menu__burger-container">
            <MenuList menuItems={menuItems} ulClassName="menu__burger-list" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
