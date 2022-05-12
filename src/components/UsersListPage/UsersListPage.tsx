import React, { useContext } from 'react';

import { AppContext } from '../App';

import { AppContainer } from '../containers/AppContainer';
import { AsideContainer } from '../containers/AsideContainer';
import { MainContainer } from '../containers/MainContainer';
import { Button } from '../Button/Button';
import { UsersList } from './UsersList';

import styles from './UsersListPage.module.scss';

export const UsersListPage = () => {
  const { setUsers } = useContext(AppContext);
  return (
    <AppContainer>
      <AsideContainer>
        <div className={styles.asideTitle}>Сортировка</div>
        <div className={styles.asideButtonContainer}>
          <Button
            onClick={() => {
              setUsers((users) =>
                [...users].sort((a, b) => (a.address.city < b.address.city ? -1 : 1))
              );
            }}
          >
            по городу
          </Button>
        </div>
        <div className={styles.asideButtonContainer}>
          <Button
            onClick={() => {
              setUsers((users) =>
                [...users].sort((a, b) => (a.company.name < b.company.name ? -1 : 1))
              );
            }}
          >
            по компании
          </Button>
        </div>
      </AsideContainer>
      <MainContainer>
        <div className={styles.mainTitle}>Список пользователей</div>
        <UsersList />
      </MainContainer>
    </AppContainer>
  );
};
