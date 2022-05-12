import React from 'react';

import styles from './Input.module.scss';

type Props = {
  label: string;
  defaultValue: string;
  error: boolean;
};

export const Input: React.FC<Props & React.HTMLProps<HTMLInputElement>> = React.forwardRef(
  ({ label, defaultValue, error, ...props }, ref) => {
    return (
      <div className={styles.container}>
        <label>
          <div className={styles.labelTitle}>{label}</div>
          <input
            defaultValue={defaultValue}
            ref={ref}
            type="text"
            className={`${styles.input} ${error ? styles.error : ''}`}
            {...props}
          />
        </label>
      </div>
    );
  }
);
