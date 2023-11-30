const sequelize = require('../config.js');
const { Model, DataTypes } = require('sequelize');
const Cancion = require('./canciones');

class Genero extends Model {}

Genero.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'Genero',
    tableName: 'generos',
    timestamps: false
});

Genero.hasMany(Cancion, { foreignKey: 'generoId', as: 'canciones' });

module.exports = Genero;
