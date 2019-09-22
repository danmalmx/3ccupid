const mongoose = require('mongoose');
const schema = mongoose.Schema;

const messageSchema = new schema({
  fullname: {
    type: String
  },
  email: {
  },
  message: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('message', messageSchema);