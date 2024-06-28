import React from 'react';
import { useAuth } from '../context/AuthContext';

const Admin = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h2>Admin Page</h2>
      <p>Welcome, {user.name}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Admin;
