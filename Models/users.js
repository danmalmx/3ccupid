const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  google: {
    type: String
  },
  facebook: {
    type: String
  },
  firstname: {
    type: String
  },
  lasname: {
    type: String
  },
  fullname: {
    type: String
  },
  image: {
    type: String,
    default: '/img/userDefaultIMG.jpg'
  },
  email: {
    type: String
  },
  city: {
    type: String
  },
  country: {
    type: String
  },
  online: {
    type: Boolean,
    default: false
  },
  wallet: {
    type: Number,
    default: 0
  },
  password: {
    type: String
  }
});

module.exports = mongoose.model('User', userSchema)