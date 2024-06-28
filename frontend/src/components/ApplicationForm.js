import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const ApplicationForm = ({ submitApplication }) => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    gender: '',
    age: '',
    disability: '',
    specialConditions: '',
    reason: '',
    hostel: 'Mathendu',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitApplication(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Gender:</label>
        <input type="text" name="gender" value={formData.gender} onChange={handleChange} required />
      </div>
      <div>
        <label>Age:</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} required />
      </div>
      <div>
        <label>Disability:</label>
        <input type="text" name="disability" value={formData.disability} onChange={handleChange} required />
      </div>
      <div>
        <label>Special Conditions:</label>
        <input type="text" name="specialConditions" value={formData.specialConditions} onChange={handleChange} required />
      </div>
      <div>
        <label>Reason for Applying:</label>
        <input type="text" name="reason" value={formData.reason} onChange={handleChange} required />
      </div>
      <div>
        <label>Hostel:</label>
        <select name="hostel" value={formData.hostel} onChange={handleChange}>
          <option value="Mathendu">Mathendu</option>
          <option value="Mwingi">Mwingi</option>
          <option value="Muindi">Muindi</option>
          <option value="Masaku">Masaku</option>
          <option value="Indimuli">Indimuli</option>
        </select>
      </div>
      <button type="submit">Apply</button>
    </form>
  );
};

export default ApplicationForm;
