import React from 'react';

import styles from './LoadingSpinner.module.scss';

export const LoadingSpinner = () => {
  return (
    <div className={styles.spinnerWrap}>
      <div className={styles.spinner}>
        <div className={styles.icon}></div>
      </div>
    </div>
  );
};
