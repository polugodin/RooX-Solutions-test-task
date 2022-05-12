import React, { useContext } from 'react';

import { AppContext } from '../App';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';

import styles from './UsersList.module.scss';

export const UsersList = () => {
  const { users } = useContext(AppContext);
  const { setPage, setProfilePageId } = useContext(AppContext);
  return (
    <>
      {users ? (
        <div>
          {users.map((user) => (
            <div key={user.id} className={styles.user}>
              <div className={styles.userInfoContainer}>
                <div>
                  <span className={styles.userInfoLabel}>ФИО:</span>
                  {user.name}
                </div>
                <div>
                  <span className={styles.userInfoLabel}>город:</span>
                  {user.address.city}
                </div>
                <div>
                  <span className={styles.userInfoLabel}>компания:</span>
                  {user.company.name}
                </div>
              </div>
              <div className={styles.moreButtonContainer}>
                <button
                  onClick={() => {
                    setProfilePageId(user.id);
                    setPage('userProfile');
                  }}
                  className={styles.moreButton}
                >
                  Подробнее
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};
