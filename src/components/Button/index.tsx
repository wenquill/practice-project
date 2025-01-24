import React from 'react';
import './index.css';

type IButtonProps = {
  text: string;
};

const Button = ({ text }: IButtonProps) => {
  return <button className='button'>{text}</button>;
};

export default Button;
