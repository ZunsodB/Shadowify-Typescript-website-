import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { UserRole } from '../types/UserRole';

const USER_STATUS_KEY = 'userStatus';

interface UserContextType {
  userStatus: UserRole | null;
  login: (status: UserRole) => void;
  logout: () => void;
}

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  // Initialize state from localStorage or null
  const [userStatus, setUserStatus] = useState<UserRole | null>(() => {
    const savedStatus = localStorage.getItem(USER_STATUS_KEY);
    return savedStatus ? (savedStatus as UserRole) : null;
  });

  // userStatus өөрчлөгдөхөд localStorage update хийх 
  useEffect(() => {
    if (userStatus) {
      localStorage.setItem(USER_STATUS_KEY, userStatus);
    } else {
      localStorage.removeItem(USER_STATUS_KEY);
    }
  }, [userStatus]);

  const login = (status: UserRole) => {
    setUserStatus(status);
  };

  const logout = () => {
    setUserStatus(null);
  };

  return (
    <UserContext.Provider value={{ userStatus, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};