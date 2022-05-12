import React from 'react';

import styles from './AppContainer.module.scss';

export const AppContainer: React.FC = ({ children }) => {
  return <div className={styles.appContainer}>{children}</div>;
};
