const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  city: {
    type: String,
    required: [true, 'City is required']
  },
  image: {
    type: String,
    required: false
  },
  speciality: {
    type: String,
    required: false
  },
  rating: {
    type: Number,
    required: false
  }
});

const Hospital = mongoose.model('Hospital', hospitalSchema);

module.exports = Hospital;
