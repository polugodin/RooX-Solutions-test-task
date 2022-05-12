import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import styles from './Input.module.scss';

interface Props {
  label: string;
  defaultValue: string;
  error: boolean;
  register: UseFormRegisterReturn;
}

export const Input: React.FC<Props> = ({
  label,
  defaultValue,
  register: { name, ref, onChange, onBlur, disabled },
  error,
}) => {
  return (
    <div className={styles.container}>
      <label>
        <div className={styles.labelTitle}>{label}</div>
        <input
          name={name}
          defaultValue={defaultValue}
          ref={ref}
          type="text"
          className={`${styles.input} ${error ? styles.error : ''}`}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
        />
      </label>
    </div>
  );
};
