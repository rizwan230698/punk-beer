import React, { useState, useCallback } from 'react';
import { message } from 'antd';
import { auth } from '../firebase';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user'))
  );

  const setUser = useCallback((user) => {
    localStorage.setItem('user', JSON.stringify(user));
    setCurrentUser(user);
  }, []);

  const removeUser = () => {
    localStorage.removeItem('user');
    auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ currentUser, setUser, removeUser }}>
      {children}
    </AuthContext.Provider>
  );
};
