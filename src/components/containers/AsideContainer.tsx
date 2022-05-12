import React from 'react';

import styles from './AsideContainer.module.scss';

export const AsideContainer: React.FC = ({ children }) => {
  return <div className={styles.asideContainer}>{children}</div>;
};
