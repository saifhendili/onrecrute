const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  typeuser: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  Notification: [
    {
      firstname: {
        type: String,
      },
      lastname: {
        type: String,
      },
      Title: {
        type: String,

      },  
      MeetingTime: {
        type: String,

      },  
      Meetingid: {
        type: String,

      },  
      State: {
        type: String,   
      },
      
    }],

});

module.exports = User = mongoose.model('user', UserSchema);