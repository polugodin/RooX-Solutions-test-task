import React from 'react';

import styles from './AppContainer.module.scss';

interface Props {
  children: React.ReactNode;
}

export const AppContainer: React.FC<Props> = ({ children }) => {
  return <div className={styles.appContainer}>{children}</div>;
};
