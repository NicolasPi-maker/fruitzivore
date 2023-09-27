var express = require('express');
var router = express.Router();
var sqlQuery = require('./mysql.js')

/* GET all menus. */
router.get('/', function(req, res, next) {
  let query = "SELECT * FROM menus";
  try {
    sqlQuery(query, (error, results) => {
      res.json(results);
      res.status(200);
    })
  } catch (error) {
    res.status(500);
    throw new Error('Une erreur serveur est survenue');
  }
});

console.log('🥳');

/* GET menu informations by id */
router.get('/:id', function(req, res, next) {
  const currentId = req.params.id;
  if(!currentId) {
    res.status(404);
    throw new Error('Aucun identifiant n\'a été renseigné');
  }
  try {
    let query = 
    `
      SELECT * FROM menus
      JOIN plates p ON p.menu_id = ${currentId}
    `;
    sqlQuery(query, (error, results) => {

      res.json(results);
      res.status(200);
    })
  } catch (error) {
    res.status(500);
    throw new Error('Une erreur serveur est survenue');
  }
});

/* GET menu informations by id */
router.post('/', function(req, res, next) {
  const newPost = req.body;
  if(!newPost) {
    res.status(404);
    throw new Error('le produit est vide');
  }
  try {
    let query = 
    `
      INSERT INTO menus VALUES (
        ${newPost.title},
        ${newPost.description},
        ${newPost.price},
        ${newPost.thumbnail},
      );
    `;
    sqlQuery(query, (error, results) => {

      res.json(results);
      res.status(200);
    })
  } catch (error) {
    res.status(500);
    throw new Error('Une erreur serveur est survenue');
  }
});

/* Delete selected menu */
router.delete('/:id', function(req, res, next) {
  const currentId = req.params.id;
  if(!currentId) {
    res.status(404);
    throw new Error('Aucun identifiant n\'a été renseigné');
  }
  try {
    let query = 
    `
      DELETE FROM menus
      WHERE menu_id = ${currentId}
    `;
    sqlQuery(query, (error, results) => {
      res.status(200);
    })
  } catch (error) {
    res.status(500);
    throw new Error('Une erreur serveur est survenue');
  }
});

module.exports = router;


