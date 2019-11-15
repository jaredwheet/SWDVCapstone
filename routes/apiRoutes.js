// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var eatingArray = require("../data/eatingData");
var sleepArray = require("../data/sleepData");
var vitalsArray = require("../data/vitalsData");
// Requiring our Todo model
var db = require("../models");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/sleepData/", function(req, res) {
    db.Sleep.findAll({})
      .then(function(dbSleep) {
        res.json(dbSleep);
      });
  });

  app.get("/api/eatingData", function(req, res) {
    db.Eat.findAll({})
      .then(function(dbEat) {
        res.json(dbEat);
      });
  });
  
  app.get("/api/vitalsData", function(req, res) {
    db.Vitals.findAll({})
      .then(function(dbVitals) {
        res.json(dbPVitals);
      });
  });
  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/sleepData", function(req, res) {
    // // req.body is available since we're using the body parsing middleware    
    //   sleepArray.push(req.body);
    //   res.json(true);    
      console.log(req.body);
      db.Sleep.create({
        timeStart: req.body.timeStart,
        timeEnd: req.body.timeEnd,        
      })
        .then(function(dbSleep) {
          res.json(dbSleep);
        });
  
  
    
  });

  app.post("/api/eatingData", function(req, res) {
    // req.body is available since we're using the body parsing middleware    
      // eatingArray.push(req.body);
      // res.json(true); 
      console.log(req.body);
      db.Eat.create({
        timeStart: req.body.timeStart,
        timeEnd: req.body.timeEnd,        
      })
        .then(function(dbEat) {
          res.json(dbEat);
        });
     
    
  });

  app.post("/api/vitalsData", function(req, res) {
    // // req.body is available since we're using the body parsing middleware    
    //   vitalsArray.push(req.body);
    //   res.json(true);   
    console.log(req.body);
    db.Vitals.create({
      time: req.body.timestamp,
      height: req.body.height, 
      weight: req.body.weight       
    })
      .then(function(dbSleep) {
        res.json(dbSleep);
      });
 
    
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    tableData.length = [];
    waitListData.length = [];

    res.json({ ok: true });
  });
};
