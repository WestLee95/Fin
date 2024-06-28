import React from 'react';

const ViewUsers = ({ users }) => {
  return (
    <div>
      <h2>All Users</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewUsers;
