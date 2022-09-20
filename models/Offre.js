const mongoose = require('mongoose');

const OffreSchema = new mongoose.Schema({
 
    Title: {
    type: String,
    required:true
  },
  Description: {
    type: String,
    required:true

  },
  Address: {
    type: String,
    required:true

  },
  Type: {
    type: String,
    required:true
  },
  date: {
    type: Date,
    default:Date.now()
  },

  Condidature: [
    {
      user:{
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
      firstname: {
        type: String,
     },
      lastname: {
        type: String,
        
      },
      email: {
        type: String,

      },  
      resume: {
        type: String,   
      },
      MeetingTime: {
        type: Date,
      },
      State: {
        type: String,   
        default:"untreated"
      },
      
    }],
});

module.exports = Offre = mongoose.model('offre', OffreSchema);