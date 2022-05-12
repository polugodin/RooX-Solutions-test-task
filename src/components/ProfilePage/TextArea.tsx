import React, { useEffect } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import styles from './Textarea.module.scss';

interface Props {
  label: string;
  defaultValue?: string;
  error: boolean;
  register: UseFormRegisterReturn;
}

export const Textarea: React.FC<Props> = ({
  label,
  defaultValue,
  register: { name, ref, onChange, onBlur, disabled },
  error,
}) => {
  return (
    <div className={styles.container}>
      <label>
        <div className={styles.labelTitle}>{label}</div>
        <textarea
          name={name}
          defaultValue={defaultValue}
          ref={ref}
          className={`${styles.textarea} ${error ? styles.error : ''}`}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
        ></textarea>
      </label>
    </div>
  );
};
