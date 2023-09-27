const mysql = require('mysql');
const connection = mysql.createConnection({
    'host': '127.0.0.1',
    'user': 'root',
    'password': '',
    'database': 'fruitzivore',
})
/**
 * Fonction utilitaire permettant de faire une requête
 * 
 * Arguments: 
 *   query : Chaîne de caractères d'une requête SQL
 *   callback : Fonction de rappel qui sera appelée avec le résultat de la requête en cas de succès
 * 
 * Attention ! En cas d'erreur une exception sera levée, il faut entourer les appels à cette fonction par un try/except
 * try {
 *     sqlQuery(....)
 * } except {
 *     // Gestion de l'erreur ici
 * }
 */
function sqlQuery(query, callback){
    connection.connect(connError => {
        if(connError){
            console.log(connError);
            throw new Error("Connection error " + connError);
        }
        connection.query(query, (error, result) => {
            if(error){
                console.log(error);
                throw new Error("Query error " + error);
            }
            
            callback(result);
        });
        connection.end();
    });
}
// Exemple d'utilisation
// try {
//   sqlQuery("SELECT * FROM ma_table", (results) => {
//     console.log(results);
//   })
// } catch (error) {
//   console.log(error);   
// }

module.exports = sqlQuery;