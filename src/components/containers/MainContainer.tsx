import React from 'react';

import styles from './MainContainer.module.scss';

export const MainContainer: React.FC = ({ children }) => {
  return <div className={styles.mainContainer}>{children}</div>;
};
