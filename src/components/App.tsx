import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { UsersListPage } from './UsersListPage/UsersListPage';
import { ProfilePage } from './ProfilePage/ProfilePage';

type User = {
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
};

type Users = Array<User> | null;

type AppContext = {
  users: Users;
  setUsers: (users: Users | ((currentUsers: Users) => Users)) => void;
} | null;

export const AppContext = React.createContext<AppContext>(null);

export const App = () => {
  const [users, setUsers] = useState<Users>(null);
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
    <AppContext.Provider value={{ users, setUsers }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UsersListPage />}></Route>
          <Route path="/user-profile/:id" element={<ProfilePage />}></Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};
