const Sequelize = require('sequelize');

const sequelize = new Sequelize('musicando', 'root', 'SqlDevPass01', {
    host: '127.0.0.1',
    dialect: 'mysql'
});

module.exports = sequelize;