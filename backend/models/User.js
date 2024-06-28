const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ['Admin', 'Housekeeper', 'Matron', 'Student'],
  },
  registrationNumber: {
    type: String,
    unique: true,
  },
});

module.exports = mongoose.model('User', UserSchema);
