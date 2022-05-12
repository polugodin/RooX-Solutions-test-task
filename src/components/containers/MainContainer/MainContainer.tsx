import React from 'react';

import styles from './MainContainer.module.scss';

interface Props {
  children: React.ReactNode;
}

export const MainContainer: React.FC<Props> = ({ children }) => {
  return <div className={styles.mainContainer}>{children}</div>;
};
