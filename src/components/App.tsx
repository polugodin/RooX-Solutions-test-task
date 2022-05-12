import React, { useState, useEffect } from 'react';

import { UsersListPage } from './UsersListPage/UsersListPage';
import { ProfilePage } from './ProfilePage/ProfilePage';

export const App = () => {
  const [users, setUsers] = useState<Users | null>(null);
  const [page, setPage] = useState<PageStates>('usersList');
  const [profilePageId, setProfilePageId] = useState<number | null>(null);
  const profilePageUser = profilePageId
    ? users[users.findIndex((user) => user.id === profilePageId)]
    : null;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <AppContext.Provider
      value={{ page, setPage, users, setUsers, setProfilePageId, profilePageUser }}
    >
      {page === 'usersList' && <UsersListPage />}
      {page === 'userProfile' && <ProfilePage />}
    </AppContext.Provider>
  );
};

export const AppContext = React.createContext<AppContextInterface | null>(null);

interface AppContextInterface {
  page: PageStates;
  setPage: (page: PageStates) => void;
  users: Users;
  setUsers: (users: Users | ((currentUsers: Users) => Users)) => void;
  setProfilePageId: (userId: number) => void;
  profilePageUser: User | null;
}

type PageStates = 'usersList' | 'userProfile';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

type Users = Array<User>;
