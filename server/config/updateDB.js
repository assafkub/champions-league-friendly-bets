const config = require('../config/database');
const clAPI = require('../config/constCLAPI');
const Team = require('../models/Team');
const Mongoose = require('mongoose');
// const group = require('../models/Group');
// const competition = require('../models/Competition');
const request = require('request');


const updateDB = {


  dbPulling: (db)=>{
    dbInstance = db;
    request({
      url: clAPI.standings(),
      headers:{
        'X-Auth-Token': clAPI.APIKey()
      }
    }, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        updateDB.parseDataAndUpdateDB(JSON.parse(response.body), db);
      }
    });
  },

  parseDataAndUpdateDB: (json, db) =>{
    json.standings.forEach(function(d){
      if(d.type === 'TOTAL'){
        d.table.forEach(function(d1){
          var team = new Team();
          team.name = d1.team.name;
          team.group = d.group;
          team.id = d1.team.id;
          team.crestUrl = d1.team.crestUrl;
          team.playedGames = d1.playedGames;
          team.won = d1.won;
          team.draw = d1.draw;
          team.lost = d1.lost;
          team.points = d1.points;
          team.goalsFor = d1.goalsFor;
          team.goalsAgainst = d1.goalsAgainst;
          team.goalDifference = d1.goalDifference;

          Team.findOneAndUpdate({
            _id: d1.team.id
          }, team, { upsert: true }, function(err, res) {
          });
        });
      }
    });

  }

};


module.exports = updateDB;
