
const sequelize = require('../config.js');
const { Model, DataTypes } = require('sequelize');

class Album extends Model {}

Album.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    duracion: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'Album',
    tableName: 'albumes',
    timestamps: false
});



module.exports = Album;
