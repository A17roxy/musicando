const sequelize = require('../config.js');
const { Model, DataTypes } = require('sequelize');


class Artista extends Model { }

Artista.init({

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(45),
        allowNull: true
    },
    apellido: {
        type: DataTypes.STRING(45),
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'Artista',
    tableName: 'artistas',
    timestamps: false
});



module.exports = Artista;
