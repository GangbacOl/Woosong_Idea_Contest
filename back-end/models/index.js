var Sequelize = require('sequelize'); 
var config = require("../config/config.json");
var db = {}; 

db_config = config.db_connection
var sequelize = new Sequelize(
    db_config.database, 
    db_config.username, 
    db_config.password, 
    db_config
); 

db.sequelize = sequelize; 
db.Sequelize = Sequelize; 
db.User = require('./user')(sequelize, Sequelize); 
db.Email_verified = require('./Email_verified')(sequelize, Sequelize); 
module.exports = db;