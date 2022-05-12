import React from 'react';

import styles from './AsideContainer.module.scss';

interface Props {
  children: React.ReactNode;
}

export const AsideContainer: React.FC<Props> = ({ children }) => {
  return <div className={styles.asideContainer}>{children}</div>;
};
