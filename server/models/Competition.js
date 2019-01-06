const Mongoose = require('mongoose');

// Create schema
let teamSchema = Mongoose.Schema({
  name: {
    type: String,
    require: true
  },

  emblemUrl: {
    type: String,
    require: true
  },

  id: {
    type: Number,
    require: true
  },
  startDate: {
    type: Date,
    require: true
  },
  endDate: {
    type: Date,
    require: true
  },
  currentMatchday: {
    type: Number,
    require: true
  }

});

// Export
let team = module.exports = Mongoose.model('team', teamSchema);
