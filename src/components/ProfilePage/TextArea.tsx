import React from 'react';

import styles from './Textarea.module.scss';

type Props = {
  label: string;
  defaultValue?: string;
  error: boolean;
};

export const Textarea: React.FC<Props & React.HTMLProps<HTMLTextAreaElement>> = React.forwardRef(
  ({ label, defaultValue, error, ...props }, ref) => {
    return (
      <div className={styles.container}>
        <label>
          <div className={styles.labelTitle}>{label}</div>
          <textarea
            ref={ref}
            defaultValue={defaultValue}
            className={`${styles.textarea} ${error ? styles.error : ''}`}
            {...props}
          ></textarea>
        </label>
      </div>
    );
  }
);
