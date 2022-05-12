import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppContext } from '../App';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';

import styles from './UsersList.module.scss';

export const UsersList = () => {
  const { users } = useContext(AppContext);
  const navigate = useNavigate();

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
                  onClick={() => navigate(`/user-profile/${user.id}`)}
                  className={styles.moreButton}
                >
                  Подробнее
                </button>
              </div>
            </div>
          ))}
          <div className={styles.usersCounter}>Найдено {users.length} пользователей</div>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};
