var express = require('express');
var router = express.Router();
var sqlQuery = require('./mysql.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('test3');
  try {
    console.log('test2');
    sqlQuery("SELECT * FROM menus", (results) => {
      console.log(results);
      res.json(results);
    })
  } catch (error) {
    console.log(error);   
  }
});

module.exports = router;


