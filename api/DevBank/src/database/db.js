const {Sequelize} = require('sequelize');
const fs = require('fs');
const path = require('path');
const bcrypt = require("bcrypt");
require('dotenv').config


const db = {
    user: 'postgres',
    password: '123456789',
    host: 'localhost',
    port: '5432',
    table: 'henrybank'
}

const sequelize = new Sequelize(`postgres://${db.user}:${db.password}@${db.host}:${db.port}/${db.table}`, {
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


module.exports = {
    ...sequelize.models,
    conn: sequelize,
};

