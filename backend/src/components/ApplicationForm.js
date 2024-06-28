import React, { useState } from 'react';
import axios from 'axios';

const ApplicationForm = () => {
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [disability, setDisability] = useState('');
  const [specialConditions, setSpecialConditions] = useState('');
  const [reason, setReason] = useState('');
  const [hostel, setHostel] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/application/apply', 
        { gender, age, disability, specialConditions, reason, hostel },
        { headers: { Authorization: token } }
      );
      alert('Application submitted successfully');
    } catch (error) {
      console.error('Application submission error', error);
    }
  };

  return (
    <div>
      <h2>Application Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Disability"
          value={disability}
          onChange={(e) => setDisability(e.target.value)}
        />
        <input
          type="text"
          placeholder="Special Conditions"
          value={specialConditions}
          onChange={(e) => setSpecialConditions(e.target.value)}
        />
        <textarea
          placeholder="Reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        ></textarea>
        <input
          type="text"
          placeholder="Hostel"
          value={hostel}
          onChange={(e) => setHostel(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ApplicationForm;
