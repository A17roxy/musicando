const sequelize = require('../config.js');
const { Model, DataTypes } = require('sequelize');

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



module.exports = Genero;
