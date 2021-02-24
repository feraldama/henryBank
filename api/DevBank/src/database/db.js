const {Sequelize} = require('sequelize');
const fs = require('fs');
const path = require('path');

const {
    DB_USER, DB_PASSWORD, DB_HOST, DB_TABLE, DB_PORT 
} = process.env;

// postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_TABLE}

const sequelize = new Sequelize('postgres://postgres:7931@localhost:5432/henrybank', {
    logging: false,
    native: false
});

const basename= path.basename(__filename);

const modelDefiners = []

fs.readdirSync(path.join(__dirname, './../models'))
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, './../models', file)))
    });

modelDefiners.forEach(model => model(sequelize));     

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);

sequelize.models = Object.fromEntries(capsEntries)

// try {
//     sequelize.authenticate()
//     console.log('Connection has been established successfully')
// } catch(error){
//     console.error('Unable to connect to the database: ', error)
// }

module.exports = {
    ...sequelize.models,
    conn: sequelize,
};

