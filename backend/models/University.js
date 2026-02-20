const mongoose = require('mongoose');

const universitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'University name is required'],
    trim: true
  },
  country: {
    type: String,
    required: [true, 'Country is required']
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  city: {
    type: String,
    default: ''
  },
  ranking: {
    type: String,
    default: ''
  },
  website: {
    type: String,
    default: ''
  },
  logo: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  programs: {
    type: String,
    default: ''
  },
  students: {
    type: String,
    default: ''
  },
  tuitionFee: {
    type: String,
    default: ''
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('University', universitySchema);
