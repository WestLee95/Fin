import React, { useState } from 'react';

const AllocateRoom = ({ applications, allocateRoom }) => {
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [room, setRoom] = useState('');

  const handleAllocate = () => {
    allocateRoom(selectedApplication, room);
  };

  return (
    <div>
      <h2>Allocate Room</h2>
      <select onChange={(e) => setSelectedApplication(e.target.value)}>
        <option value="">Select Application</option>
        {applications.map((app, index) => (
          <option key={index} value={app.id}>{app.name}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Room Number"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
      />
      <button onClick={handleAllocate}>Allocate Room</button>
    </div>
  );
};

export default AllocateRoom;
