const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  gender: String,
  age: Number,
  disability: String,
  specialConditions: String,
  reason: String,
  hostel: String,
  status: {
    type: String,
    enum: ['Pending', 'Accepted', 'Rejected'],
    default: 'Pending',
  },
  room: String,
});

module.exports = mongoose.model('Application', ApplicationSchema);
