import React, { createContext, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const history = useHistory();

  const login = (name, password, role) => {
    // Dummy authentication logic
    setUser({ name, role });
    history.push(`/${role.toLowerCase()}`);
  };

  const logout = () => {
    setUser(null);
    history.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
