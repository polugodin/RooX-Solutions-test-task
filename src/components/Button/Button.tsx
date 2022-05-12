import React from 'react';

import styles from './Button.module.scss';

type ButtonProps = {
  variant?: 'green';
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  type?: 'submit' | 'button';
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  onClick,
  children,
  disabled = false,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${styles.button} ${variant ? styles[variant] : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
