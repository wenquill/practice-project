import React from 'react';
import './index.css';

type IButtonProps = {
  text: string;
  color?: string;
};

const Button = ({ text, color }: IButtonProps) => {
  return (
    <button color={color} className="button">
      {text}
    </button>
  );
};

export default Button;
