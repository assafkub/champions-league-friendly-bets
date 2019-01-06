const Mongoose = require('mongoose');

// Create schema
let teamSchema = Mongoose.Schema({
  name: {
    type: String,
    require: true
  },

  crestUrl: {
    type: String,
    require: true
  },

  playedGames: {
    type: Number,
    require: true
  },
  won: {
    type: Number,
    require: true
  },
  draw: {
    type: Number,
    require: true
  },
  lost: {
    type: Number,
    require: true
  },
  points: {
    type: Number,
    require: true
  },
  goalsFor: {
    type: Number,
    require: true
  },
  goalsAgainst: {
    type: Number,
    require: true
  },
  goalDifference: {
    type: Number,
    require: true
  }

});

// Export
let team = module.exports = Mongoose.model('team', teamSchema);
