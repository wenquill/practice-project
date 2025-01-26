import React from 'react';
import './index.css';

type IContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: IContainerProps) => {
  return <div className="container">{children}</div>;
};

export default Container;
